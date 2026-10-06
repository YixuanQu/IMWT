#!/usr/bin/env node
/* ============================================================
   LMML — build js/data.js from its two source files

     data/lmml-metadata.jsonld   descriptive metadata: places, films, appearances
     data/site-content.json      page-only content: the 3-axis texts and the narratives

   Usage (from the project root, Node 14+, no dependencies):
     node tools/build-data.js           write js/data.js
     node tools/build-data.js --check   exit 1 if js/data.js is out of date

   js/data.js is a GENERATED file: edit the two sources, then run this script.
   ============================================================ */
"use strict";
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const read = (p) => JSON.parse(fs.readFileSync(path.join(root, p), "utf8"));
const jsonld = read("data/lmml-metadata.jsonld");
const content = read("data/site-content.json");
const OUT = path.join(root, "js/data.js");

/* ---------- helpers ---------- */
const graph = jsonld["@graph"];
const byId = {};
graph.forEach((n) => { if (n["@id"]) byId[n["@id"]] = n; });
const val = (x) => (x && typeof x === "object" && "@value" in x ? x["@value"] : x);
const asArray = (x) => (x === undefined ? [] : Array.isArray(x) ? x : [x]);
const ref = (x) => (x && typeof x === "object" ? x["@id"] : x);
const fail = (msg) => { console.error("build-data: " + msg); process.exit(1); };

/* ---------- locations ---------- */
const locNodes = graph.filter((n) => String(n["@id"]).startsWith("loc:"));
if (!locNodes.length) fail("no loc:* nodes found in the JSON-LD");

const actNodes = graph.filter((n) => asArray(n["@type"]).includes("FilmAction"));

const locations = locNodes.map((n) => {
  const id = parseInt(n.identifier, 10);
  const name = val(n.name);
  const alts = asArray(n.alternateName);
  const itAlt = alts.find((a) => a["@language"] === "it");
  const enAlt = alts.find((a) => a["@language"] === "en");

  const appearances = actNodes
    .filter((a) => ref(a.location) === n["@id"])
    .map((a) => {
      const movie = byId[ref(a.object)];
      if (!movie) fail("appearance " + a["@id"] + " points to a missing film");
      const director = byId[ref(movie.director)];
      return {
        movieTitle: val(movie.name),
        director: director ? val(director.name) : undefined,
        year: parseInt(val(movie.datePublished), 10),
        scene: val(a.description),
        specificImageUrl: ref(a.image),
        cameraOrientation: val(a["lmml:cameraOrientation"])
      };
    });

  const t = content.texts[String(id)];
  if (!t) fail("data/site-content.json has no texts for location " + id);

  return {
    id: id,
    name: name,
    coordinates: [n.geo.latitude, n.geo.longitude],
    address: n.address,
    openingHours: val(n["lmml:openingHoursNote"]),
    builtYear: parseInt(val(n["dcterms:created"]), 10),
    builtYearLabel: n["lmml:builtYearLabel"],
    builtEra: ref(n["lmml:builtEra"]).replace(/^era:/, ""),
    imageUrl: ref(n.image),
    semanticMetadata: {
      locationContext: {
        officialNameIT: itAlt ? val(itAlt) : name,
        officialNameEN: enAlt ? val(enAlt) : name,
        featureType: val(n["lmml:featureType"]),
        architecturalStyle: val(n["lmml:architecturalStyle"])
      }
    },
    appearances: appearances,
    content: t.content,
    tone: t.tone,
    competence: t.competence
  };
});

const narratives = content.narratives;

/* ---------- consistency checks ---------- */
const ids = new Set(locations.map((l) => l.id));
narratives.forEach((nar) => nar.chapters.forEach((c) => c.locationIds.forEach((i) => {
  if (!ids.has(i)) fail("narrative '" + nar.id + "' uses unknown location id " + i);
})));

/* ---------- write ---------- */
const out =
`/* ============================================================
   LMML — Rome Cinema Walk
   GENERATED FILE — do not edit by hand.
   Built by tools/build-data.js from:
     data/lmml-metadata.jsonld   (places, films, appearances)
     data/site-content.json      (reading texts and narratives)
   ============================================================ */

const locations = ${JSON.stringify(locations, null, 2)};

const narratives = ${JSON.stringify(narratives, null, 2)};
`;

if (process.argv.includes("--check")) {
  const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, "utf8") : "";
  if (current !== out) { console.error("js/data.js is out of date: run  node tools/build-data.js"); process.exit(1); }
  console.log("js/data.js is up to date (" + locations.length + " locations, " + narratives.length + " narratives).");
} else {
  fs.writeFileSync(OUT, out);
  console.log("wrote js/data.js: " + locations.length + " locations, " + narratives.length + " narratives, " +
    locations.reduce((s, l) => s + l.appearances.length, 0) + " appearances.");
}
