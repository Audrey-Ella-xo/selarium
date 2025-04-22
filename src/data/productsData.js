// src/data/productsData.js
export const products = [
  {
    id: "celtify",
    name: "Celtify",
    tagline: "Bridging tradition with technology",
    shortDescription: "A platform celebrating Irish culture and heritage through modern technology.",
    longDescription: "Celtify is our flagship product currently in development at NCI. It's an AI-powered Celtic language recognition and translation tool designed to preserve endangered languages and promote cultural heritage. The platform includes a groundbreaking VR simulation that allows users to explore ancient Celtic cities while learning languages in an immersive environment. Our solution focuses on context, syntax, handwriting, and cultural nuances, providing a level of accuracy and cultural sensitivity not found in existing translation tools.",
    imageUrl: "/images/products/celtify.jpg",
    status: "In Development",
    features: [
      "AI trained specifically for Celtic languages (Irish, Scottish Gaelic, Welsh)",
      "Context-based, culturally sensitive translations",
      "VR simulation of historically accurate Celtic environments",
      "Real-time translation while speaking English in the VR environment",
      "Adaptive NPC responses to user prompts in the VR experience",
      "Deep immersion in medieval everyday Celtic life"
    ],
    technologies: ["AI & Machine Learning", "VR/AR", "NLP", "React", "Node.js", "TensorFlow"],
    links: {
      website: "https://celtify.netlify.app/",
      github: "https://github.com/Audrey-Ella-xo/celtify",
    }
  }
  // More products can be added here as your team develops them
];