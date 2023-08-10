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
    <div className="bg-slate-800 min-h-screen text-white flex flex-col justify-center w-screen">
      <div style={containerStyles}>
        <div style={contentStyles}>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
          >
            <h1 className="font-mono text-slate-400 text-left">Hi! I'm</h1>
          </motion.div>

          <motion.div
            className="flex items-start text-center mb-7" // Align text at the top
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-slate-400 text-[20vh] flex items-center">
              Royce Sun
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.75 }}
          >
            <h2 className="text-indigo-200 text-4xl leading-tight text-right">
              Computer Science and Economics
            </h2>
            <h2 className="text-indigo-200 text-4xl leading-tight text-right">
              University of Pennsylvania
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
