// src/pages/About.jsx
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Our Team
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Learn more about our journey, mission, and values
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
// src/pages/About.jsx (continued)
initial={{ opacity: 0, x: -30 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.5 }}
>
<h2 className="text-3xl font-bold mb-6">Our Story</h2>
<p className="text-gray-700 mb-4">
  We started as a group of ambitious students at the National College of Ireland, 
  brought together by our shared passion for technology and innovation. What began as 
  collaborative projects for our coursework soon evolved into something more significant.
</p>
<p className="text-gray-700 mb-4">
  Recognizing the potential of our combined skills and creative ideas, we decided to form 
  a small startup team to bring our concepts to life beyond the classroom. Our diverse 
  backgrounds in computer science, design, and business provide us with a well-rounded 
  approach to problem-solving.
</p>
<p className="text-gray-700">
  Today, we're focused on developing products that bridge technology with cultural and 
  educational needs, starting with our flagship product, Celtify.
</p>
</motion.div>
<motion.div
className="rounded-lg overflow-hidden shadow-lg"
initial={{ opacity: 0, x: 30 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.5, delay: 0.2 }}
>
<img 
  src="/images/about/team-story.jpg" 
  alt="Our team story" 
  className="w-full h-full object-cover"
/>
</motion.div>
</div>
</div>
</section>

{/* Mission & Vision */}
<section className="py-16 bg-gray-50">
<div className="container mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold mb-4">Mission & Vision</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">
What drives us forward and where we're headed
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<motion.div 
className="bg-white p-8 rounded-lg shadow-md"
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
viewport={{ once: true }}
>
<h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
<p className="text-gray-700">
  To create innovative digital solutions that address real-world problems while providing 
  valuable learning experiences for each team member. We strive to apply our academic 
  knowledge in practical ways that benefit users and contribute to the tech community.
</p>
</motion.div>

<motion.div 
className="bg-white p-8 rounded-lg shadow-md"
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0.2 }}
viewport={{ once: true }}
>
<h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
<p className="text-gray-700">
  To grow from a student project team into an established technology company that 
  specializes in culturally significant and educational applications. We envision our 
  products enriching users' lives while preserving important aspects of heritage and 
  knowledge for future generations.
</p>
</motion.div>
</div>
</div>
</section>

{/* Values */}
<section className="py-16">
<div className="container mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold mb-4">Our Values</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">
The principles that guide our work and collaboration
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<motion.div 
className="p-6 border-l-4 border-primary"
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3 }}
viewport={{ once: true }}
>
<h3 className="text-xl font-bold mb-3">Innovation</h3>
<p className="text-gray-700">
  We embrace creative thinking and seek novel solutions to challenges, never satisfied 
  with the status quo.
</p>
</motion.div>

<motion.div 
className="p-6 border-l-4 border-primary"
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3, delay: 0.1 }}
viewport={{ once: true }}
>
<h3 className="text-xl font-bold mb-3">Collaboration</h3>
<p className="text-gray-700">
  We believe in the power of diverse perspectives and skills working together toward 
  common goals.
</p>
</motion.div>

<motion.div 
className="p-6 border-l-4 border-primary"
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3, delay: 0.2 }}
viewport={{ once: true }}
>
<h3 className="text-xl font-bold mb-3">Quality</h3>
<p className="text-gray-700">
  We strive for excellence in everything we create, paying attention to details and 
  user experience.
</p>
</motion.div>

<motion.div 
className="p-6 border-l-4 border-primary"
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3, delay: 0.3 }}
viewport={{ once: true }}
>
<h3 className="text-xl font-bold mb-3">Learning</h3>
<p className="text-gray-700">
  We view challenges as opportunities to learn and grow, both individually and as a team.
</p>
</motion.div>

<motion.div 
className="p-6 border-l-4 border-primary"
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3, delay: 0.4 }}
viewport={{ once: true }}
>
<h3 className="text-xl font-bold mb-3">Integrity</h3>
<p className="text-gray-700">
  We act with honesty and transparency in all our interactions and business decisions.
</p>
</motion.div>

<motion.div 
className="p-6 border-l-4 border-primary"
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3, delay: 0.5 }}
viewport={{ once: true }}
>
<h3 className="text-xl font-bold mb-3">Impact</h3>
<p className="text-gray-700">
  We aim to create meaningful products that positively affect our users and communities.
</p>
</motion.div>
</div>
</div>
</section>
</div>
);
};

export default About;