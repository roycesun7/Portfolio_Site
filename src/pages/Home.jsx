import React from 'react';
import { motion } from 'framer-motion';

const containerStyles = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
};

const contentStyles = {
  maxWidth: '63%',
};

const Home = () => {
  return (
    <div className="bg-slate-800 min-h-screen text-white flex flex-col justify-center w-screen relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-800/50"></div>

      <div style={containerStyles} className="relative z-10">
        <div style={contentStyles}>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="group"
          >
            <h1 className="font-mono text-slate-200 text-left text-4xl mb-2 hover:text-indigo-300 transition-colors duration-300">
              Hi! I'm
            </h1>
          </motion.div>

          <motion.div
            className="flex items-start text-center mb-7"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h1 className="text-slate-200 text-[20vh] flex items-center hover:text-indigo-300 transition-colors duration-300">
              Royce Sun
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="space-y-2"
          >
            <h2 className="text-slate-200 text-4xl leading-tight text-right hover:text-indigo-300 transition-colors duration-300">
              Computer Science and Economics
            </h2>
            <h2 className="text-slate-200 text-4xl leading-tight text-right hover:text-indigo-300 transition-colors duration-300">
              University of Pennsylvania
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-indigo-300/50 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.8 + 0.2,
            }}
            animate={{
              y: [null, Math.random() * 200 - 100],
              x: [null, Math.random() * 100 - 50],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
