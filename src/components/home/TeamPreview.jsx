// src/components/home/TeamPreview.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { teamMembers } from '../../data/teamData';

const TeamPreview = () => {
  // Show only 3 team members in the preview
  const previewMembers = teamMembers.slice(0, 3);

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a group of passionate NCI students turning our education into innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-gray-200 relative">
                <img
                  src={member.imageUrl || `/images/team/default-avatar.jpg`}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/team" className="btn btn-outline">
            View Full Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;