import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {BiDownArrow, BiGasPump} from 'react-icons/bi'

const AccordionItem = ({ id, title, subtitle, date, description, expanded, setExpanded}) => {
  const isOpen = id === expanded;


  return (
    <>
      <motion.header
        initial={true}
        animate={{ backgroundColor: isOpen ? "#1e293b" : "#1e293b", color: isOpen ? "#818cf8" : "#cbd5e1", borderColor: isOpen ? "#818cf8" : "#cbd5e1" }}
        onClick={() => {
          if (id === expanded) {
            setExpanded(null);
          } else {
            setExpanded(id); 
          }
        }}
        className="h-12 flex items-center justify-center border border-x-0 border-t-0 text-3xl cursor-pointer transition-colors duration-200"
        transition={{ duration: 0.3}}
      >
        <div className="flex justify-between w-full mx-3">
          <div>
           <h1 className="text-3xl font-bold inline">{title}</h1>
           <h2 className={"text-xl inline ms-3 italic"}>{subtitle}</h2>
           
          </div>
          <div className="flex">
            <div className="flex flex-col justify-end">
              <h2 className="text-xl ">{date}</h2>
            </div>
            <div className="ms-3 flex flex-col justify-end">
              <BiDownArrow className={isOpen ? "rotate-0 transition-transform duration-[600ms] text-teal-200" : "-rotate-90 transition-transform duration-[600ms] text-indigo-300"}/>
            </div>
          </div>

          
        </div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: .7, ease: [0.5, 0.1, 0.1, 0.98] }}
          >
            <div className="text-slate-300 ms-10">
              <ul className="">
                {description.map((item) => (
                  
                  <li className="text-xl leading-relaxed"> - {item}</li>
                ))}

              </ul>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default function Accordion({ experiences }) {
  const [expanded, setExpanded] = useState(-1);

  return experiences.map((exp) => (
    <div className="my-5 ">
      <AccordionItem id={exp.id} title={exp.title} subtitle={exp.subtitle} date={exp.date} description={exp.description} expanded={expanded} setExpanded={setExpanded} />
    </div>
  ));
};


