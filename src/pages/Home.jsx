// src/pages/Home.jsx
import Hero from '../components/home/Hero';
import FeaturedProduct from '../components/home/FeaturedProduct';
import TeamPreview from '../components/home/TeamPreview';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProduct />
      <TeamPreview />
    </div>
  );
};

export default Home;