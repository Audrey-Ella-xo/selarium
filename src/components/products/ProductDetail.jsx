// src/components/products/ProductDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { products } from '../../data/productsData';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products" className="btn btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex text-sm">
              <li className="text-gray-500">
                <Link to="/" className="hover:text-primary">Home</Link>
              </li>
              <li className="mx-2 text-gray-500">/</li>
              <li className="text-gray-500">
                <Link to="/products" className="hover:text-primary">Products</Link>
              </li>
              <li className="mx-2 text-gray-500">/</li>
              <li className="text-primary font-medium">{product.name}</li>
            </ol>
          </nav>

          {/* Product Header */}
          <div className="flex flex-col md:flex-row items-start mb-12">
            <div className="md:w-2/3 pr-0 md:pr-8 mb-6 md:mb-0">
              <div className="inline-block px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium mb-4">
                {product.status}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-xl text-gray-600 mb-6">{product.tagline}</p>
              <p className="text-gray-700">{product.longDescription}</p>
            </div>
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={product.imageUrl || "/images/products/default-product.jpg"}
                  alt={product.name}
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {product.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Product Links</h2>
            <div className="flex flex-wrap gap-4">
              {product.links.website && (
                <a 
                  href={product.links.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary flex items-center"
                >
                  <FaGlobe className="mr-2" /> Visit Website
                </a>
              )}
              {product.links.github && (
                <a 
                  href={product.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline flex items-center"
                >
                  <FaGithub className="mr-2" /> View on GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;