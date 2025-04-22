// src/pages/Products.jsx
import { motion } from 'framer-motion';
import ProductsList from '../components/products/ProductsList';

const Products = () => {
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
            Our Products
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Innovative solutions created by our student team at NCI
          </motion.p>
        </div>
      </section>

      {/* Products List */}
      <ProductsList />

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have an Idea for Collaboration?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We're always open to new partnerships and opportunities. If you have a project idea or 
            would like to work with our team, get in touch!
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;