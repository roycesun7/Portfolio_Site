import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-gray-700 min-h-screen text-white flex flex-col items-center justify-center w-screen">
      <motion.div className="ms-24 pt-16"
        initial={{ opacity: 0 , y: -100}}
        animate={{ opacity: 1 , y: 0}}
        transition={{duration: 1, delay: .5}}>
          <h1 className="text-white text-[20vh] leading-tight">Hi! I'm</h1>
          <h1 className="text-white text-[20vh] leading-tight"><span className="bg-white text-black">Royce</span>Sun</h1>
        </motion.div>
        
        <div className="flex ms-24 pb-24 justify-between">
          <motion.div className=""
          initial={{ opacity: 0 , x: -100}}
          animate={{ opacity: 1 , x: 0}}
          transition={{duration: 1, delay: .75}}>
            <h2 className="text-white text-4xl leading-tight">Computer Science and Economics</h2>
            <h2 className="text-black bg-white text-4xl leading-tight">University of Pennsylvania</h2>
          </motion.div>

          <motion.div className="pe-24"
          initial={{ opacity: 0 , y: 50}}
          animate={{ opacity: 1 , y: 0}}
          transition={{duration: 1, delay: 1}}>
            <h2 className="text-black text-4xl leading-tight">`</h2>
            <a className="group text-white text-4xl leading-tight cursor-pointer transition-all duration-500" href='https://docs.google.com/https://drive.google.com/file/d/16S6Mnaafq6iRdWQTdA9savBWKwaY4EnU/view?usp=sharing/d/1iUWpMailgWAQKRwgoi7CxSIGNnm7nFP6MwUbPFbmc-g/edit?usp=sharing'>My Resume<span><BsArrowUpRight className='inline'/></span><span className='block max-w-0 ms-[50%] group-hover:max-w-full group-hover:ms-0 transition-all duration-300 h-0.5 bg-white'></span></a>
          </motion.div>
        </div>
    </div>
  );
};

export default Home;
