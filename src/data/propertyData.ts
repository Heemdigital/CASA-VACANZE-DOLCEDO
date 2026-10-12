import { PropertyImage, RoomDetail, Amenity, VillageService } from '../types';

export const OWNER_CONTACT = {
  name: 'Mario',
  phone: '+39 392 110 8243',
  phoneClean: '+393921108243',
  whatsappUrl: 'https://wa.me/393921108243',
  location: 'Dolcedo, Provincia di Imperia, Liguria, Italia',
  postalCode: '18020',
  coordinates: '43°54\'18"N 7°57\'08"E',
};

export const PROPERTY_IMAGES: PropertyImage[] = [
  {
    id: 'dolcedo-stone-bridge',
    src: '/images/casa-vacanze-dolcedo/dolcedo-stone-bridge.jpg',
    alt: {
      it: 'Ponte storico dei Cavalieri di Malta e case tradizionali a Dolcedo',
      en: 'Historic Knights of Malta stone bridge and traditional houses in Dolcedo',
    },
    caption: {
      it: 'Il celebre Ponte Grande e il borgo antico di Dolcedo sul torrente Prino',
      en: 'The celebrated Ponte Grande and ancient village of Dolcedo over the Prino stream',
    },
    category: 'village',
  },
  {
    id: 'living-kitchen-open-space',
    src: '/images/casa-vacanze-dolcedo/living-kitchen-open-space.jpg',
    alt: {
      it: 'Zona giorno con cucina moderna colore salvia, mobile TV e arredi accoglienti',
      en: 'Living area with modern sage green kitchen, TV unit, and welcoming furnishings',
    },
    caption: {
      it: 'Open space luminoso: cucina attrezzata moderna e zona living',
      en: 'Bright open-plan space: equipped modern kitchen and relaxed living area',
    },
    category: 'living',
  },
  {
    id: 'bedroom-french-bed',
    src: '/images/casa-vacanze-dolcedo/bedroom-french-bed-fireplace.jpg',
    alt: {
      it: 'Seconda camera con letto alla francese, caminetto elettrico e vista sui tetti del borgo',
      en: 'Second bedroom with French-style bed, electric fireplace, and view of village roofs',
    },
    caption: {
      it: 'Camera con letto alla francese (~una piazza e mezza), caminetto elettrico e vista tetti',
      en: 'Bedroom with French bed (~one-and-a-half width), electric fireplace, and village roof views',
    },
    category: 'bedroom',
  },
  {
    id: 'kitchen-modern-sage',
    src: '/images/casa-vacanze-dolcedo/kitchen-modern-sage.jpg',
    alt: {
      it: 'Cucina verde salvia con forno a incasso, piano cottura a induzione e cappa aspirante',
      en: 'Sage green kitchen with built-in oven, induction cooktop, and extractor hood',
    },
    caption: {
      it: 'Cucina lineare completa con piastrelle decorate, forno e stoviglie',
      en: 'Fully equipped linear kitchen with decorative tiling, oven, and cookware',
    },
    category: 'kitchen',
  },
  {
    id: 'living-room-dining-pellet-stove',
    src: '/images/casa-vacanze-dolcedo/living-room-dining-pellet-stove.jpg',
    alt: {
      it: 'Tavolo da pranzo, parete in pietra a vista e stufa a pellet',
      en: 'Dining table, exposed stone accent wall, and wood pellet stove',
    },
    caption: {
      it: 'Zona pranzo con stufa a pellet per un calore naturale nelle mezze stagioni',
      en: 'Dining nook with pellet stove for natural warmth across all seasons',
    },
    category: 'living',
  },
  {
    id: 'dining-table-details',
    src: '/images/casa-vacanze-dolcedo/dining-table-details.jpg',
    alt: {
      it: 'Tavola apparecchiata con dettagli in ceramica verde salvia e tovagliette in legno',
      en: 'Set dining table with sage ceramic dinnerware and wooden placemats',
    },
    caption: {
      it: 'Attenzione ai dettagli e ospitalità curata per ogni ospite',
      en: 'Thoughtful hospitality details and care for every guest',
    },
    category: 'interior',
  },
  {
    id: 'living-room-sofa-bed',
    src: '/images/casa-vacanze-dolcedo/living-room-sofa-bed.jpg',
    alt: {
      it: 'Divano letto matrimoniale in soggiorno con cuscini e luce naturale',
      en: 'Double sofa bed in the living room with cushions and natural light',
    },
    caption: {
      it: 'Divano trasformabile in un ulteriore comodo letto matrimoniale',
      en: 'Sofa convertible into an additional comfortable double bed',
    },
    category: 'living',
  },
  {
    id: 'dolcedo-piazza-bridge',
    src: '/images/casa-vacanze-dolcedo/dolcedo-piazza-bridge.jpg',
    alt: {
      it: 'Scorcio panoramico di Dolcedo con il ponte in pietra ad arco e la vegetazione ligure',
      en: 'Panoramic view of Dolcedo with stone arched bridge and Ligurian greenery',
    },
    caption: {
      it: 'L\'atmosfera tranquilla di Dolcedo, a pochi minuti da Imperia e dal mare',
      en: 'The peaceful atmosphere of Dolcedo, minutes from Imperia and the Mediterranean coast',
    },
    category: 'village',
  },
  {
    id: 'dolcedo-village-view',
    src: '/images/casa-vacanze-dolcedo/dolcedo-village-view.jpg',
    alt: {
      it: 'Veduta del borgo di Dolcedo circondato dagli uliveti della Val Prino',
      en: 'View of Dolcedo village nestled among the olive groves of the Val Prino',
    },
    caption: {
      it: 'I tipici caruggi in pietra, archi e facciate liguri affacciate sul torrente',
      en: 'Typical stone alleys, arches, and Ligurian facades overlooking the stream',
    },
    category: 'village',
  },
];

export const ROOMS_DATA: RoomDetail[] = [
  {
    id: 'camera-matrimoniale',
    name: {
      it: 'Camera Matrimoniale',
      en: 'Master Double Bedroom',
    },
    subtitle: {
      it: 'Camera padronale con letto matrimoniale',
      en: 'Main bedroom with double bed',
    },
    description: {
      it: 'Spaziosa camera matrimoniale con biancheria da letto inclusa, arredata con cura e dotata di impianto di climatizzazione con pompa di calore per il massimo comfort estivo e invernale.',
      en: 'Spacious master bedroom with fresh bed linens included, carefully furnished and equipped with air conditioning and heat pump for optimal year-round comfort.',
    },
    image: '/images/casa-vacanze-dolcedo/living-kitchen-open-space.jpg',
    features: {
      it: [
        'Letto matrimoniale con materasso confortevole',
        'Lenzuola e coperte fornite e incluse',
        'Armadio e spazio guardaroba per i soggiorni',
        'Finestra con luce naturale del borgo',
      ],
      en: [
        'Double bed with comfortable supportive mattress',
        'Fresh bed linens and blankets included',
        'Wardrobe and hanging storage for your stay',
        'Window offering soft natural village light',
      ],
    },
    climateNote: {
      it: 'Aria condizionata e pompa di calore per riscaldamento e raffrescamento',
      en: 'Air conditioning and heat pump for cooling and heating',
    },
  },
  {
    id: 'camera-francese',
    name: {
      it: 'Camera con Letto alla Francese',
      en: 'Bedroom with French Bed',
    },
    subtitle: {
      it: 'Camera accogliente (~una piazza e mezza)',
      en: 'Cozy bedroom (~one-and-a-half bed width)',
    },
    description: {
      it: 'Seconda camera luminosa con letto alla francese (~una piazza e mezza), caminetto elettrico a parete che crea un\'atmosfera intima e suggestiva, ventilatore a soffitto e finestra con vista panoramica sui tetti in cotto del borgo.',
      en: 'A bright second bedroom featuring a French-style bed (~one-and-a-half width), an elegant electric wall fireplace for intimate warmth, a ceiling fan, and a window framing the terracotta village roofs.',
    },
    image: '/images/casa-vacanze-dolcedo/bedroom-french-bed-fireplace.jpg',
    features: {
      it: [
        'Letto alla francese (~una piazza e mezza)',
        'Caminetto elettrico a parete con riscaldamento regolabile',
        'Ventilatore per la stagione calda',
        'Finestra affacciata sui tetti storici di Dolcedo',
        'Portavaligie e appendiabiti dedicato',
      ],
      en: [
        'French-style bed (~one-and-a-half places)',
        'Wall-mounted electric fireplace with adjustable heat',
        'Fan for warmer summer days',
        'Window overlooking the historical roofs of Dolcedo',
        'Dedicated luggage rack and clothes rack',
      ],
    },
    climateNote: {
      it: 'Caminetto elettrico regolabile + ventilatore',
      en: 'Adjustable electric fireplace + ceiling/room fan',
    },
  },
  {
    id: 'soggiorno-cucina',
    name: {
      it: 'Soggiorno con Cucina & Divano Letto',
      en: 'Living Room with Kitchen & Sofa Bed',
    },
    subtitle: {
      it: 'Cuore della casa con stufa a pellet e zona pranzo',
      en: 'Heart of the home with pellet stove & dining area',
    },
    description: {
      it: 'Ampia zona giorno open space con cucina moderna verde salvia completamente attrezzata (forno, piano cottura, lavastoviglie, macchina caffè e tè). Tavolo da pranzo in legno, parete d\'angolo in pietra a vista con stufa a pellet, mobile TV e divano che si trasforma all\'occorrenza in un comodo letto matrimoniale.',
      en: 'Generous open-plan living area featuring a modern sage green fully equipped kitchen (oven, cooktop, dishwasher, coffee & tea maker). Wooden dining table, stone accent corner with wood pellet stove, TV console, and sofa that converts into an extra double bed.',
    },
    image: '/images/casa-vacanze-dolcedo/living-room-dining-pellet-stove.jpg',
    features: {
      it: [
        'Cucina completa con forno, piano cottura e lavastoviglie',
        'Stufa a pellet e ventilatore d\'ambiente',
        'Tavolo da pranzo con stoviglie complete per gli ospiti',
        'Divano trasformabile in letto matrimoniale aggiuntivo',
        'Televisore a schermo piatto e mobile soggiorno',
      ],
      en: [
        'Full kitchen with oven, cooktop, and dishwasher',
        'Wood pellet stove and room fan',
        'Dining table with complete dinnerware and glassware',
        'Sofa convertible into an additional double bed',
        'Flat-screen television and media console',
      ],
    },
    climateNote: {
      it: 'Stufa a pellet con calore a diffusione naturale + ventilatore',
      en: 'Pellet stove providing natural diffused heat + room fan',
    },
  },
  {
    id: 'bagno',
    name: {
      it: 'Bagno dell\'Appartamento',
      en: 'Apartment Bathroom',
    },
    subtitle: {
      it: 'Bagno privato con doccia e lavatrice',
      en: 'Private bathroom with shower & washing machine',
    },
    description: {
      it: 'Bagno completo, curato e pulito con doccia, sanitari, asciugamani morbidi inclusi nel soggiorno per tutti gli ospiti e lavatrice a disposizione per vacanze senza pensieri.',
      en: 'Complete, impeccably clean private bathroom featuring a shower, fresh fluffy towels included for all guests, and an in-unit washing machine for carefree longer stays.',
    },
    image: '/images/casa-vacanze-dolcedo/dining-table-details.jpg',
    features: {
      it: [
        'Doccia con acqua calda continua',
        'Set di asciugamani morbidi inclusi per ciascun ospite',
        'Lavatrice a disposizione nell\'appartamento',
        'Asciugacapelli e prodotti base per il soggiorno',
      ],
      en: [
        'Shower with reliable hot water',
        'Set of soft towels included for each guest',
        'Washing machine available inside the apartment',
        'Hairdryer and essential guest toiletries',
      ],
    },
    climateNote: {
      it: 'Riscaldamento dedicato per il massimo comfort nei mesi freschi',
      en: 'Dedicated heating for comfort during cooler months',
    },
  },
];

export const AMENITIES_LIST: Amenity[] = [
  {
    id: 'wifi',
    name: { it: 'Wi-Fi Veloce Gratuito', en: 'Free High-Speed Wi-Fi' },
    detail: {
      it: 'Connessione internet affidabile per lavorare da remoto o guardare serie in streaming.',
      en: 'Reliable internet connection suitable for remote work, browsing, and streaming.',
    },
    iconName: 'wifi',
  },
  {
    id: 'washing-machine',
    name: { it: 'Lavatrice in Casa', en: 'In-Unit Washing Machine' },
    detail: {
      it: 'Lavatrice privata a tua disposizione, ideale per soggiorni di più giorni.',
      en: 'Private washing machine at your disposal, perfect for multi-day vacations.',
    },
    iconName: 'shirt',
  },
  {
    id: 'dishwasher',
    name: { it: 'Lavastoviglie', en: 'Modern Dishwasher' },
    detail: {
      it: 'Cucina senza pensieri: la lavastoviglie integrata ti fa risparmiare tempo.',
      en: 'Dine without chores: the integrated dishwasher lets you unwind after meals.',
    },
    iconName: 'utensils',
  },
  {
    id: 'coffee-tea',
    name: { it: 'Macchina Caffè & Tè', en: 'Coffee & Tea Maker' },
    detail: {
      it: 'Inizia ogni giornata con un buon espresso all\'italiana o un infuso caldo.',
      en: 'Start every morning with an authentic Italian espresso or herbal tea.',
    },
    iconName: 'coffee',
  },
  {
    id: 'linens-included',
    name: { it: 'Lenzuola & Biancheria', en: 'Fresh Linens Included' },
    detail: {
      it: 'Letti già pronti con lenzuola pulite di qualità all\'arrivo, nessun costo nascosto.',
      en: 'Beds freshly prepared with clean, high-grade linens upon arrival at no extra fee.',
    },
    iconName: 'bed-single',
  },
  {
    id: 'towels-included',
    name: { it: 'Set Asciugamani Inclusi', en: 'Towels Included' },
    detail: {
      it: 'Set completo di asciugamani morbidi per ogni ospite già presente in bagno.',
      en: 'A complete set of soft bath towels for every guest already placed in the bathroom.',
    },
    iconName: 'sparkles',
  },
  {
    id: 'welcome-gift',
    name: { it: 'Piccolo Pensiero di Benvenuto', en: 'Thoughtful Welcome Gift' },
    detail: {
      it: 'Un gesto di autentica ospitalità per accoglierti nel borgo con un sorriso.',
      en: 'A warm hospitable welcome touch to greet you upon arrival in Dolcedo.',
    },
    iconName: 'gift',
  },
  {
    id: 'equipped-kitchen',
    name: { it: 'Cucina con Forno & Piano Cottura', en: 'Fully Equipped Kitchen' },
    detail: {
      it: 'Pentole, piatti, posate, bicchieri e accessori per preparare piatti liguri in casa.',
      en: 'Cookware, dinnerware, glasses, and utensils to prepare fresh local dishes.',
    },
    iconName: 'cooking-pot',
  },
];

export const VILLAGE_SERVICES: VillageService[] = [
  {
    name: { it: 'Bar & Caffè Storici', en: 'Village Cafes & Bars' },
    note: {
      it: 'Caffè espresso, cornetti e aperitivi serali a pochi passi sulla piazza.',
      en: 'Morning espresso, croissants, and evening aperitivo right on the village square.',
    },
    iconName: 'cup-soda',
  },
  {
    name: { it: 'Ristoranti & Trattorie', en: 'Restaurants & Trattorias' },
    note: {
      it: 'Cucina tipica ligure, trofie al pesto, coniglio alla sanremese e focaccia.',
      en: 'Authentic Ligurian cuisine, trofie with pesto, local wines, and fresh pasta.',
    },
    iconName: 'utensils-crossed',
  },
  {
    name: { it: 'Botteghe Alimentari', en: 'Grocery Shops & Markets' },
    note: {
      it: 'Pane fresco, formaggi locali, frutta, verdura e olio extravergine taggiasco.',
      en: 'Fresh bread, local cheeses, fruit, vegetables, and world-class Taggiasca olive oil.',
    },
    iconName: 'store',
  },
  {
    name: { it: 'Farmacia di Paese', en: 'Village Pharmacy' },
    note: {
      it: 'Servizio farmaceutico a portata di mano per qualsiasi necessità quotidiana.',
      en: 'Convenient village pharmacy within comfortable walking distance.',
    },
    iconName: 'heart-pulse',
  },
  {
    name: { it: 'Tabacchi & Giornali', en: 'Tobacconist & Newsstand' },
    note: {
      it: 'Tabacchi, ricariche, francobolli e giornali locali.',
      en: 'Local papers, stamps, sundries, and necessities.',
    },
    iconName: 'newspaper',
  },
  {
    name: { it: 'Sportello Bancomat (ATM)', en: 'ATM Cash Dispenser' },
    note: {
      it: 'Prelievo contante disponibile direttamente nel borgo.',
      en: 'Cash withdrawal ATM conveniently available directly in Dolcedo.',
    },
    iconName: 'credit-card',
  },
  {
    name: { it: 'Parcheggio Gratuito nel Borgo', en: 'Free Village Parking' },
    note: {
      it: 'Comodi parcheggi pubblici gratuiti dislocati all\'ingresso e attorno a Dolcedo.',
      en: 'Convenient free public parking lots situated near the entrance and around Dolcedo.',
    },
    iconName: 'car',
  },
];
