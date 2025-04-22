// src/components/home/Hero.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/70 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Innovating for Tomorrow at <span className="text-secondary">NCI</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              We're a team of passionate students building innovative solutions. 
              Explore our journey from classroom concepts to real-world applications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/products" className="btn bg-white text-primary hover:bg-gray-100">
                Our Products
              </Link>
              <Link to="/contact" className="btn bg-secondary text-white hover:bg-secondary/90">
                Get in Touch
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-video bg-white/10 rounded-lg shadow-xl backdrop-blur-sm overflow-hidden">
              <img 
                src="/images/hero-placeholder.jpg" 
                alt="Team collaboration" 
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold">Your Team Vision</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;