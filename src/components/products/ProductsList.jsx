// src/components/products/ProductsList.jsx
import { products } from '../../data/productsData';
import ProductCard from './ProductCard';

const ProductsList = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">No products available yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsList;