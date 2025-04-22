// src/components/home/FeaturedProduct.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaVrCardboard, FaLanguage, FaGlobeEurope } from 'react-icons/fa';
import { products } from '../../data/productsData';

const FeaturedProduct = () => {
  // Currently featuring Celtify as it's the only product
  const featuredProduct = products[0];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Product</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at our flagship project in development
          </p>
        </div>

        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium mb-4">
                {featuredProduct.status}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{featuredProduct.name}</h3>
              <p className="text-gray-500 text-lg mb-6">{featuredProduct.tagline}</p>
              <p className="text-gray-700 mb-6">{featuredProduct.shortDescription}</p>
              
              <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <FaVrCardboard className="text-primary text-2xl mx-auto mb-2" />
                  <span className="text-sm font-medium">VR Immersion</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <FaLanguage className="text-primary text-2xl mx-auto mb-2" />
                  <span className="text-sm font-medium">AI Translation</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <FaGlobeEurope className="text-primary text-2xl mx-auto mb-2" />
                  <span className="text-sm font-medium">Cultural Heritage</span>
                </div>
              </div>
              
              <div className="mt-auto">
                <Link to={`/products/${featuredProduct.id}`} className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 flex items-center justify-center p-8">
              <div className="rounded-lg overflow-hidden shadow-md w-full">
                <div className="aspect-video relative bg-primary/10 flex items-center justify-center">
                  <img 
                    src={featuredProduct.imageUrl || "/images/products/default-product.jpg"}
                    alt={featuredProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent flex items-end justify-center p-6">
                    <div className="text-white text-center">
                      <p className="font-medium">Text Recognition and Translation of Celtic Languages</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 text-sm text-gray-500">
                  A vision for Celtic language preservation and accessibility by {featuredProduct.teamMembers?.join(', ')}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProduct;