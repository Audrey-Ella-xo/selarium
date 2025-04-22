// src/pages/Team.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { teamMembers } from '../data/teamData';

const Team = () => {
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
            Meet Our Team
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The talented students behind our products and vision
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square bg-gray-200">
                  <img
                    src={member.imageUrl || `/images/team/default-avatar.jpg`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="flex space-x-4">
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {member.linkedIn && (
                      <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                        <FaLinkedin size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Work Together</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our collaborative approach to building great products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Process</h3>
              <ol className="space-y-6">
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</span>
                  <div>
                    <h4 className="font-bold mb-2">Ideation & Research</h4>
                    <p className="text-gray-700">We start by identifying problems worth solving and researching potential solutions.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</span>
                  <div>
                    <h4 className="font-bold mb-2">Planning & Design</h4>
                    <p className="text-gray-700">We map out features, create wireframes, and design the user experience.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</span>
                  <div>
                    <h4 className="font-bold mb-2">Development & Testing</h4>
                    <p className="text-gray-700">Our team builds the product while continuously testing for quality and usability.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">4</span>
                  <div>
                    <h4 className="font-bold mb-2">Launch & Iteration</h4>
                    <p className="text-gray-700">We release our products and continuously improve based on feedback.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Skills</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Web Development</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Mobile Development</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">UX/UI Design</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Database Management</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">DevOps & Deployment</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;