// ============================================
// UNBOUND KENYA - GEMS DATA
// Complete dataset of hidden tourism gems
// ============================================

const GEMS_DATA = [
    // COAST REGION
    {
        id: 'lamu-island',
        name: 'Lamu Island',
        region: 'coast',
        description: 'A UNESCO World Heritage site, Lamu is Kenya\'s oldest living Swahili settlement. Stone-built houses, winding lanes, and centuries-old dhows create a timeless atmosphere where cars are absent and donkeys rule.',
        tags: ['Culture', 'History', 'Architecture', 'Beach'],
        image: 'https://images.unsplash.com/photo-1590237879892-1fb4e8f49386?w=800',
        mapX: 0.75,
        mapY: 0.15,
        mood: ['cultural', 'relaxed', 'offbeat']
    },
    {
        id: 'gedi-ruins',
        name: 'Gedi Ruins',
        region: 'coast',
        description: 'Mysterious 13th-century Swahili town ruins hidden in lush coastal forest. Ancient mosques, palaces, and houses tell stories of a once-thriving civilization that vanished without trace.',
        tags: ['History', 'Archaeology', 'Mystery'],
        image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
        mapX: 0.72,
        mapY: 0.3,
        mood: ['cultural', 'active', 'offbeat']
    },
    {
        id: 'watamu-marine',
        name: 'Watamu Marine Park',
        region: 'coast',
        description: 'Kenya\'s first marine national park protects pristine coral reefs, sea turtles, and over 600 species of fish. Crystal-clear waters and white sand beaches offer world-class snorkeling and diving.',
        tags: ['Marine Life', 'Diving', 'Beach', 'Conservation'],
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
        mapX: 0.73,
        mapY: 0.32,
        mood: ['wildlife', 'active', 'comfort']
    },
    {
        id: 'shimoni-caves',
        name: 'Shimoni Caves',
        region: 'coast',
        description: 'Ancient coral caves with a dark history as hiding places for enslaved people. Today, they offer a sobering glimpse into the past and connect to underground channels leading to the ocean.',
        tags: ['History', 'Caves', 'Cultural Heritage'],
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
        mapX: 0.7,
        mapY: 0.45,
        mood: ['cultural', 'active', 'offbeat']
    },
    {
        id: 'kisite-mpunguti',
        name: 'Kisite-Mpunguti Marine Park',
        region: 'coast',
        description: 'Remote marine sanctuary where dolphins play and coral gardens flourish. Four small islands surrounded by turquoise waters teeming with tropical fish make this Kenya\'s snorkeling paradise.',
        tags: ['Dolphins', 'Snorkeling', 'Islands', 'Marine Park'],
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        mapX: 0.69,
        mapY: 0.46,
        mood: ['wildlife', 'active', 'luxury']
    },

    // RIFT VALLEY REGION
    {
        id: 'lake-bogoria',
        name: 'Lake Bogoria',
        region: 'rift',
        description: 'A flamingo paradise where millions of pink birds create living carpets on alkaline waters. Hot springs and geysers add dramatic flair to this lesser-known soda lake in the Great Rift Valley.',
        tags: ['Flamingos', 'Geysers', 'Hot Springs', 'Photography'],
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
        mapX: 0.42,
        mapY: 0.3,
        mood: ['wildlife', 'active', 'offbeat']
    },
    {
        id: 'hells-gate',
        name: 'Hell\'s Gate National Park',
        region: 'rift',
        description: 'The only park where you can walk, cycle, or climb among wildlife. Dramatic cliffs, gorges, and geothermal hot springs create an adventure playground in the Rift Valley.',
        tags: ['Hiking', 'Rock Climbing', 'Cycling', 'Geothermal'],
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
        mapX: 0.38,
        mapY: 0.38,
        mood: ['active', 'mountain', 'rugged']
    },
    {
        id: 'mount-longonot',
        name: 'Mount Longonot',
        region: 'rift',
        description: 'A dormant stratovolcano with a challenging rim hike offering 360-degree views of the Rift Valley. The crater floor reveals unique volcanic features and rare wildlife.',
        tags: ['Volcano', 'Hiking', 'Crater', 'Adventure'],
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        mapX: 0.37,
        mapY: 0.39,
        mood: ['active', 'mountain', 'rugged']
    },
    {
        id: 'menengai-crater',
        name: 'Menengai Crater',
        region: 'rift',
        description: 'One of the world\'s largest volcanic calderas overlooking Nakuru. Legends speak of fierce battles, while the rim offers spectacular views and glimpses of steaming fumaroles below.',
        tags: ['Volcano', 'Hiking', 'Views', 'Legend'],
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
        mapX: 0.38,
        mapY: 0.35,
        mood: ['active', 'mountain', 'offbeat']
    },
    {
        id: 'lake-baringo',
        name: 'Lake Baringo',
        region: 'rift',
        description: 'A freshwater oasis in the arid Rift Valley, home to over 470 bird species, hippos, and crocodiles. Island communities maintain ancient traditions while offering warm hospitality.',
        tags: ['Birdwatching', 'Islands', 'Hippos', 'Cultural'],
        image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800',
        mapX: 0.41,
        mapY: 0.28,
        mood: ['wildlife', 'relaxed', 'comfort']
    },
    {
        id: 'lake-kamnarok',
        name: 'Lake Kamnarok',
        region: 'rift',
        description: 'Kenya\'s smallest national reserve protects a hidden wetland paradise. Crocodile-inhabited marshes and seasonal flooding create a unique ecosystem rarely visited by tourists.',
        tags: ['Wetlands', 'Crocodiles', 'Birdlife', 'Remote'],
        image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=800',
        mapX: 0.43,
        mapY: 0.29,
        mood: ['wildlife', 'offbeat', 'rugged']
    },

    // NORTHERN FRONTIER
    {
        id: 'lake-turkana',
        name: 'Lake Turkana',
        region: 'north',
        description: 'The world\'s largest permanent desert lake, nicknamed the "Jade Sea" for its stunning turquoise color. Volcanic islands, ancient fossils, and resilient communities make this Kenya\'s most remote treasure.',
        tags: ['Desert Lake', 'Fossils', 'Remote', 'Volcanic Islands'],
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
        mapX: 0.42,
        mapY: 0.08,
        mood: ['offbeat', 'rugged', 'desert']
    },
    {
        id: 'chalbi-desert',
        name: 'Chalbi Desert',
        region: 'north',
        description: 'An otherworldly salt desert where mirages dance and silence reigns. During rare rains, the desert transforms into a shallow lake attracting thousands of flamingos.',
        tags: ['Desert', 'Salt Flats', 'Remote', 'Mirage'],
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
        mapX: 0.45,
        mapY: 0.12,
        mood: ['offbeat', 'rugged', 'desert']
    },
    {
        id: 'koobi-fora',
        name: 'Koobi Fora',
        region: 'north',
        description: 'The cradle of humankind where fossils reveal our 4-million-year history. This UNESCO site along Lake Turkana continues to yield groundbreaking paleontological discoveries.',
        tags: ['Archaeology', 'Fossils', 'UNESCO', 'History'],
        image: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=800',
        mapX: 0.44,
        mapY: 0.1,
        mood: ['cultural', 'offbeat', 'rugged']
    },
    {
        id: 'marsabit-forest',
        name: 'Marsabit National Park',
        region: 'north',
        description: 'An emerald oasis rising from the desert. Ancient forests, crater lakes, and unique wildlife including the rare greater kudu and endemic Lammergeyer vultures thrive in this mountain sanctuary.',
        tags: ['Forest', 'Crater Lakes', 'Wildlife', 'Mountain'],
        image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800',
        mapX: 0.48,
        mapY: 0.18,
        mood: ['wildlife', 'forest', 'offbeat']
    },
    {
        id: 'south-horr',
        name: 'South Horr',
        region: 'north',
        description: 'A green valley nestled between dramatic mountain ranges in the heart of the desert. Palm-fringed oasis, singing wells, and Samburu culture offer respite from the surrounding arid lands.',
        tags: ['Oasis', 'Culture', 'Mountains', 'Desert'],
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
        mapX: 0.43,
        mapY: 0.16,
        mood: ['cultural', 'offbeat', 'rugged']
    },

    // WESTERN REGION
    {
        id: 'kakamega-forest',
        name: 'Kakamega Forest',
        region: 'west',
        description: 'Kenya\'s only remaining tropical rainforest, a fragment of the ancient Guineo-Congolian forest. Home to unique primates, 400 bird species, and butterflies found nowhere else in Kenya.',
        tags: ['Rainforest', 'Primates', 'Birdwatching', 'Butterflies'],
        image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
        mapX: 0.28,
        mapY: 0.35,
        mood: ['forest', 'wildlife', 'active']
    },
    {
        id: 'ruma-national-park',
        name: 'Ruma National Park',
        region: 'west',
        description: 'Kenya\'s only park protecting the endangered roan antelope. Rolling grasslands along the Lambwe Valley offer excellent game viewing including the rare Jackson\'s hartebeest.',
        tags: ['Roan Antelope', 'Wildlife', 'Grasslands', 'Conservation'],
        image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800',
        mapX: 0.3,
        mapY: 0.42,
        mood: ['wildlife', 'offbeat', 'rugged']
    },
    {
        id: 'kit-mikayi',
        name: 'Kit Mikayi',
        region: 'west',
        description: 'A massive granite rock formation sacred to the Luo community. Three massive rocks balanced impossibly create chambers where traditional ceremonies and spiritual practices continue.',
        tags: ['Sacred Site', 'Rock Formation', 'Culture', 'Spirituality'],
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        mapX: 0.29,
        mapY: 0.38,
        mood: ['cultural', 'offbeat', 'comfort']
    },
    {
        id: 'saiwa-swamp',
        name: 'Saiwa Swamp National Park',
        region: 'west',
        description: 'Kenya\'s smallest national park protects the rare semi-aquatic Sitatunga antelope. Raised wooden walkways wind through pristine wetlands alive with primates and exotic birds.',
        tags: ['Wetlands', 'Sitatunga', 'Primates', 'Birdwatching'],
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
        mapX: 0.32,
        mapY: 0.28,
        mood: ['wildlife', 'relaxed', 'comfort']
    },
    {
        id: 'elgon-caves',
        name: 'Mount Elgon Caves',
        region: 'west',
        description: 'Ancient volcanic caves where elephants mine salt in the darkness. Kitum Cave\'s massive chambers carved by centuries of elephants seeking mineral deposits create a unique wildlife spectacle.',
        tags: ['Caves', 'Elephants', 'Mountain', 'Unique Wildlife'],
        image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800',
        mapX: 0.31,
        mapY: 0.25,
        mood: ['wildlife', 'active', 'offbeat']
    },

    // CENTRAL REGION
    {
        id: 'aberdare-ranges',
        name: 'Aberdare Ranges',
        region: 'central',
        description: 'Mist-shrouded moorlands and bamboo forests hide waterfalls, rare bongo antelopes, and the tree hotel where Princess Elizabeth became Queen. Cloud forests harbor unique endemic species.',
        tags: ['Mountain', 'Waterfalls', 'Bongo', 'Cloud Forest'],
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
        mapX: 0.40,
        mapY: 0.38,
        mood: ['mountain', 'wildlife', 'luxury']
    },
    {
        id: '14-falls',
        name: 'Fourteen Falls',
        region: 'central',
        description: 'The Athi River cascades in a spectacular series of 14 waterfalls during the wet season. A hidden gem near Nairobi offering picnic spots and natural pools for swimming.',
        tags: ['Waterfalls', 'Picnic', 'Swimming', 'Day Trip'],
        image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800',
        mapX: 0.41,
        mapY: 0.41,
        mood: ['relaxed', 'active', 'comfort']
    },
    {
        id: 'thika-falls',
        name: 'Chania & Thika Falls',
        region: 'central',
        description: 'Twin waterfalls near coffee plantations where Chania drops 90 feet into a gorge. Dense forest trails lead to viewpoints and natural swimming holes below.',
        tags: ['Waterfalls', 'Hiking', 'Coffee', 'Swimming'],
        image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800',
        mapX: 0.41,
        mapY: 0.39,
        mood: ['active', 'mountain', 'comfort']
    },
    {
        id: 'ol-donyo-sabuk',
        name: 'Ol Donyo Sabuk',
        region: 'central',
        description: 'A solitary mountain rising from the plains, home to buffalos, leopards, and the grave of an American millionaire. Panoramic summit views stretch across the Rift Valley.',
        tags: ['Mountain', 'Hiking', 'Wildlife', 'Views'],
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        mapX: 0.43,
        mapY: 0.40,
        mood: ['active', 'mountain', 'rugged']
    }
];

// Quiz recommendation logic
const QUIZ_RECOMMENDATIONS = {
    'coast-active-offbeat': 'gedi-ruins',
    'coast-active-comfort': 'watamu-marine',
    'coast-active-rugged': 'kisite-mpunguti',
    'coast-relaxed-offbeat': 'lamu-island',
    'coast-relaxed-comfort': 'watamu-marine',
    'coast-cultural-offbeat': 'lamu-island',
    'coast-cultural-comfort': 'gedi-ruins',
    'coast-wildlife-offbeat': 'kisite-mpunguti',
    
    'mountain-active-offbeat': 'mount-longonot',
    'mountain-active-comfort': 'aberdare-ranges',
    'mountain-active-rugged': 'hells-gate',
    'mountain-relaxed-comfort': '14-falls',
    'mountain-cultural-offbeat': 'menengai-crater',
    'mountain-wildlife-offbeat': 'aberdare-ranges',
    'mountain-wildlife-luxury': 'aberdare-ranges',
    
    'desert-active-offbeat': 'chalbi-desert',
    'desert-active-rugged': 'lake-turkana',
    'desert-relaxed-offbeat': 'south-horr',
    'desert-cultural-offbeat': 'koobi-fora',
    'desert-wildlife-rugged': 'marsabit-forest',
    
    'forest-active-offbeat': 'kakamega-forest',
    'forest-active-comfort': 'kakamega-forest',
    'forest-relaxed-comfort': 'saiwa-swamp',
    'forest-wildlife-offbeat': 'elgon-caves',
    'forest-wildlife-comfort': 'kakamega-forest',
    'forest-cultural-offbeat': 'kit-mikayi'
};

// Default recommendations if exact match not found
const DEFAULT_RECOMMENDATIONS = {
    'coast': 'lamu-island',
    'mountain': 'hells-gate',
    'desert': 'lake-turkana',
    'forest': 'kakamega-forest'
};
