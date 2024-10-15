import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location : Las Vegas, for 3 Days for Couple with a Cheap budget ,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image URL, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Uri, Geo Coordinates, ticket Pricing, rating, Time to travel each Of the location for 3 days with each day plan with best time to visit in JSON format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotels": [\n    {\n      "name": "The D Las Vegas",\n      "address": "301 Fremont Street, Las Vegas, NV 89101",\n      "price": "$50-$100 per night",\n      "image_url": "https://www.the-d.com/images/home/hero-background-desktop-mobile.jpg",\n      "geo_coordinates": "36.1695, -115.1422",\n      "rating": 4.0,\n      "description": "A historic downtown casino hotel with a retro vibe, offering affordable rooms, a vibrant casino, and a variety of dining options."\n    },\n    {\n      "name": "The Golden Nugget",\n      "address": "129 E Fremont St, Las Vegas, NV 89101",\n      "price": "$60-$150 per night",\n      "image_url": "https://www.goldennugget.com/las-vegas/images/hero-banner/hero-banner-desktop.jpg",\n      "geo_coordinates": "36.1688, -115.1420",\n      "rating": 4.5,\n      "description": "A luxury hotel with a focus on entertainment, boasting a famous shark tank, multiple pools, and a variety of restaurants and bars."\n    },\n    {\n      "name": "Circus Circus Hotel & Casino",\n      "address": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "price": "$40-$80 per night",\n      "image_url": "https://www.circuscircus.com/media/1967/circuscircus-las-vegas-header-image.jpg",\n      "geo_coordinates": "36.1106, -115.1726",\n      "rating": 3.5,\n      "description": "A family-friendly hotel with a circus theme, featuring an amusement park, arcade games, and a variety of restaurants and shows."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": 1,\n      "title": "Downtown Las Vegas Exploration",\n      "description": "Start your day with a walk down Fremont Street, enjoying the free street performers and the vibrant atmosphere. Visit the Neon Museum to see historical Vegas signs. Have a delicious and cheap meal at one of the many food stalls on Fremont Street Experience.",\n      "places": [\n        {\n          "name": "Fremont Street Experience",\n          "details": "A pedestrian-friendly street with a canopy of lights, free entertainment, and a variety of shops and restaurants.",\n          "image_url": "https://www.visitlasvegas.com/media/2506/freemont-street-experience-las-vegas.jpg",\n          "geo_coordinates": "36.1695, -115.1422",\n          "ticket_pricing": "Free",\n          "rating": 4.5,\n          "time_to_travel": "2-3 hours"\n        },\n        {\n          "name": "Neon Museum",\n          "details": "A museum showcasing historic neon signs from Las Vegas\' past.",\n          "image_url": "https://www.neonmuseum.org/wp-content/uploads/2017/05/Neon-Museum-Sign-Collection-6.jpg",\n          "geo_coordinates": "36.1705, -115.1380",\n          "ticket_pricing": "$20-$30 per person",\n          "rating": 4.0,\n          "time_to_travel": "1-2 hours"\n        }\n      ],\n      "best_time_to_visit": "Anytime, but evenings are particularly vibrant"\n    },\n    {\n      "day": 2,\n      "title": "The Strip Experience",\n      "description": "Take a free shuttle or ride the bus down the Las Vegas Strip. Visit the Bellagio Conservatory & Botanical Garden for free. Enjoy the dancing fountains at the Bellagio in the evening. Opt for a free show like the “Volcano” at the Mirage or the “Fountains of Bellagio”.",\n      "places": [\n        {\n          "name": "Bellagio Conservatory & Botanical Garden",\n          "details": "A free, stunning display of flowers and plants, changing seasonally.",\n          "image_url": "https://www.bellagio.com/images/hotel-and-casino-images/conservatory-and-botanical-garden.jpg",\n          "geo_coordinates": "36.1146, -115.1742",\n          "ticket_pricing": "Free",\n          "rating": 4.5,\n          "time_to_travel": "1-2 hours"\n        },\n        {\n          "name": "Bellagio Fountains",\n          "details": "A spectacular water and music show, performed multiple times throughout the day and evening.",\n          "image_url": "https://www.bellagio.com/images/hotel-and-casino-images/fountains-of-bellagio.jpg",\n          "geo_coordinates": "36.1146, -115.1742",\n          "ticket_pricing": "Free",\n          "rating": 4.0,\n          "time_to_travel": "30 minutes"\n        }\n      ],\n      "best_time_to_visit": "Evening for the fountains, daytime for the Conservatory"\n    },\n    {\n      "day": 3,\n      "title": "Day Trip to Red Rock Canyon National Conservation Area",\n      "description": "Rent a car or take a bus tour to Red Rock Canyon National Conservation Area for stunning views of red rock formations. Hike one of the many trails or simply enjoy the scenery.",\n      "places": [\n        {\n          "name": "Red Rock Canyon National Conservation Area",\n          "details": "A scenic park with red rock cliffs, hiking trails, and stunning views.",\n          "image_url": "https://www.nps.gov/redr/planyourvisit/images/RedRock-2.jpg",\n          "geo_coordinates": "36.1416, -115.2628",\n          "ticket_pricing": "$15 per vehicle",\n          "rating": 4.5,\n          "time_to_travel": "3-4 hours"\n        }\n      ],\n      "best_time_to_visit": "Early morning or late afternoon to avoid the hottest part of the day"\n    }\n  ]\n}\n```\n\n**Note:**\n\n* Prices for hotels and attractions are approximate and can vary depending on the time of year and availability.\n* This itinerary assumes you are using public transportation or have access to a rental car. \n* Be sure to check the operating hours and schedules for attractions before you go.\n* Las Vegas is a walking city, but consider wearing comfortable shoes as you will be doing a lot of walking.\n* Stay hydrated! Las Vegas is a desert city and it can get very hot, especially during the summer. \n',
        },
      ],
    },
  ],
});

