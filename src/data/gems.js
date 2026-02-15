export const hiddenGems = [
  {
    id: 1,
    name: "Ndere Island National Park",
    region: "Rift Valley",
    coordinates: { lat: -0.0833, lng: 34.15 },
    description: "A pristine island sanctuary on Lake Victoria, home to rare bird species and traditional fishing villages untouched by time.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    activities: ["Bird watching", "Cultural experiences", "Hiking"],
    landscape: "Coast",
    travelStyle: ["Solo", "Couple", "Family"],
    bestFor: "Nature lovers seeking tranquility"
  },
  {
    id: 2,
    name: "Chalbi Desert",
    region: "Northern Kenya",
    coordinates: { lat: 2.9, lng: 37.7 },
    description: "Kenya's mystical northern frontier where endless white sands meet nomadic tribes and shimmering mirages dance under the African sun.",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    activities: ["Cultural experiences", "Photography"],
    landscape: "Desert",
    travelStyle: ["Solo", "Couple"],
    bestFor: "Adventure seekers and photographers"
  },
  {
    id: 3,
    name: "Kakamega Forest",
    region: "Rift Valley",
    coordinates: { lat: 0.2667, lng: 34.85 },
    description: "The last remaining rainforest in Kenya, an ancient ecosystem teeming with butterflies, primates, and the sounds of untamed wilderness.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
    activities: ["Hiking", "Bird watching", "Nature walks"],
    landscape: "Forest",
    travelStyle: ["Solo", "Family"],
    bestFor: "Eco-tourists and nature enthusiasts"
  },
  {
    id: 4,
    name: "Lamu Archipelago",
    region: "Coast",
    coordinates: { lat: -2.2717, lng: 40.902 },
    description: "A timeless Swahili paradise where dhows sail turquoise waters, ancient architecture whispers stories, and life flows to the rhythm of the ocean.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    activities: ["Relaxation", "Cultural experiences", "Water sports"],
    landscape: "Coast",
    travelStyle: ["Couple", "Family"],
    bestFor: "Culture enthusiasts and beach lovers"
  },
  {
    id: 5,
    name: "Suguta Valley",
    region: "Northern Kenya",
    coordinates: { lat: 1.95, lng: 36.3 },
    description: "A lunar-like landscape of volcanic craters, hot springs, and vast salt flats where only the most intrepid travelers venture.",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
    activities: ["Hiking", "Photography", "Camping"],
    landscape: "Desert",
    travelStyle: ["Solo"],
    bestFor: "Extreme adventurers"
  },
  {
    id: 6,
    name: "Mfangano Island",
    region: "Rift Valley",
    coordinates: { lat: -0.4667, lng: 33.9833 },
    description: "A hidden gem on Lake Victoria featuring ancient rock art, traditional healing practices, and crystal-clear waters perfect for snorkeling.",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
    activities: ["Cultural experiences", "Snorkeling", "Relaxation"],
    landscape: "Coast",
    travelStyle: ["Couple", "Family"],
    bestFor: "Culture and water enthusiasts"
  },
  {
    id: 7,
    name: "Marsabit National Park",
    region: "Northern Kenya",
    coordinates: { lat: 2.33, lng: 37.98 },
    description: "An oasis in the northern desert with mist-covered forests, volcanic craters, and elephants that roam ancient trading routes.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80",
    activities: ["Wildlife viewing", "Hiking", "Bird watching"],
    landscape: "Forest",
    travelStyle: ["Solo", "Couple"],
    bestFor: "Wildlife enthusiasts"
  },
  {
    id: 8,
    name: "Kisite-Mpunguti Marine Park",
    region: "Coast",
    coordinates: { lat: -4.7167, lng: 39.3667 },
    description: "An underwater paradise of coral gardens and dolphins, where the Indian Ocean reveals its most vibrant colors beneath the surface.",
    image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&q=80",
    activities: ["Snorkeling", "Diving", "Relaxation"],
    landscape: "Coast",
    travelStyle: ["Couple", "Family"],
    bestFor: "Divers and marine life lovers"
  },
  {
    id: 9,
    name: "Loita Hills",
    region: "Rift Valley",
    coordinates: { lat: -1.5, lng: 35.5 },
    description: "Sacred Maasai lands of rolling hills, pristine forests, and traditional ceremonies where ancient culture thrives in harmony with nature.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    activities: ["Cultural experiences", "Hiking", "Photography"],
    landscape: "Forest",
    travelStyle: ["Solo", "Couple", "Family"],
    bestFor: "Cultural immersion seekers"
  }
];

export const regions = [
  {
    name: "Coast",
    description: "Where turquoise waters kiss pristine beaches and Swahili culture dances to the rhythm of the Indian Ocean.",
    color: "#00ACC1",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
  },
  {
    name: "Rift Valley",
    description: "Ancient landscapes carved by geological forces, home to tranquil lakes, lush forests, and the cradle of humanity.",
    color: "#2E7D32",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80"
  },
  {
    name: "Northern Kenya",
    description: "A frontier of raw beauty where vast deserts meet nomadic tribes under endless skies that have witnessed millennia.",
    color: "#E86B2C",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80"
  }
];

export const quizQuestions = [
  {
    id: 1,
    question: "Pick your ideal landscape",
    options: [
      { value: "Desert", label: "Desert", emoji: "🏜️" },
      { value: "Forest", label: "Forest", emoji: "🌳" },
      { value: "Coast", label: "Coast", emoji: "🏖️" }
    ]
  },
  {
    id: 2,
    question: "Choose an activity",
    options: [
      { value: "Hiking", label: "Hiking", emoji: "🥾" },
      { value: "Cultural experiences", label: "Cultural", emoji: "🎭" },
      { value: "Relaxation", label: "Relaxation", emoji: "🧘" }
    ]
  },
  {
    id: 3,
    question: "Select your travel style",
    options: [
      { value: "Solo", label: "Solo", emoji: "🎒" },
      { value: "Couple", label: "Couple", emoji: "💑" },
      { value: "Family", label: "Family", emoji: "👨‍👩‍👧‍👦" }
    ]
  }
];
