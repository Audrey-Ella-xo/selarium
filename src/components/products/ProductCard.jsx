// src/components/products/ProductCard.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="aspect-video bg-gray-100 relative">
        <img
          src={product.imageUrl || "/images/products/default-product.jpg"}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
          {product.status}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.shortDescription}</p>
        <div className="mt-auto">
          <Link to={`/products/${product.id}`} className="btn btn-outline text-sm">
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;