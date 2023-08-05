import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar(props) {
  return (
    <nav className="bg-slate-800 fixed top-0 left-0 right-0 h-20 text-slate-200">
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Left side  */}
        <div className="pl-0">
        <img
            src="/Logo.png"
            alt="Logo"
            className="w-auto ml-0 justify-start"
            style={{ height: '55px' }} // Set the desired height for the logo using inline style
          />
        </div>

        {/* Right side - Navigation Links */}
        <div className="font-mono flex items justify-items-end space-x-3 pr-0 ml-auto">
          <NavItem currentPage={props.page} keyVal={0} handleClick={props.handleClick}>Home</NavItem>
          <NavItem currentPage={props.page} keyVal={1} handleClick={props.handleClick}>Experience</NavItem>
          <NavItem currentPage={props.page} keyVal={3} handleClick={props.handleClick}>Projects</NavItem>
          <NavItem currentPage={props.page} keyVal={4} handleClick={props.handleClick}>Contact</NavItem>
          {/* Resume Link */}
          {/* Resume Link with Hover Animation */}
          <motion.a
            className="text-xl font-mono cursor-pointer py-4 px-8 border border-stone-200 rounded-lg hover:border-indigo-300 hover:text-indigo-300 text-stone-200"
            href="https://drive.google.com/file/d/1pNg7y76ex9Ybzati5BkxwADTd1bqk5Xd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 0.95, y: 0}}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Resume
          </motion.a>

        </div>
      </div>
    </nav>
  );
}

function NavItem(props) {
  let styling = "text-xl font-medium cursor-pointer py-4 px-8 border-b-4 border-transparent";
  if (props.keyVal === props.currentPage) {
    styling += " border-indigo-300 text-indigo-300";
  } else {
    styling += " hover:border-indigo-300 hover:text-indigo-300";
  }

  return (
    <motion.div
      className={styling}
      whileHover={{ scale: 0.95, y: 0 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => { if (props.keyVal !== props.currentPage) { props.handleClick(props.keyVal) } }}
    >
      {props.children}
    </motion.div>
  );
}
