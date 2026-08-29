/* ============================================================
   LMML — Rome Cinema Walk
   Unified Metadata Architecture (20 Locations, real photo set)
   Appearances reconciled against the actual img/ folder contents
   (movie folders + img/locations general shots), 2026-08-26.
   Strictly complies with RSTU and Deliberate Design Paradigms.
   ============================================================ */

const locations = [
  {
    id: 1,
    name: "Terme di Caracalla",
    coordinates: [41.8792, 12.4926],
    address: "Viale delle Terme di Caracalla, 52, 00153 Roma RM",
    openingHours: "Typically 9:00–19:00 in summer, shorter in winter (closed Mondays); ticketed",
    builtYear: 216,
    builtYearLabel: "AD 216",
    builtEra: "ancient",
    imageUrl: "img/locations/Baths_of_Caracalla.jpg",
    semanticMetadata: {
      locationContext: {
        officialNameIT: "Terme di Caracalla",
        officialNameEN: "Baths of Caracalla",
        featureType: "Ancient Roman Public Baths",
        architecturalStyle: "Imperial Roman Architecture",
        historicalSignificance: "Constructed between AD 212 and 216 under Emperor Caracalla."
      }
    },
    appearances: [
      {
        movieTitle: "La Dolce Vita",
        director: "Federico Fellini",
        year: 1960,
        scene: "Sylvia and Marcello wandering through the majestic brick ruins at night.",
        specificImageUrl: "img/La_Dolce_Vita/caracalla.JPG",
        cameraOrientation: "Low-angle wide shot tracking forward, facing the massive standing caldarium walls.",
        diegeticStatus: "Rome (Playing itself)"
      },
      {
        movieTitle: "La Grande Bellezza",
        director: "Paolo Sorrentino",
        year: 2013,
        scene: "Jep Gambardella encounters a giraffe controlled by an illusionist among the towering arches.",
        specificImageUrl: "img/La_Grande_Bellezza/caracalla.JPG",
        cameraOrientation: "Stationary long shot, framing the central tepidarium vaults under surreal purple evening gel-lighting.",
        diegeticStatus: "Rome (Playing itself)"
      }
    ],
    content: {
      brief: "Rome's second-largest ancient bath complex, big enough for 1,600 bathers at once.",
      mid: "At its peak it could accommodate roughly 1,600 bathers at once, with a frigidarium, tepidarium, caldarium, gymnasia, libraries and gardens spread across some ten hectares. The baths stayed in use until the Ostrogoths cut the aqueducts feeding them during the siege of 537, after which they fell into ruin.",
      long: "At its peak it could accommodate roughly 1,600 bathers at once, with a frigidarium, tepidarium, caldarium, gymnasia, libraries and gardens spread across some ten hectares. The baths stayed in use until the Ostrogoths cut the aqueducts feeding them during the siege of 537, after which they fell into ruin. Since 1937 the towering brick ruins have hosted open-air opera, including Verdi's Aida, though the use of large mechanized sets was banned in 2001 to protect the ancient fabric It was the second-largest bath complex ever built in Rome, after the later Baths of Diocletian, and its surviving vaulted halls still rank among the most awe-inspiring ruins of the ancient city."
    },
    tone: {
      young: "Here's something cool about Terme di Caracalla: since 1937 the towering brick ruins have hosted open-air opera, including Verdi's Aida, though the use of large mechanized sets was banned in 2001 to protect the ancient fabric.",
      adult: "Baths of Caracalla has a story worth knowing before you walk up to it: begun around AD 206 under Emperor Septimius Severus and completed in AD 216 by his son Caracalla.",
      scholar: "Baths of Caracalla, an example of imperial Roman Architecture: begun around AD 206 under Emperor Septimius Severus and completed in AD 216 by his son Caracalla."
    },
    competence: {
      introductory: "In short, it was the second-largest bath complex ever built in Rome, after the later Baths of Diocletian, and its surviving vaulted halls still rank among the most awe-inspiring ruins of the ancient city — no art history degree required to appreciate that.",
      average: "Taken together, this is why it was the second-largest bath complex ever built in Rome, after the later Baths of Diocletian, and its surviving vaulted halls still rank among the most awe-inspiring ruins of the ancient city.",
      advanced: "Read against the wider arc of Roman architectural history, it was the second-largest bath complex ever built in Rome, after the later Baths of Diocletian, and its surviving vaulted halls still rank among the most awe-inspiring ruins of the ancient city, a point worth weighing against how the site is used and read today."
    }
  },
  {
    id: 2,
    name: "Fontana di Trevi",
    coordinates: [41.9009, 12.4833],
    address: "Piazza di Trevi, 00187 Roma RM",
    openingHours: "Open 24 hours — public fountain, free access",
    builtYear: 1762,
    builtYearLabel: "1762",
    builtEra: "baroque",
    imageUrl: "img/locations/Trevi_Fountain.jpg",
    semanticMetadata: {
      locationContext: {
        officialNameIT: "Fontana di Trevi",
        officialNameEN: "Trevi Fountain",
        featureType: "Baroque Monumental Fountain",
        architecturalStyle: "Late Baroque",
        historicalSignificance: "Designed by Nicola Salvi and finished in 1762 at the terminus of the Aqua Virgo."
      }
    },
    appearances: [
      {
        movieTitle: "Roman Holiday",
        director: "William Wyler",
        year: 1953,
        scene: "Princess Ann and Joe pause near the fountain during their day of unsupervised freedom across the city.",
        specificImageUrl: "img/Roman_Holiday/fontana_di_trevi.JPG",
        cameraOrientation: "Wide establishing shot of the fountain facade, actors framed small against the monumental travertine backdrop.",
        diegeticStatus: "Rome (Playing itself)"
      },
      {
        movieTitle: "La Dolce Vita",
        director: "Federico Fellini",
        year: 1960,
        scene: "Sylvia wades into the fountain at night, calling Marcello to join her, in the film's most iconic sequence.",
        specificImageUrl: "img/La_Dolce_Vita/fontana_di_trevi.png",
        cameraOrientation: "Wide shot of the full fountain facade, actors small against the illuminated travertine and flowing water.",
        diegeticStatus: "Rome (Playing itself)"
      },
      {
        movieTitle: "To Rome with Love",
        director: "Woody Allen",
        year: 2012,
        scene: "One of the film's four intersecting stories brings its characters wandering past the fountain amid the city's tourist bustle.",
        specificImageUrl: "img/To_Rome_with_Love/fontana_di_trevi.JPG",
        cameraOrientation: "Wide handheld shot capturing the crowd and fountain together.",
        diegeticStatus: "Rome (Playing itself) — NEEDS VERIFICATION"
      }
    ],
    content: {
      brief: "Rome's largest Baroque fountain, thirty years in the making.",
      mid: "It marks the terminus of the Aqua Virgo, an aqueduct completed in 19 BC under Augustus, and its central figure is Oceanus riding a shell chariot pulled by sea-horses through a scheme called the \"Taming of the Waters\". Salvi won the papal design competition of 1732 only after public outrage that the first choice, Alessandro Galilei, was a Florentine rather than a Roman.",
      long: "It marks the terminus of the Aqua Virgo, an aqueduct completed in 19 BC under Augustus, and its central figure is Oceanus riding a shell chariot pulled by sea-horses through a scheme called the \"Taming of the Waters\". Salvi won the papal design competition of 1732 only after public outrage that the first choice, Alessandro Galilei, was a Florentine rather than a Roman. Tradition holds that a coin tossed over the shoulder into the basin guarantees a return to Rome, a custom that now nets the city roughly a million euros a year for charity It is Rome's largest Baroque fountain and among the most recognisable fountains in the world."
    },
    tone: {
      young: "Here's something cool about Fontana di Trevi: tradition holds that a coin tossed over the shoulder into the basin guarantees a return to Rome, a custom that now nets the city roughly a million euros a year for charity.",
      adult: "Trevi Fountain has a story worth knowing before you walk up to it: designed by Nicola Salvi from 1732 and completed in 1762, eleven years after his death, by Giuseppe Pannini.",
      scholar: "Trevi Fountain, an example of late Baroque: designed by Nicola Salvi from 1732 and completed in 1762, eleven years after his death, by Giuseppe Pannini."
    },
    competence: {
      introductory: "In short, it is Rome's largest Baroque fountain and among the most recognisable fountains in the world — no art history degree required to appreciate that.",
      average: "Taken together, this is why it is Rome's largest Baroque fountain and among the most recognisable fountains in the world.",
      advanced: "Read against the wider arc of Roman architectural history, it is Rome's largest Baroque fountain and among the most recognisable fountains in the world, a point worth weighing against how the site is used and read today."
    }
  },
  {
    id: 3,
    name: "Musei Capitolini",
    coordinates: [41.8929, 12.4826],
    address: "Piazza del Campidoglio, 1, 00186 Roma RM",
    openingHours: "Typically 9:30–19:30 daily (closed 25 Dec, 1 Jan); ticketed",
    builtYear: 1536,
    builtYearLabel: "1536",
    builtEra: "renaissance",
    imageUrl: "img/locations/Capitoline_Museums.jpg",
    semanticMetadata: {
      locationContext: {
        officialNameIT: "Musei Capitolini",
        officialNameEN: "Capitoline Museums",
        featureType: "Municipal Palace and Museum Complex",
        architecturalStyle: "Renaissance / Mannerist",
        historicalSignificance: "Urban layout and architectural structural shells designed by Michelangelo Buonarroti starting in 1536."
      }
    },
    appearances: [
      {
        movieTitle: "The Talented Mr. Ripley",
        director: "Anthony Minghella",
        year: 1999,
        scene: "Marge searches the museum galleries, tension mounting as she pieces together Dickie's disappearance.",
        specificImageUrl: "img/The_Talented_Mr_Ripley/musei_capitolini.JPG",
        cameraOrientation: "Handheld medium shot following Marge through the sculpture halls.",
        diegeticStatus: "Rome (Playing itself) — NEEDS VERIFICATION"
      },
      {
        movieTitle: "La Grande Bellezza",
        director: "Paolo Sorrentino",
        year: 2013,
        scene: "Jep wanders the sculpture galleries at night, alone with the marble busts of ancient Rome.",
        specificImageUrl: "img/La_Grande_Bellezza/musei_capitolini.JPG",
        cameraOrientation: "Slow tracking shot down the gallery, statues lit in cold museum light against the dark background.",
        diegeticStatus: "Rome (Playing itself) — NEEDS VERIFICATION"
      }
    ],
    content: {
      brief: "Widely considered the world's oldest public museum, founded in 1471.",
      mid: "The piazza and its two flanking palaces were redesigned from 1536 by Michelangelo, commissioned for the ceremonial visit of Holy Roman Emperor Charles V, though the Palazzo Nuovo that completes his trapezoidal plan wasn't finished until decades after his death. The museum is generally considered the oldest public museum in the world, its collection open to visitors since long before the concept of a national museum existed elsewhere in Europe.",
      long: "The piazza and its two flanking palaces were redesigned from 1536 by Michelangelo, commissioned for the ceremonial visit of Holy Roman Emperor Charles V, though the Palazzo Nuovo that completes his trapezoidal plan wasn't finished until decades after his death. The museum is generally considered the oldest public museum in the world, its collection open to visitors since long before the concept of a national museum existed elsewhere in Europe. Its holdings today range from the Capitoline Wolf to Bernini's bust of Medusa and Caravaggio's Fortune Teller It set the template for the modern idea that art and antiquities belong to the public, not just to popes and princes."
    },
    tone: {
      young: "Here's something cool about Musei Capitolini: its holdings today range from the Capitoline Wolf to Bernini's bust of Medusa and Caravaggio's Fortune Teller.",
      adult: "Capitoline Museums has a story worth knowing before you walk up to it: founded in 1471, when Pope Sixtus IV donated a group of ancient bronzes to the people of Rome.",
      scholar: "Capitoline Museums, an example of renaissance / Mannerist: founded in 1471, when Pope Sixtus IV donated a group of ancient bronzes to the people of Rome."
    },
    competence: {
      introductory: "In short, it set the template for the modern idea that art and antiquities belong to the public, not just to popes and princes — no art history degree required to appreciate that.",
      average: "Taken together, this is why it set the template for the modern idea that art and antiquities belong to the public, not just to popes and princes.",
      advanced: "Read against the wider arc of Roman architectural history, it set the template for the modern idea that art and antiquities belong to the public, not just to popes and princes, a point worth weighing against how the site is used and read today."
    }
  },
  {
    id: 4,
    name: "Parco degli Acquedotti",
    coordinates: [41.8542, 12.5518],
    address: "Via Appia Nuova, 00178 Roma RM",
    openingHours: "Open 24 hours — public park, free access",
    builtYear: 52,
    builtYearLabel: "AD 52",
    builtEra: "ancient",
    imageUrl: "img/locations/Park%20of%20the%20Aqueducts.jpg",
    semanticMetadata: {
      locationContext: {
        officialNameIT: "Parco degli Acquedotti",
        officialNameEN: "Park of the Aqueducts",
        featureType: "Archaeological Public Park",
        architecturalStyle: "Ancient Roman Aqueduct Systems",
        historicalSignificance: "Contains monumental remnants of the Aqua Claudia and Aqua Marcia, spanning the Roman countryside."
      }
    },
    appearances: [
      {
        movieTitle: "The Talented Mr. Ripley",
        director: "Anthony Minghella",
        year: 1999,
        scene: "A tense pursuit sequence winds along the ancient aqueduct's arches on the city's outskirts.",
        specificImageUrl: "img/The_Talented_Mr_Ripley/parco_degli_acquedotti.JPG",
        cameraOrientation: "Wide tracking shot along the arcade, figures small against the scale of the ruins.",
        diegeticStatus: "Rome (Playing itself) — NEEDS VERIFICATION"
      },
      {
        movieTitle: "To Rome with Love",
        director: "Woody Allen",
        year: 2012,
        scene: "A quieter interlude away from the city center, characters walking and talking beneath the aqueduct arches.",
        specificImageUrl: "img/To_Rome_with_Love/parco_degli_acquedotti.JPG",
        cameraOrientation: "Wide static shot with the characters small against the line of arches.",
        diegeticStatus: "Rome (Playing itself) — NEEDS VERIFICATION"
      },
      {
        movieTitle: "La Grande Bellezza",
        director: "Paolo Sorrentino",
        year: 2013,
        scene: "Jep takes one of his contemplative early-morning walks beneath the ancient aqueduct arches, a recurring visual motif in the film.",
        specificImageUrl: "img/La_Grande_Bellezza/parco_degli_acquedotti.JPG",
        cameraOrientation: "Wide tracking shot along the line of arches, the lone figure dwarfed by the ancient structure.",
        diegeticStatus: "Rome (Playing itself)"
      }
    ],
    content: {
      brief: "A public park strung with the arches of six centuries of Roman aqueducts.",
      mid: "The park also carries the remains of the Anio Novus, Aqua Marcia and the later Renaissance-era Aqua Felice, making it a rare place where roughly six centuries of Roman water engineering stand side by side. The aqueducts once carried water for miles into the city from springs in the Apennine foothills, using nothing but gravity and precisely calculated gradients.",
      long: "The park also carries the remains of the Anio Novus, Aqua Marcia and the later Renaissance-era Aqua Felice, making it a rare place where roughly six centuries of Roman water engineering stand side by side. The aqueducts once carried water for miles into the city from springs in the Apennine foothills, using nothing but gravity and precisely calculated gradients. Today the arches march across open parkland on Rome's southeastern edge, a public park since the 1960s and now a favourite backdrop for photographers and joggers alike It's one of the few places where you can see the sheer scale of Roman infrastructure without a single modern building in the frame."
    },
    tone: {
      young: "Here's something cool about Parco degli Acquedotti: today the arches march across open parkland on Rome's southeastern edge, a public park since the 1960s and now a favourite backdrop for photographers and joggers alike.",
      adult: "Park of the Aqueducts has a story worth knowing before you walk up to it: named for the ancient aqueducts that cross it, chiefly the Aqua Claudia, begun under Caligula and completed by Claudius in AD 52.",
      scholar: "Park of the Aqueducts, an example of ancient Roman Aqueduct Systems: named for the ancient aqueducts that cross it, chiefly the Aqua Claudia, begun under Caligula and completed by Claudius in AD 52."
    },
    competence: {
      introductory: "In short, it's one of the few places where you can see the sheer scale of Roman infrastructure without a single modern building in the frame — no art history degree required to appreciate that.",
      average: "Taken together, this is why it's one of the few places where you can see the sheer scale of Roman infrastructure without a single modern building in the frame.",
      advanced: "Read against the wider arc of Roman architectural history, it's one of the few places where you can see the sheer scale of Roman infrastructure without a single modern building in the frame, a point worth weighing against how the site is used and read today."
    }
  },
  {
    id: 5,
    name: "Basilica di Santa Maria in Cosmedin",
    coordinates: [41.8881, 12.4817],
    address: "Piazza della Bocca della Verità, 18, 00186 Roma RM",
    openingHours: "Typically 9:30–17:50 daily; free entry",
    builtYear: 1123,
    builtYearLabel: "1123",
    builtEra: "ancient",
    imageUrl: "img/locations/Basilica_of_Saint_Mary_in_Cosmedin.jpg",
    semanticMetadata: {
      locationContext: {
        officialNameIT: "Basilica di Santa Maria in Cosmedin",
        officialNameEN: "Basilica of Saint Mary in Cosmedin",
        address: "{'streetAddress': 'Piazza della Bocca della Verità, 18', 'postalCode': '00186', 'addressLocality': 'Roma', 'addressRegion': 'Lazio', 'addressCountry': 'Italia'}",
        featureType: "Minor Basilica and Portico",
        architecturalStyle: "Romanesque / Medieval",
        historicalSignificance: "Built in the 8th century, famous for housing the Bocca della Verità (Mouth of Truth) in its portico."
      }
    },
    appearances: [
      {
        movieTitle: "Roman Holiday",
        director: "William Wyler",
        year: 1953,
        scene: "Joe pretends the Bocca della Verità has bitten off his hand, frightening Ann in one of the film's most quoted moments.",
        specificImageUrl: "img/Roman_Holiday/basilica_di_santa_maria_in_cosmedin.JPG",
        cameraOrientation: "Medium two-shot at the mouth of the ancient marble mask, capturing both actors' reactions in one take.",
        diegeticStatus: "Rome (Playing itself)"
      }
    ],
    content: {
      brief: "A 12th-century church best known for the mask in its porch, the Bocca della Verità.",
      mid: "The portico houses the Bocca della Verità, a large ancient marble mask — probably once a drain cover — that medieval legend claimed would bite off the hand of anyone who told a lie while holding it inside. The church's Greek Byzantine roots gave it the name \"in Cosmedin,\" adapted from the Greek word for \"ornate\" or \"beautiful\".",
      long: "The portico houses the Bocca della Verità, a large ancient marble mask — probably once a drain cover — that medieval legend claimed would bite off the hand of anyone who told a lie while holding it inside. The church's Greek Byzantine roots gave it the name \"in Cosmedin,\" adapted from the Greek word for \"ornate\" or \"beautiful\". The Bocca della Verità now draws a daily queue of visitors long before most of them ever see the church behind it It's one of Rome's best-preserved medieval churches, tucked in the shadow of its own far more famous doorstep attraction."
    },
    tone: {
      young: "Here's something cool about Basilica di Santa Maria in Cosmedin: the Bocca della Verità now draws a daily queue of visitors long before most of them ever see the church behind it.",
      adult: "Basilica of Saint Mary in Cosmedin has a story worth knowing before you walk up to it: traces its origins to the 6th century, when Greek refugees from Byzantine iconoclasm founded a diaconia here; the current Romanesque form, including the bell tower, dates largely from the 12th century.",
      scholar: "Basilica of Saint Mary in Cosmedin, an example of romanesque / Medieval: traces its origins to the 6th century, when Greek refugees from Byzantine iconoclasm founded a diaconia here; the current Romanesque form, including the bell tower, dates largely from the 12th century."
    },
    competence: {
      introductory: "In short, it's one of Rome's best-preserved medieval churches, tucked in the shadow of its own far more famous doorstep attraction — no art history degree required to appreciate that.",
      average: "Taken together, this is why it's one of Rome's best-preserved medieval churches, tucked in the shadow of its own far more famous doorstep attraction.",
      advanced: "Read against the wider arc of Roman architectural history, it's one of Rome's best-preserved medieval churches, tucked in the shadow of its own far more famous doorstep attraction, a point worth weighing against how the site is used and read today."
    }
  },
  {
    id: 6,
    name: "Villa Medici",
    coordinates: [41.9083, 12.4828],
    address: "Viale della Trinità dei Monti, 1, 00187 Roma RM",
    openingHours: "Guided tours only, Tue–Sun; closed Mondays — check official site for slots",
    builtYear: 1544,
    builtYearLabel: "1544",
    builtEra: "renaissance",
    imageUrl: "img/locations/Villa_Medici.jpg",
    semanticMetadata: {
      locationContext: {
        officialNameIT: "Villa Medici",
        officialNameEN: "Villa Medici",
        featureType: "Mannerist Palace and Renaissance Gardens",
        architecturalStyle: "Late Renaissance / Mannerism",
        historicalSignificance: "Acquired by Cardinal Ferdinando de' Medici in 1576; houses the French Academy in Rome since 1803."
      }
    },
    appearances: [
      {
        movieTitle: "La Grande Bellezza",
        director: "Paolo Sorrentino",
        year: 2013,
        scene: "A private garden party scene set within the villa's grounds, part of Rome's rarefied high society Jep moves through.",
        specificImageUrl: "img/La_Grande_Bellezza/villa_medici.JPG",
        cameraOrientation: "Wide crane shot descending over the formal gardens and party guests.",
        diegeticStatus: "Rome (Playing itself) — NEEDS VERIFICATION"
      }
    ],
    content: {
      brief: "A Renaissance villa on the Pincian Hill, home to the French Academy since 1803.",
      mid: "In 1803, Napoleon relocated the French Academy in Rome here — an institution founded in 1666 under Louis XIV to send the winners of the Prix de Rome to study antiquity and the Renaissance masters in Rome. The Academy had moved through several Roman palaces before Villa Medici became its permanent home, and its roster of resident fellows has included Ingres, Berlioz, Debussy and Fragonard.",
      long: "In 1803, Napoleon relocated the French Academy in Rome here — an institution founded in 1666 under Louis XIV to send the winners of the Prix de Rome to study antiquity and the Renaissance masters in Rome. The Academy had moved through several Roman palaces before Villa Medici became its permanent home, and its roster of resident fellows has included Ingres, Berlioz, Debussy and Fragonard. It remains an active residency for French and international artists, with its Renaissance gardens and hilltop views over Rome open to the public by guided tour It's a rare case of a Medici family villa still doing exactly the kind of work it was built for: housing artists."
    },
    tone: {
      young: "Here's something cool about Villa Medici: it remains an active residency for French and international artists, with its Renaissance gardens and hilltop views over Rome open to the public by guided tour.",
      adult: "Villa Medici has a story worth knowing before you walk up to it: built in 1544 by architect Annibale Lippi for Cardinal Giovanni Ricci da Montepulciano, then bought in 1576 by Cardinal Ferdinando de' Medici.",
      scholar: "Villa Medici, an example of late Renaissance / Mannerism: built in 1544 by architect Annibale Lippi for Cardinal Giovanni Ricci da Montepulciano, then bought in 1576 by Cardinal Ferdinando de' Medici."
    },
    competence: {
      introductory: "In short, it's a rare case of a Medici family villa still doing exactly the kind of work it was built for: housing artists — no art history degree required to appreciate that.",
      average: "Taken together, this is why it's a rare case of a Medici family villa still doing exactly the kind of work it was built for: housing artists.",
      advanced: "Read against the wider arc of Roman architectural history, it's a rare case of a Medici family villa still doing exactly the kind of work it was built for: housing artists, a point worth weighing against how the site is used and read today."
    }
  },
  {
    id: 7,
    name: "Palazzo della Civiltà Italiana",
    coordinates: [41.8372, 12.4653],
    address: "Quadrato della Concordia, 3, 00144 Roma RM (EUR)",
    openingHours: "Private headquarters (Fendi) — exterior viewing only, not open to the public",
    builtYear: 1943,
    builtYearLabel: "1943",
    builtEra: "contemporary",
    imageUrl: "img/locations/Palace_of_Italian_civilization.jpg",
    semanticMetadata: {
      locationContext: {
        officialNameIT: "Palazzo della Civiltà Italiana",
        officialNameEN: "Palace of Italian Civilization",
        featureType: "Rationalist Monumental Building",
        architecturalStyle: "Italian Rationalism / Fascist Architecture",
        historicalSignificance: "Designed in 1938 for the planned 1942 World Exhibition (EUR); colloquially known as the 'Square Colosseum'."
      }
    },
    appearances: [
      {
        movieTitle: "La Dolce Vita",
        director: "Federico Fellini",
        year: 1960,
        scene: "The film's closing sequence unfolds at dawn amid the stark, rationalist architecture of the EUR district.",
        specificImageUrl: "img/La_Dolce_Vita/palazzo_della_civilta_italiana.JPG",
        cameraOrientation: "Wide static shot emphasizing the building's severe geometric facade against the early morning sky.",
        diegeticStatus: "Rome (Playing itself) — NEEDS VERIFICATION"
      }
    ],
    content: {
      brief: "A stark travertine cube built for a 1942 world's fair that never happened.",
      mid: "It was conceived as the centrepiece of the EUR district, a new quarter Mussolini commissioned for a 1942 World's Fair that never took place because of the Second World War. Its facade repeats a single arch motif 216 times across six rows on each of its four identical sides, stripping the Colosseum's arcade down to pure, ornament-free geometry.",
      long: "It was conceived as the centrepiece of the EUR district, a new quarter Mussolini commissioned for a 1942 World's Fair that never took place because of the Second World War. Its facade repeats a single arch motif 216 times across six rows on each of its four identical sides, stripping the Colosseum's arcade down to pure, ornament-free geometry. Romans nicknamed it the \"Colosseo Quadrato\" — the Square Colosseum — and it now houses the headquarters of the fashion house Fendi It's one of the most complete surviving statements of Fascist-era Rationalist architecture, built to look ancient and modern at once."
    },
    tone: {
      young: "Here's something cool about Palazzo della Civiltà Italiana: romans nicknamed it the \"Colosseo Quadrato\" — the Square Colosseum — and it now houses the headquarters of the fashion house Fendi.",
      adult: "Palace of Italian Civilization has a story worth knowing before you walk up to it: designed in 1937–38 by architects Giovanni Guerrini, Ernesto La Padula and Mario Romano, with the plan revised by Marcello Piacentini, and built between 1938 and 1943.",
      scholar: "Palace of Italian Civilization, an example of italian Rationalism / Fascist Architecture: designed in 1937–38 by architects Giovanni Guerrini, Ernesto La Padula and Mario Romano, with the plan revised by Marcello Piacentini, and built between 1938 and 1943."
    },
    competence: {
      introductory: "In short, it's one of the most complete surviving statements of Fascist-era Rationalist architecture, built to look ancient and modern at once — no art history degree required to appreciate that.",
      average: "Taken together, this is why it's one of the most complete surviving statements of Fascist-era Rationalist architecture, built to look ancient and modern at once.",
      advanced: "Read against the wider arc of Roman architectural history, it's one of the most complete surviving statements of Fascist-era Rationalist architecture, built to look ancient and modern at once, a point worth weighing against how the site is used and read today."
    }
  },
  {
    id: 8,
    name: "Piazza del Popolo",
    coordinates: [41.9109, 12.4761],
    address: "Piazza del Popolo, 00187 Roma RM",
    openingHours: "Open 24 hours — public square, free access",
    builtYear: 1822,
    builtYearLabel: "1822",
    builtEra: "contemporary",
    imageUrl: "img/locations/PIAZZA_DEL_POPOLO.jpg",
    semanticMetadata: {
      locationContext: {
        officialNameIT: "Piazza del Popolo",
        officialNameEN: "People's Square",
        featureType: "Neoclassical Urban Public Square",
        architecturalStyle: "Neoclassical",
        historicalSignificance: "Redesigned by Giuseppe Valadier between 1811 and 1822, incorporating a central Egyptian obelisk."
      }
    },
    appearances: [
      {
        movieTitle: "La Dolce Vita",
        director: "Federico Fellini",
        year: 1960,
        scene: "Marcello and his companions pass through the piazza during one of the film's late-night wanderings.",
        specificImageUrl: "img/La_Dolce_Vita/piazza_del_popolo.png",
        cameraOrientation: "Wide shot of the piazza's obelisk and twin churches as figures cross in the foreground.",
        diegeticStatus: "Rome (Playing itself) — NEEDS VERIFICATION"
      },
      {
        movieTitle: "To Rome with Love",
        director: "Woody Allen",
        year: 2012,
        scene: "Characters cross the piazza amid the film's roving anthology structure, the obelisk and churches framing the scene.",
        specificImageUrl: "img/To_Rome_with_Love/piazza_del_popolo.JPG",
        cameraOrientation: "Wide establishing shot of the piazza with figures crossing in the foreground.",
        diegeticStatus: "Rome (Playing itself) — NEEDS VERIFICATION"
      }
    ],
    content: {
      brief: "A grand Neoclassical square, redesigned by Giuseppe Valadier in the early 1800s.",
      mid: "At its centre stands an Egyptian obelisk brought to Rome under Augustus, flanked at the square's southern entrance by twin Baroque churches, Santa Maria dei Miracoli and Santa Maria in Montesanto, built to frame the view down Via del Corso. For centuries the piazza was the first sight travellers had of Rome after entering through the northern city gate, making its design a kind of grand architectural welcome mat.",
      long: "At its centre stands an Egyptian obelisk brought to Rome under Augustus, flanked at the square's southern entrance by twin Baroque churches, Santa Maria dei Miracoli and Santa Maria in Montesanto, built to frame the view down Via del Corso. For centuries the piazza was the first sight travellers had of Rome after entering through the northern city gate, making its design a kind of grand architectural welcome mat. It's now one of the largest and most open public squares in the historic centre, ringed by cafés and used for concerts and public gatherings It shows how an 18th-century urban planner could take a functional city gateway and turn it into deliberate theatre."
    },
    tone: {
      young: "Here's something cool about Piazza del Popolo: it's now one of the largest and most open public squares in the historic centre, ringed by cafés and used for concerts and public gatherings.",
      adult: "People's Square has a story worth knowing before you walk up to it: given its current Neoclassical form by architect Giuseppe Valadier between 1811 and 1822.",
      scholar: "People's Square, an example of neoclassical: given its current Neoclassical form by architect Giuseppe Valadier between 1811 and 1822."
    },
    competence: {
      introductory: "In short, it shows how an 18th-century urban planner could take a functional city gateway and turn it into deliberate theatre — no art history degree required to appreciate that.",
      average: "Taken together, this is why it shows how an 18th-century urban planner could take a functional city gateway and turn it into deliberate theatre.",
      advanced: "Read against the wider arc of Roman architectural history, it shows how an 18th-century urban planner could take a functional city gateway and turn it into deliberate theatre, a point worth weighing against how the site is used and read today."
    }
  },
  {
    id: 9,
    name: "Chiesa del Gesù",
    coordinates: [41.8959, 12.4798],
    address: "Via degli Astalli, 16, 00186 Roma RM",
    openingHours: "Typically 7:00–19:30 daily; free entry",
    builtYear: 1584,
    builtYearLabel: "1584",
    builtEra: "renaissance",
    imageUrl: "img/locations/Jesus_Church.jpg",
    semanticMetadata: {
      locationContext: {
        officialNameIT: "Chiesa del Gesù",
        officialNameEN: "Church of the Gesù",
        featureType: "Jesuit Mother Church",
        architecturalStyle: "Counter-Reformation / Baroque",
        historicalSignificance: "Consecrated in 1584; its revolutionary facade designed by Giacomo della Porta served as the catalyst for Baroque church design worldwide."
      }
    },
    appearances: [
      {
        movieTitle: "Roman Holiday",
        director: "William Wyler",
        year: 1953,
        scene: "A brief stop during the couple's wandering tour of the city's churches and piazzas.",
        specificImageUrl: "img/Roman_Holiday/chiesa_del_gesu.JPG",
        cameraOrientation: "Passing wide shot as the Vespa crosses in front of the facade.",
        diegeticStatus: "Rome (Playing itself) — NEEDS VERIFICATION"
      }
    ],
    content: {
      brief: "The mother church of the Jesuits, and the model for Baroque church facades everywhere.",
      mid: "It was commissioned as the mother church of the newly founded Society of Jesus, funded by the wealthy Cardinal Alessandro Farnese after the Jesuits' own founder, Ignatius of Loyola, first envisioned it in 1551. Its facade is widely considered the first true Baroque church front in architectural history, and it became the direct model for Jesuit churches built across Europe and the Americas.",
      long: "It was commissioned as the mother church of the newly founded Society of Jesus, funded by the wealthy Cardinal Alessandro Farnese after the Jesuits' own founder, Ignatius of Loyola, first envisioned it in 1551. Its facade is widely considered the first true Baroque church front in architectural history, and it became the direct model for Jesuit churches built across Europe and the Americas. The ceiling fresco inside, Giovanni Battista Gaulli's Triumph of the Name of Jesus, completed in 1679, uses illusionistic painting to make painted figures appear to spill out of their frame into real space A single church here effectively set the visual language an entire religious order used to build churches on four continents."
    },
    tone: {
      young: "Here's something cool about Chiesa del Gesù: the ceiling fresco inside, Giovanni Battista Gaulli's Triumph of the Name of Jesus, completed in 1679, uses illusionistic painting to make painted figures appear to spill out of their frame into real space.",
      adult: "Church of the Gesù has a story worth knowing before you walk up to it: construction began in 1568 to a plan by Giacomo Barozzi da Vignola, with the facade completed by Giacomo della Porta and the church consecrated in 1584.",
      scholar: "Church of the Gesù, an example of counter-Reformation / Baroque: construction began in 1568 to a plan by Giacomo Barozzi da Vignola, with the facade completed by Giacomo della Porta and the church consecrated in 1584."
    },
    competence: {
      introductory: "In short, a single church here effectively set the visual language an entire religious order used to build churches on four continents — no art history degree required to appreciate that.",
      average: "Taken together, this is why a single church here effectively set the visual language an entire religious order used to build churches on four continents.",
      advanced: "Read against the wider arc of Roman architectural history, a single church here effectively set the visual language an entire religious order used to build churches on four continents, a point worth weighing against how the site is used and read today."
    }
  },
  {
    id: 10,
    name: "Colosseo",
    coordinates: [41.8902, 12.4922],
    address: "Piazza del Colosseo, 1, 00184 Roma RM",
    openingHours: "Opens 8:30 daily, closing time varies by season (16:30–19:15); closed 25 Dec, 1 Jan; ticketed",
    builtYear: 80,
    builtYearLabel: "AD 80",
    builtEra: "ancient",
    imageUrl: "img/locations/Colosseo.jpg",
    semanticMetadata: {
      locationContext: {
        officialNameIT: "Colosseo",
        officialNameEN: "Colosseum",
        featureType: "Imperial Roman Amphitheater",
        architecturalStyle: "Ancient Roman / Flavian Dynasty",
        historicalSignificance: "Completed in AD 80 under Emperor Titus; the largest ancient amphitheater ever constructed."
      }
    },
    appearances: [
      {
        movieTitle: "Roman Holiday",
        director: "William Wyler",
        year: 1953,
        scene: "The Vespa tour pauses beneath the ancient amphitheater as Ann takes in the sights of the city.",
        specificImageUrl: "img/Roman_Holiday/colosseo.JPG",
        cameraOrientation: "Low wide shot framing the Colosseum's arches behind the moving vehicle.",
        diegeticStatus: "Rome (Playing itself)"
      },
      {
        movieTitle: "To Rome with Love",
        director: "Woody Allen",
        year: 2012,
        scene: "A stop on one of the characters' wanderings through the city's most iconic sights.",
        specificImageUrl: "img/To_Rome_with_Love/colosseo.JPG",
        cameraOrientation: "Wide shot pairing the amphitheater's arches with the characters in the foreground.",
        diegeticStatus: "Rome (Playing itself) — NEEDS VERIFICATION"
      }
    ],
    content: {
      brief: "The largest amphitheatre ever built, opened by Emperor Titus in AD 80.",
      mid: "It could hold an estimated 50,000 to 80,000 spectators across four tiers, with a retractable awning system and an underground network of chambers and tunnels for staging animals and gladiators. Successive earthquakes, particularly in 847 and 1349, brought down large sections of the outer ring, and for centuries the ruins were quarried for building stone used across Rome.",
      long: "It could hold an estimated 50,000 to 80,000 spectators across four tiers, with a retractable awning system and an underground network of chambers and tunnels for staging animals and gladiators. Successive earthquakes, particularly in 847 and 1349, brought down large sections of the outer ring, and for centuries the ruins were quarried for building stone used across Rome. It remains the largest amphitheatre ever built and one of the most visited monuments on Earth No single building does more to define the popular image of ancient Rome."
    },
    tone: {
      young: "Here's something cool about Colosseo: it remains the largest amphitheatre ever built and one of the most visited monuments on Earth.",
      adult: "Colosseum has a story worth knowing before you walk up to it: construction began under Emperor Vespasian around AD 70–72 and the amphitheatre was inaugurated by his son Titus in AD 80 with 100 days of games.",
      scholar: "Colosseum, an example of ancient Roman / Flavian Dynasty: construction began under Emperor Vespasian around AD 70–72 and the amphitheatre was inaugurated by his son Titus in AD 80 with 100 days of games."
    },
    competence: {
      introductory: "In short, no single building does more to define the popular image of ancient Rome — no art history degree required to appreciate that.",
      average: "Taken together, this is why no single building does more to define the popular image of ancient Rome.",
      advanced: "Read against the wider arc of Roman architectural history, no single building does more to define the popular image of ancient Rome, a point worth weighing against how the site is used and read today."
    }
  },
  {
    id: 11,
    name: "Foro Romano",
    coordinates: [41.8925, 12.4853],
    address: "Via della Salara Vecchia, 5/6, 00186 Roma RM",
    openingHours: "Opens 9:00 daily, closing time varies by season (16:30–19:15); closed 25 Dec, 1 Jan; ticketed",
    builtYear: -509,
    builtYearLabel: "509 BC",
    builtEra: "ancient",
    imageUrl: "img/locations/Forum_Romain.jpg",
    semanticMetadata: {
      locationContext: {
        officialNameIT: "Foro Romano",
        officialNameEN: "Roman Forum",
        featureType: "Ancient Civic and Religious Center",
        architecturalStyle: "Classical Roman / Republican and Imperial Ruins",
        historicalSignificance: "The heart of ancient Rome's political power, housing temples, basilicas, and public speaker platforms."
      }
    },
    appearances: [
      {
        movieTitle: "Roman Holiday",
        director: "William Wyler",
        year: 1953,
        scene: "Ann and Joe wander among the ancient ruins early in their unplanned day out together.",
        specificImageUrl: "img/Roman_Holiday/forum_romano.JPG",
        cameraOrientation: "Wide tracking shot following the pair through the scattered columns and fallen stone.",
        diegeticStatus: "Rome (Playing itself)"
      },
      {
        movieTitle: "The Talented Mr. Ripley",
        director: "Anthony Minghella",
        year: 1999,
        scene: "A pursuit and confrontation play out among the scattered ruins of the ancient forum.",
        specificImageUrl: "img/The_Talented_Mr_Ripley/forum_romano.JPG",
        cameraOrientation: "Wide tracking shot weaving between the standing columns.",
        diegeticStatus: "Rome (Playing itself) — NEEDS VERIFICATION"
      }
    ],
    content: {
      brief: "The political and religious heart of ancient Rome for roughly a thousand years.",
      mid: "It served as the political, religious, judicial and commercial heart of ancient Rome, home to the Senate house (Curia Julia), the Temple of Saturn, the Temple of Vesta, and triumphal arches including the Arch of Titus. As the Empire declined the Forum was gradually abandoned, buried under centuries of silt and debris, and by the Middle Ages much of it had become pastureland known as the Campo Vaccino — the \"cow field\".",
      long: "It served as the political, religious, judicial and commercial heart of ancient Rome, home to the Senate house (Curia Julia), the Temple of Saturn, the Temple of Vesta, and triumphal arches including the Arch of Titus. As the Empire declined the Forum was gradually abandoned, buried under centuries of silt and debris, and by the Middle Ages much of it had become pastureland known as the Campo Vaccino — the \"cow field\". Systematic excavation only began in the 18th and 19th centuries, and archaeological work here continues today Walking through it means walking through the literal ground on which Roman political life — Senate debates, elections, triumphs, funerals — actually happened."
    },
    tone: {
      young: "Here's something cool about Foro Romano: systematic excavation only began in the 18th and 19th centuries, and archaeological work here continues today.",
      adult: "Roman Forum has a story worth knowing before you walk up to it: developed over roughly a thousand years, from the Roman Republic's earliest civic buildings through the height of the Empire.",
      scholar: "Roman Forum, an example of classical Roman / Republican and Imperial Ruins: developed over roughly a thousand years, from the Roman Republic's earliest civic buildings through the height of the Empire."
    },
    competence: {
      introductory: "In short, walking through it means walking through the literal ground on which Roman political life — Senate debates, elections, triumphs, funerals — actually happened — no art history degree required to appreciate that.",
      average: "Taken together, this is why walking through it means walking through the literal ground on which Roman political life — Senate debates, elections, triumphs, funerals — actually happened.",
      advanced: "Read against the wider arc of Roman architectural history, walking through it means walking through the literal ground on which Roman political life — Senate debates, elections, triumphs, funerals — actually happened, a point worth weighing against how the site is used and read today."
    }
  },
  {
    id: 12,
    name: "Palazzo Barberini",
    coordinates: [41.9042, 12.4903],
    address: "Via delle Quattro Fontane, 13, 00184 Roma RM",
    openingHours: "Typically 10:00–18:00, closed Mondays; ticketed (Galleria Nazionale d'Arte Antica)",
    builtYear: 1633,
    builtYearLabel: "1633",
    builtEra: "baroque",
    imageUrl: "img/locations/Palazzo_Barberini.jpg",
    semanticMetadata: {
      locationContext: {
        officialNameIT: "Palazzo Barberini",
        officialNameEN: "Barberini Palace",
        featureType: "High Baroque Palace",
        architecturalStyle: "High Baroque",
        historicalSignificance: "Created by Maderno, Borromini, and Bernini; features Pietro da Cortona's breathtaking illusionistic ceiling fresco."
      }
    },
    appearances: [
      {
        movieTitle: "Roman Holiday",
        director: "William Wyler",
        year: 1953,
        scene: "The Palazzo's grounds double for the fictional foreign embassy where Princess Ann is officially staying.",
        specificImageUrl: "img/Roman_Holiday/palazzo_barberini.JPG",
        cameraOrientation: "Static establishing shot of the facade and gated courtyard.",
        diegeticStatus: "A fictional foreign embassy in Rome"
      }
    ],
    content: {
      brief: "A Baroque palace shaped by three of the era's greatest architects at once.",
      mid: "It was built for the family of Pope Urban VIII, and its grand salon ceiling was frescoed by Pietro da Cortona with the Triumph of Divine Providence, one of the most ambitious illusionistic ceilings of the Baroque era. Having three of the era's greatest architects contribute to one building is almost unheard of, and traces of each — Maderno's plan, Borromini's oval staircase, Bernini's square one — are still visible.",
      long: "It was built for the family of Pope Urban VIII, and its grand salon ceiling was frescoed by Pietro da Cortona with the Triumph of Divine Providence, one of the most ambitious illusionistic ceilings of the Baroque era. Having three of the era's greatest architects contribute to one building is almost unheard of, and traces of each — Maderno's plan, Borromini's oval staircase, Bernini's square one — are still visible. The palace now houses the Galleria Nazionale d'Arte Antica, with works by Raphael, Caravaggio and Holbein It's effectively a built argument for how differently three geniuses could interpret the same commission."
    },
    tone: {
      young: "Here's something cool about Palazzo Barberini: the palace now houses the Galleria Nazionale d'Arte Antica, with works by Raphael, Caravaggio and Holbein.",
      adult: "Barberini Palace has a story worth knowing before you walk up to it: begun around 1625 by Carlo Maderno, continued after his death by Francesco Borromini, and completed under Gian Lorenzo Bernini.",
      scholar: "Barberini Palace, an example of high Baroque: begun around 1625 by Carlo Maderno, continued after his death by Francesco Borromini, and completed under Gian Lorenzo Bernini."
    },
    competence: {
      introductory: "In short, it's effectively a built argument for how differently three geniuses could interpret the same commission — no art history degree required to appreciate that.",
      average: "Taken together, this is why it's effectively a built argument for how differently three geniuses could interpret the same commission.",
      advanced: "Read against the wider arc of Roman architectural history, it's effectively a built argument for how differently three geniuses could interpret the same commission, a point worth weighing against how the site is used and read today."
    }
  },
  {
    id: 13,
    name: "Pantheon",
    coordinates: [41.8986, 12.4768],
    address: "Piazza della Rotonda, 00186 Roma RM",
    openingHours: "Typically 9:00–19:00 daily; ticketed since 2023",
    builtYear: 126,
    builtYearLabel: "AD 126",
    builtEra: "ancient",
    imageUrl: "img/locations/Pantheon.jpg",
    semanticMetadata: {
      locationContext: {
        officialNameIT: "Pantheon",
        officialNameEN: "Pantheon",
        featureType: "Ancient Roman Temple / Basilica",
        architecturalStyle: "Imperial Roman / Hadrianic Innovation",
        historicalSignificance: "Rebuilt by Emperor Hadrian around AD 126; features the world's largest unreinforced concrete dome."
      }
    },
    appearances: [
      {
        movieTitle: "Roman Holiday",
        director: "William Wyler",
        year: 1953,
        scene: "The couple pauses in the piazza to admire the ancient temple during their day of wandering.",
        specificImageUrl: "img/Roman_Holiday/pantheon.JPG",
        cameraOrientation: "Wide shot of the portico and piazza, actors small in frame against the columns.",
        diegeticStatus: "Rome (Playing itself)"
      }
    ],
    content: {
      brief: "The best-preserved building to survive from ancient Rome, dome and all.",
      mid: "Its dome remains the largest unreinforced concrete dome in the world, with a 9-metre oculus at its apex as the only source of light. In AD 609 the building was converted into a Christian church, Santa Maria ad Martyres, a change of use that is the main reason it survived intact while most other ancient Roman buildings were stripped for stone.",
      long: "Its dome remains the largest unreinforced concrete dome in the world, with a 9-metre oculus at its apex as the only source of light. In AD 609 the building was converted into a Christian church, Santa Maria ad Martyres, a change of use that is the main reason it survived intact while most other ancient Roman buildings were stripped for stone. The Renaissance painter Raphael is buried inside, alongside two Italian kings It is the best-preserved building to survive from ancient Rome, and its dome directly influenced architects from Brunelleschi to Michelangelo to the designers of the U.S. Capitol."
    },
    tone: {
      young: "Here's something cool about Pantheon: the Renaissance painter Raphael is buried inside, alongside two Italian kings.",
      adult: "Pantheon has a story worth knowing before you walk up to it: the original was built by Marcus Agrippa in 27 BC; after a fire, Emperor Hadrian had it entirely rebuilt around AD 113–125.",
      scholar: "Pantheon, an example of imperial Roman / Hadrianic Innovation: the original was built by Marcus Agrippa in 27 BC; after a fire, Emperor Hadrian had it entirely rebuilt around AD 113–125."
    },
    competence: {
      introductory: "In short, it is the best-preserved building to survive from ancient Rome, and its dome directly influenced architects from Brunelleschi to Michelangelo to the designers of the U.S. Capitol — no art history degree required to appreciate that.",
      average: "Taken together, this is why it is the best-preserved building to survive from ancient Rome, and its dome directly influenced architects from Brunelleschi to Michelangelo to the designers of the U.S. Capitol.",
      advanced: "Read against the wider arc of Roman architectural history, it is the best-preserved building to survive from ancient Rome, and its dome directly influenced architects from Brunelleschi to Michelangelo to the designers of the U.S. Capitol, a point worth weighing against how the site is used and read today."
    }
  },
  {
    id: 14,
    name: "Piazza di Spagna",
    coordinates: [41.9059, 12.4823],
    address: "Piazza di Spagna, 00187 Roma RM",
    openingHours: "Open 24 hours — public square and staircase, free access",
    builtYear: 1725,
    builtYearLabel: "1725",
    builtEra: "baroque",
    imageUrl: "img/locations/Spanish_Steps%29.jpg",
    semanticMetadata: {
      locationContext: {
        officialNameIT: "Piazza di Spagna",
        officialNameEN: "Spanish Steps (Square)",
        featureType: "Monumental Baroque Staircase and Square",
        architecturalStyle: "Late Baroque",
        historicalSignificance: "The Spanish Steps were constructed between 1723 and 1725 by Francesco de Sanctis, connecting the square to Trinità dei Monti."
      }
    },
    appearances: [
      {
        movieTitle: "Roman Holiday",
        director: "William Wyler",
        year: 1953,
        scene: "Ann eats gelato on the steps, one of the most recognizable images from the film.",
        specificImageUrl: "img/Roman_Holiday/piazza_di_spagna.JPG",
        cameraOrientation: "Medium shot seated on the steps, capturing the sweep of the staircase behind her.",
        diegeticStatus: "Rome (Playing itself)"
      },
      {
        movieTitle: "The Talented Mr. Ripley",
        director: "Anthony Minghella",
        year: 1999,
        scene: "Marge and Peter cross paths on the steps while investigating Dickie's disappearance.",
        specificImageUrl: "img/The_Talented_Mr_Ripley/piazza_di_spagna.JPG",
        cameraOrientation: "Medium tracking shot descending the staircase alongside the characters.",
        diegeticStatus: "Rome (Playing itself) — NEEDS VERIFICATION"
      },
      {
        movieTitle: "To Rome with Love",
        director: "Woody Allen",
        year: 2012,
        scene: "Characters pause on the steps as one of the anthology's storylines unfolds.",
        specificImageUrl: "img/To_Rome_with_Love/piazza_di_spagna.JPG",
        cameraOrientation: "Medium shot on the steps, the staircase sweeping upward behind them.",
        diegeticStatus: "Rome (Playing itself) — NEEDS VERIFICATION"
      }
    ],
    content: {
      brief: "A 135-step Baroque staircase linking two of Rome's most photographed piazzas.",
      mid: "It was funded by a bequest from the French diplomat Étienne Gueffier, and links the piazza below to the French church of Trinità dei Monti above. The square below takes its name from the Spanish Embassy to the Holy See, which has stood here since the 17th century, even though the steps themselves were paid for with French money.",
      long: "It was funded by a bequest from the French diplomat Étienne Gueffier, and links the piazza below to the French church of Trinità dei Monti above. The square below takes its name from the Spanish Embassy to the Holy See, which has stood here since the 17th century, even though the steps themselves were paid for with French money. The poet John Keats died in a small room overlooking the steps in 1821, now preserved as the Keats-Shelley House museum It remains one of the largest and widest outdoor staircases in Europe, and one of Rome's most photographed gathering spots."
    },
    tone: {
      young: "Here's something cool about Piazza di Spagna: the poet John Keats died in a small room overlooking the steps in 1821, now preserved as the Keats-Shelley House museum.",
      adult: "Spanish Steps (Square) has a story worth knowing before you walk up to it: the 135-step staircase was designed by Francesco de Sanctis and built between 1723 and 1725.",
      scholar: "Spanish Steps (Square), an example of late Baroque: the 135-step staircase was designed by Francesco de Sanctis and built between 1723 and 1725."
    },
    competence: {
      introductory: "In short, it remains one of the largest and widest outdoor staircases in Europe, and one of Rome's most photographed gathering spots — no art history degree required to appreciate that.",
      average: "Taken together, this is why it remains one of the largest and widest outdoor staircases in Europe, and one of Rome's most photographed gathering spots.",
      advanced: "Read against the wider arc of Roman architectural history, it remains one of the largest and widest outdoor staircases in Europe, and one of Rome's most photographed gathering spots, a point worth weighing against how the site is used and read today."
    }
  },
  {
    id: 15,
    name: "Ponte Sant'Angelo",
    coordinates: [41.9031, 12.4663],
    address: "Ponte Sant'Angelo, 00186 Roma RM",
    openingHours: "Open 24 hours — pedestrian bridge, free access",
    builtYear: 134,
    builtYearLabel: "AD 134",
    builtEra: "ancient",
    imageUrl: "img/locations/Ponte_s._Angelo.jpg",
    semanticMetadata: {
      locationContext: {
        officialNameIT: "Ponte Sant'Angelo",
        officialNameEN: "Bridge of Holy Angel",
        featureType: "Ancient Roman Bridge with Baroque Sculptures",
        architecturalStyle: "Ancient Roman foundation with Baroque additions",
        historicalSignificance: "Completed in AD 134 by Emperor Hadrian; adorned with ten monumental angel statues by Gian Lorenzo Bernini in 1669."
      }
    },
    appearances: [
      {
        movieTitle: "Roman Holiday",
        director: "William Wyler",
        year: 1953,
        scene: "The Vespa tour crosses the bridge as part of the couple's spontaneous ride through the city.",
        specificImageUrl: "img/Roman_Holiday/ponte_sant'angelo.JPG",
        cameraOrientation: "Tracking shot alongside the moving Vespa, the bridge's statues passing in the background.",
        diegeticStatus: "Rome (Playing itself)"
      },
      {
        movieTitle: "The Talented Mr. Ripley",
        director: "Anthony Minghella",
        year: 1999,
        scene: "A tense rendezvous on the bridge, its statues lit against the evening sky, as the net closes around Tom.",
        specificImageUrl: "img/The_Talented_Mr_Ripley/ponte_sant'angelo.JPG",
        cameraOrientation: "Medium tracking shot alongside the balustrade, the Castel Sant'Angelo visible in the background.",
        diegeticStatus: "Rome (Playing itself) — NEEDS VERIFICATION"
      },
      {
        movieTitle: "C'e ancora domani",
        director: "Paola Cortellesi",
        year: 2023,
        scene: "Delia crosses the bridge on one of her daily walks through a wounded, black-and-white post-war Rome.",
        specificImageUrl: "img/C'e'_Ancora_Domani/ponte_sant'angelo.JPG",
        cameraOrientation: "Black-and-white wide shot following the character on foot across the bridge.",
        diegeticStatus: "Rome, 1946 (Playing itself) — NEEDS VERIFICATION"
      }
    ],
    content: {
      brief: "A Roman bridge from AD 134, later lined with ten Bernini angels.",
      mid: "In 1669, Pope Clement IX had Gian Lorenzo Bernini's workshop add ten monumental angel statues along its parapets, each carrying a different instrument of Christ's Passion. The mausoleum it leads to was later fortified into the Castel Sant'Angelo, and the bridge became the traditional route for pilgrims approaching St. Peter's.",
      long: "In 1669, Pope Clement IX had Gian Lorenzo Bernini's workshop add ten monumental angel statues along its parapets, each carrying a different instrument of Christ's Passion. The mausoleum it leads to was later fortified into the Castel Sant'Angelo, and the bridge became the traditional route for pilgrims approaching St. Peter's. It has been closed to vehicle traffic for decades and is now a pedestrian bridge with sweeping views of the castle and the river Few bridges anywhere carry 1,900 years of continuous use, let alone a matching set of Bernini angels."
    },
    tone: {
      young: "Here's something cool about Ponte Sant'Angelo: it has been closed to vehicle traffic for decades and is now a pedestrian bridge with sweeping views of the castle and the river.",
      adult: "Bridge of Holy Angel has a story worth knowing before you walk up to it: built in AD 134 by Emperor Hadrian as the Pons Aelius, to link his new mausoleum to the city.",
      scholar: "Bridge of Holy Angel, an example of ancient Roman foundation with Baroque additions: built in AD 134 by Emperor Hadrian as the Pons Aelius, to link his new mausoleum to the city."
    },
    competence: {
      introductory: "In short, few bridges anywhere carry 1,900 years of continuous use, let alone a matching set of Bernini angels — no art history degree required to appreciate that.",
      average: "Taken together, this is why few bridges anywhere carry 1,900 years of continuous use, let alone a matching set of Bernini angels.",
      advanced: "Read against the wider arc of Roman architectural history, few bridges anywhere carry 1,900 years of continuous use, let alone a matching set of Bernini angels, a point worth weighing against how the site is used and read today."
    }
  },
  {
    id: 16,
    name: "Piazza Venezia",
    coordinates: [41.8958, 12.4825],
    address: "Piazza Venezia, 00186 Roma RM",
    openingHours: "Open 24 hours — public square, free access",
    builtYear: 1911,
    builtYearLabel: "1911",
    builtEra: "contemporary",
    imageUrl: "img/locations/Pizza_Venezia.jpg",
    semanticMetadata: {
      locationContext: {
        officialNameIT: "Piazza Venezia",
        officialNameEN: "Venice Square",
        featureType: "Central Urban Traffic Hub and Plaza",
        architecturalStyle: "Renaissance / Eclectic Neoclassical",
        historicalSignificance: "Dominated by the massive Vittorio Emanuele II Monument (Altare della Patria), finished in 1911."
      }
    },
    appearances: [
      {
        movieTitle: "Roman Holiday",
        director: "William Wyler",
        year: 1953,
        scene: "The chaotic Vespa chase sequence, with press and police in pursuit, passes through this junction.",
        specificImageUrl: "img/Roman_Holiday/piazza_venezia.JPG",
        cameraOrientation: "Fast tracking shot at street level, following the Vespa through traffic.",
        diegeticStatus: "Rome (Playing itself)"
      },
      {
        movieTitle: "To Rome with Love",
        director: "Woody Allen",
        year: 2012,
        scene: "A comic set-piece plays out in the bustling square at the heart of the city.",
        specificImageUrl: "img/To_Rome_with_Love/piazza_venezia.JPG",
        cameraOrientation: "Wide shot capturing the monument and surrounding traffic circle.",
        diegeticStatus: "Rome (Playing itself) — NEEDS VERIFICATION"
      }
    ],
    content: {
      brief: "A busy traffic hub anchored by one of Rome's first Renaissance palaces.",
      mid: "The square's current open, roughly circular shape is largely the result of a major urban clearance carried out from the 1880s through 1911, to make room for the Monument to Victor Emmanuel II — the Vittoriano — completed in 1911 and finished with further elements through the 1930s. Palazzo Venezia briefly served as the Venetian embassy to the Papal States, giving both the palace and the square their name.",
      long: "The square's current open, roughly circular shape is largely the result of a major urban clearance carried out from the 1880s through 1911, to make room for the Monument to Victor Emmanuel II — the Vittoriano — completed in 1911 and finished with further elements through the 1930s. Palazzo Venezia briefly served as the Venetian embassy to the Papal States, giving both the palace and the square their name. The square now functions as one of central Rome's busiest traffic junctions, radiating out toward the Colosseum, the Capitoline Hill and Via del Corso It shows two very different eras of Roman urban ambition — a quiet 15th-century cardinal's palace and a triumphant 19th-century national monument — sharing the same small square."
    },
    tone: {
      young: "Here's something cool about Piazza Venezia: the square now functions as one of central Rome's busiest traffic junctions, radiating out toward the Colosseum, the Capitoline Hill and Via del Corso.",
      adult: "Venice Square has a story worth knowing before you walk up to it: anchored by the Palazzo Venezia, built between 1455 and 1467 as one of the first true Renaissance palaces in Rome.",
      scholar: "Venice Square, an example of renaissance / Eclectic Neoclassical: anchored by the Palazzo Venezia, built between 1455 and 1467 as one of the first true Renaissance palaces in Rome."
    },
    competence: {
      introductory: "In short, it shows two very different eras of Roman urban ambition — a quiet 15th-century cardinal's palace and a triumphant 19th-century national monument — sharing the same small square — no art history degree required to appreciate that.",
      average: "Taken together, this is why it shows two very different eras of Roman urban ambition — a quiet 15th-century cardinal's palace and a triumphant 19th-century national monument — sharing the same small square.",
      advanced: "Read against the wider arc of Roman architectural history, it shows two very different eras of Roman urban ambition — a quiet 15th-century cardinal's palace and a triumphant 19th-century national monument — sharing the same small square, a point worth weighing against how the site is used and read today."
    }
  },
  {
    id: 17,
    name: "Piazza Navona",
    coordinates: [41.8992, 12.4731],
    address: "Piazza Navona, 00186 Roma RM",
    openingHours: "Open 24 hours — public square, free access",
    builtYear: 86,
    builtYearLabel: "AD 86",
    builtEra: "ancient",
    imageUrl: "img/locations/Piazza_Navona.jpg",
    semanticMetadata: {
      locationContext: {
        officialNameIT: "Piazza Navona",
        officialNameEN: "Navona Square",
        featureType: "Baroque Public Square",
        architecturalStyle: "High Baroque",
        historicalSignificance: "Built directly over the footprint of the ancient Stadium of Domitian (AD 86); features Bernini's Fountain of the Four Rivers."
      }
    },
    appearances: [
      {
        movieTitle: "The Talented Mr. Ripley",
        director: "Anthony Minghella",
        year: 1999,
        scene: "Marge confronts Tom in the piazza, the Baroque fountains framing their fraught exchange.",
        specificImageUrl: "img/The_Talented_Mr_Ripley/piazza_navona.JPG",
        cameraOrientation: "Medium two-shot with the Fountain of the Four Rivers visible over the actors' shoulders.",
        diegeticStatus: "Rome (Playing itself) — NEEDS VERIFICATION"
      },
      {
        movieTitle: "To Rome with Love",
        director: "Woody Allen",
        year: 2012,
        scene: "Characters gather in the piazza, the Baroque fountains providing a lively backdrop to the scene.",
        specificImageUrl: "img/To_Rome_with_Love/piazza_navona.JPG",
        cameraOrientation: "Wide shot of the piazza with the fountain in frame.",
        diegeticStatus: "Rome (Playing itself) — NEEDS VERIFICATION"
      }
    ],
    content: {
      brief: "A Baroque square that still traces the oval of an ancient Roman stadium.",
      mid: "Its present Baroque appearance dates mainly from the 17th century, crowned by Gian Lorenzo Bernini's Fountain of the Four Rivers, commissioned by Pope Innocent X in 1651. The ancient stadium once hosted athletic contests for an audience of some 30,000 people; its arena floor now lies several metres below the modern piazza.",
      long: "Its present Baroque appearance dates mainly from the 17th century, crowned by Gian Lorenzo Bernini's Fountain of the Four Rivers, commissioned by Pope Innocent X in 1651. The ancient stadium once hosted athletic contests for an audience of some 30,000 people; its arena floor now lies several metres below the modern piazza. The square today draws street artists, café crowds and, in December, one of Rome's largest Christmas markets It's a rare case of an ancient Roman building's exact shape surviving intact into the present, simply by being built over rather than demolished."
    },
    tone: {
      young: "Here's something cool about Piazza Navona: the square today draws street artists, café crowds and, in December, one of Rome's largest Christmas markets.",
      adult: "Navona Square has a story worth knowing before you walk up to it: laid out over the ruins of the Stadium of Domitian, built in AD 86, whose elongated oval footprint it still preserves.",
      scholar: "Navona Square, an example of high Baroque: laid out over the ruins of the Stadium of Domitian, built in AD 86, whose elongated oval footprint it still preserves."
    },
    competence: {
      introductory: "In short, it's a rare case of an ancient Roman building's exact shape surviving intact into the present, simply by being built over rather than demolished — no art history degree required to appreciate that.",
      average: "Taken together, this is why it's a rare case of an ancient Roman building's exact shape surviving intact into the present, simply by being built over rather than demolished.",
      advanced: "Read against the wider arc of Roman architectural history, it's a rare case of an ancient Roman building's exact shape surviving intact into the present, simply by being built over rather than demolished, a point worth weighing against how the site is used and read today."
    }
  },
  {
    id: 18,
    name: "Auditorium Parco della Musica",
    coordinates: [41.9292, 12.4708],
    address: "Viale Pietro de Coubertin, 30, 00196 Roma RM",
    openingHours: "Grounds generally open daily; concert hall access depends on event schedule",
    builtYear: 2002,
    builtYearLabel: "2002",
    builtEra: "contemporary",
    imageUrl: "img/locations/Parco_della_Musica_di_Roma.jpg",
    semanticMetadata: {
      locationContext: {
        officialNameIT: "Auditorium Parco della Musica",
        officialNameEN: "Music Park Auditorium",
        featureType: "Contemporary Music Complex",
        architecturalStyle: "Contemporary / High-Tech Modernism",
        historicalSignificance: "Designed by renowned architect Renzo Piano and finished in 2002; features three giant, beetle-shaped structures."
      }
    },
    appearances: [
      {
        movieTitle: "To Rome with Love",
        director: "Woody Allen",
        year: 2012,
        scene: "A modern counterpoint to the rest of the film's historic settings, used for one of the anthology's storylines.",
        specificImageUrl: "img/To_Rome_with_Love/auditorium_parco_della_musica.JPG",
        cameraOrientation: "Wide shot emphasizing the auditorium's curved lead-clad shells.",
        diegeticStatus: "Rome (Playing itself) — NEEDS VERIFICATION"
      }
    ],
    content: {
      brief: "Renzo Piano's music complex, home to Rome's National Academy of Santa Cecilia.",
      mid: "The complex consists of three separate concert halls — Sala Santa Cecilia, Sala Sinopoli and Sala Petrassi, seating roughly 2,800, 1,200 and 700 people respectively — clad in lead and joined at the base by a shared lobby, plus an open-air amphitheatre. Construction crews uncovered the remains of an ancient Roman villa on the site, which archaeologists excavated and partly incorporated into the finished complex.",
      long: "The complex consists of three separate concert halls — Sala Santa Cecilia, Sala Sinopoli and Sala Petrassi, seating roughly 2,800, 1,200 and 700 people respectively — clad in lead and joined at the base by a shared lobby, plus an open-air amphitheatre. Construction crews uncovered the remains of an ancient Roman villa on the site, which archaeologists excavated and partly incorporated into the finished complex. It is home to Italy's National Academy of Santa Cecilia and now carries the name of composer Ennio Morricone in its title It's widely considered the most significant piece of urban renewal Rome had seen since the 1960s, and one of the largest cultural complexes in Europe."
    },
    tone: {
      young: "Here's something cool about Auditorium Parco della Musica: it is home to Italy's National Academy of Santa Cecilia and now carries the name of composer Ennio Morricone in its title.",
      adult: "Music Park Auditorium has a story worth knowing before you walk up to it: won by architect Renzo Piano in an international competition in 1994, with construction running from 1995 to its opening in 2002.",
      scholar: "Music Park Auditorium, an example of contemporary / High-Tech Modernism: won by architect Renzo Piano in an international competition in 1994, with construction running from 1995 to its opening in 2002."
    },
    competence: {
      introductory: "In short, it's widely considered the most significant piece of urban renewal Rome had seen since the 1960s, and one of the largest cultural complexes in Europe — no art history degree required to appreciate that.",
      average: "Taken together, this is why it's widely considered the most significant piece of urban renewal Rome had seen since the 1960s, and one of the largest cultural complexes in Europe.",
      advanced: "Read against the wider arc of Roman architectural history, it's widely considered the most significant piece of urban renewal Rome had seen since the 1960s, and one of the largest cultural complexes in Europe, a point worth weighing against how the site is used and read today."
    }
  },
  {
    id: 19,
    name: "Villa Borghese",
    coordinates: [41.9142, 12.4853],
    address: "Piazzale Napoleone I, 00197 Roma RM (Villa Borghese gardens)",
    openingHours: "Gardens open dawn–dusk, free; Galleria Borghese museum by timed reservation, closed Mondays",
    builtYear: 1605,
    builtYearLabel: "1605",
    builtEra: "baroque",
    imageUrl: "img/locations/Villa_Borghese.jpg",
    semanticMetadata: {
      locationContext: {
        officialNameIT: "Villa Borghese",
        officialNameEN: "Borghese Gardens",
        featureType: "Renaissance Landscape Garden and Park",
        architecturalStyle: "17th Century Landscape Design / English Garden Adaptations",
        historicalSignificance: "Developed for Cardinal Scipione Borghese in the early 1600s; opened to the public in 1903."
      }
    },
    appearances: [
      {
        movieTitle: "To Rome with Love",
        director: "Woody Allen",
        year: 2012,
        scene: "A quiet walk through the park's gardens, a pause from the bustle of the city center.",
        specificImageUrl: "img/To_Rome_with_Love/villa_borghese.JPG",
        cameraOrientation: "Wide shot along a tree-lined path.",
        diegeticStatus: "Rome (Playing itself) — NEEDS VERIFICATION"
      }
    ],
    content: {
      brief: "Rome's green heart, laid out as a cardinal's private garden in 1605.",
      mid: "The grounds were designed to display Scipione's growing art collection alongside sweeping gardens, fountains and follies in the fashionable style of a Roman villa suburbana. The estate remained private property of the Borghese family for nearly three centuries.",
      long: "The grounds were designed to display Scipione's growing art collection alongside sweeping gardens, fountains and follies in the fashionable style of a Roman villa suburbana. The estate remained private property of the Borghese family for nearly three centuries. The Italian state acquired it in 1901 and opened the park to the public in 1903; the Galleria Borghese, housing Bernini sculptures and Caravaggio paintings, still stands at its centre It's the green heart of central Rome, and its art collection is often ranked among the finest small museums in the world."
    },
    tone: {
      young: "Here's something cool about Villa Borghese: the Italian state acquired it in 1901 and opened the park to the public in 1903; the Galleria Borghese, housing Bernini sculptures and Caravaggio paintings, still stands at its centre.",
      adult: "Borghese Gardens has a story worth knowing before you walk up to it: laid out from 1605 for Cardinal Scipione Borghese, nephew of Pope Paul V, first by architect Flaminio Ponzio and then Giovanni Vasanzio.",
      scholar: "Borghese Gardens, an example of 17th Century Landscape Design / English Garden Adaptations: laid out from 1605 for Cardinal Scipione Borghese, nephew of Pope Paul V, first by architect Flaminio Ponzio and then Giovanni Vasanzio."
    },
    competence: {
      introductory: "In short, it's the green heart of central Rome, and its art collection is often ranked among the finest small museums in the world — no art history degree required to appreciate that.",
      average: "Taken together, this is why it's the green heart of central Rome, and its art collection is often ranked among the finest small museums in the world.",
      advanced: "Read against the wider arc of Roman architectural history, it's the green heart of central Rome, and its art collection is often ranked among the finest small museums in the world, a point worth weighing against how the site is used and read today."
    }
  },
  {
    id: 20,
    name: "Tempietto di Bramante",
    coordinates: [41.8881, 12.4654],
    address: "Piazza di San Pietro in Montorio, 2, 00153 Roma RM",
    openingHours: "Typically 9:30–12:30 and 14:00–16:00, closed Wednesdays; free entry",
    builtYear: 1502,
    builtYearLabel: "1502",
    builtEra: "renaissance",
    imageUrl: "img/locations/Tempietto_di_San_Pietro.jpg",
    semanticMetadata: {
      locationContext: {
        officialNameIT: "Tempietto di San Pietro in Montorio",
        officialNameEN: "Bramante's Tempietto",
        featureType: "Commemorative Circular Martyrdom Chapel",
        architecturalStyle: "High Renaissance",
        historicalSignificance: "Constructed by Donato Bramante around 1502 in the courtyard of San Pietro in Montorio; a masterwork of classical harmony."
      }
    },
    appearances: [
      {
        movieTitle: "La Grande Bellezza",
        director: "Paolo Sorrentino",
        year: 2013,
        scene: "A grieving mother searches frantically for her daughter inside the hidden, perfectly circular stone courtyard.",
        specificImageUrl: "img/La_Grande_Bellezza/tempietto_di_bramante.JPG",
        cameraOrientation: "Perfectly centered static wide shot, framing the circular columned temple dead-center to create absolute symmetry.",
        diegeticStatus: "Sacred Roman Sanctuary"
      }
    ],
    content: {
      brief: "A tiny circular temple that art historians call architecturally perfect.",
      mid: "It stands in the courtyard of San Pietro in Montorio on the Janiculan Hill, on the spot traditionally believed to mark St. Peter's crucifixion, ringed by sixteen granite columns — sixteen being, per the ancient architectural writer Vitruvius, an especially harmonious number. Though barely four metres across, it is generally credited as the building that introduced High Renaissance architecture to Rome.",
      long: "It stands in the courtyard of San Pietro in Montorio on the Janiculan Hill, on the spot traditionally believed to mark St. Peter's crucifixion, ringed by sixteen granite columns — sixteen being, per the ancient architectural writer Vitruvius, an especially harmonious number. Though barely four metres across, it is generally credited as the building that introduced High Renaissance architecture to Rome. Its design directly influenced Bramante's own later plans for the dome of St. Peter's Basilica, carried forward after his death by Michelangelo Art historians routinely call it one of the most perfectly proportioned small buildings ever constructed."
    },
    tone: {
      young: "Here's something cool about Tempietto di Bramante: its design directly influenced Bramante's own later plans for the dome of St. Peter's Basilica, carried forward after his death by Michelangelo.",
      adult: "Bramante's Tempietto has a story worth knowing before you walk up to it: built around 1502, commissioned by King Ferdinand and Queen Isabella of Spain and designed by Donato Bramante.",
      scholar: "Bramante's Tempietto, an example of high Renaissance: built around 1502, commissioned by King Ferdinand and Queen Isabella of Spain and designed by Donato Bramante."
    },
    competence: {
      introductory: "In short, art historians routinely call it one of the most perfectly proportioned small buildings ever constructed — no art history degree required to appreciate that.",
      average: "Taken together, this is why art historians routinely call it one of the most perfectly proportioned small buildings ever constructed.",
      advanced: "Read against the wider arc of Roman architectural history, art historians routinely call it one of the most perfectly proportioned small buildings ever constructed, a point worth weighing against how the site is used and read today."
    }
  }
];
/* ============================================================
   Narratives
   The brief requires 2–3 narratives that determine the order
   (and grouping into chapters) of the visit; a historical
   timeline narrative is mandatory. Regrouped 2026-08-26 to match
   the real film set found in the img/ folder.
   ============================================================ */
/* ============================================================
   Narratives
   ============================================================ */
const narratives = [
  {
    id: "timeline",
    label: "Historical Timeline",
    description: "Locations ordered chronologically by their historical construction.",
    chapters: [
      {
        title: "Antiquity to Middle Ages",
        intro: "The ancient foundations of Rome, from the Roman Forum to the Early Christian basilicas.",
        locationIds: [11, 4, 10, 17, 13, 15, 1, 5]
      },
      {
        title: "Renaissance & Mannerism",
        intro: "The architectural rebirth of the city during the 15th and 16th centuries.",
        locationIds: [20, 3, 6, 9]
      },
      {
        title: "Baroque to Contemporary",
        intro: "From the grand spectacles of the Baroque era to rationalist and contemporary additions.",
        locationIds: [19, 12, 14, 2, 8, 16, 7, 18]
      }
    ]
  },
  {
    id: "city-tour",
    label: "City Tour",
    description: "Rome's most famous and iconic attractions laid out in a logical walking sequence.",
    chapters: [
      {
        title: "Iconic Rome",
        intro: "A journey through the quintessential postcards of the Eternal City.",
        locationIds: [10, 11, 16, 2, 13, 17, 15]
      }
    ]
  },
  {
    id: "art-tour",
    label: "Art Tour",
    description: "A curated route designed for art lovers, focusing on museums and architectural masterpieces.",
    chapters: [
      {
        title: "Masterpieces & Museums",
        intro: "Exploring Rome's incredible collections and architectural triumphs.",
        locationIds: [19, 6, 14, 12, 3, 20]
      }
    ]
  },
  {
    id: "cinema-tour",
    label: "Cinema Tour",
    description: "A specialized route featuring locations that have repeatedly served as cinematic backdrops.",
    chapters: [
      {
        title: "The Frequent Sets",
        intro: "These iconic spaces have hosted two or more major film productions, becoming indelible parts of cinematic history.",
        locationIds: [4, 1, 10, 11, 16, 8, 14, 2, 17, 15, 3]
      }
    ]
  }
];
