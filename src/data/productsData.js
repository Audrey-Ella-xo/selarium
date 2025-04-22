// src/data/productsData.js
export const products = [
  {
    id: "celtify",
    name: "Celtify",
    tagline: "Bridging tradition with technology",
    shortDescription: "A platform celebrating Irish culture and heritage through modern technology.",
    longDescription: "Celtify is our flagship product currently in development at NCI. It aims to preserve and promote Irish cultural heritage through an interactive digital platform. The application allows users to explore traditional music, language, stories, and customs in an engaging and educational format. With Celtify, we're creating a bridge between Ireland's rich cultural past and its technological future.",
    imageUrl: "/images/products/celtify.jpg",
    status: "In Development",
    features: [
      "Interactive exploration of Irish music and instruments",
      "Irish language learning modules with AI-powered pronunciation feedback",
      "Digital library of traditional stories and folklore",
      "Virtual tours of historical sites and cultural landmarks",
      "Community platform for cultural events and discussions"
    ],
    technologies: ["React", "Node.js", "MongoDB", "TensorFlow", "AWS"],
    links: {
      website: "https://celtify.example.com",
      github: "https://github.com/your-team/celtify",
    }
  }
  // More products can be added here as your team develops them
];