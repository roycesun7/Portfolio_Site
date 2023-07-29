import React from 'react';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-slate-800 min-h-screen text-white flex flex-col items-center justify-center w-screen">
      <motion.div className="pt-8 flex"
        initial={{ opacity: 0 , y: -100}}
        animate={{ opacity: 1 , y: 0}}
        transition={{duration: 1, delay: .25}}>
          <h1 className="font-mono text-slate-400">Hi! I'm</h1>
        </motion.div>


      <motion.div className="ms-15 pt-5 mb-7 text-center"
        initial={{ opacity: 0 , y: -100}}
        animate={{ opacity: 1 , y: 0}}
        transition={{duration: 1, delay: .5}}>
          <h1 className="text-slate-400 text-[20vh] flex text-left">Royce Sun</h1>
        </motion.div>
        
        <div className="flex ms-24 pb-20 justify-center text-center">
          <motion.div className=""
          initial={{ opacity: 0 , x: -100}}
          animate={{ opacity: 1 , x: 0}}
          transition={{duration: 1, delay: .75}}>
            <h2 className="text-black text-4xl leading-tight">Computer Science and Economics</h2>
            <h2 className="text-black text-4xl leading-tight">University of Pennsylvania</h2>
          </motion.div>

        </div>
    </div>
  );
};

export default Home;
