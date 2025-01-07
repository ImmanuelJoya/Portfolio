import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from '../components/ParticlesBackground';
import SkillsSection from '../components/SkillsSection';

const Home = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>
        
        <div className="max-w-7xl mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm Immanuel
            </motion.h1>
            
            <motion.div
              className="text-2xl md:text-3xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I create beautiful, responsive, and user-friendly web applications
              using modern technologies and best practices.
            </motion.p>

            <motion.div
              className="flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="https://github.com/ImmanuelJoya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-500 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/immanuel-joy-178b66294/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-500 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:immanueljoy107@gmail.com"
                className="text-3xl hover:text-blue-500 transition-colors"
              >
                <FaEnvelope />
              </a>
            </motion.div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300"
              >
                View My Work
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SkillsSection />
    </>
  );
};

export default Home;
