import React from 'react';
import { motion } from "framer-motion";

const projectContainerStyles = {
  width: '50%', 
  margin: '0 auto', 
};

const Home = () => {
  return (
    <div className="bg-slate-800 min-h-screen text-white flex flex-col justify-center w-screen">
    <div style = {projectContainerStyles}>
      <div className = "flexbox justify-end">
      <motion.div className="ml-3 pt-8"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: .25 }}>
        <h1 className="font-mono text-slate-400 text-left">Hi! I'm</h1>
      </motion.div>
      </div>

      <motion.div className="pt-5 mb-7 text-center"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: .5 }}>
        <h1 className="text-slate-400 text-[20vh] flex items-center justify-center">Royce Sun</h1>
      </motion.div>

      <div className="flex flex-col items-end mr-3">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: .75 }}
        >
          <h2 className="text-indigo-200 text-4xl leading-tight text-right">Computer Science and Economics</h2>
          <h2 className="text-indigo-200 text-4xl leading-tight text-right">University of Pennsylvania</h2>
        </motion.div>
      </div>




    </div>
    </div>
  );
};

export default Home;
