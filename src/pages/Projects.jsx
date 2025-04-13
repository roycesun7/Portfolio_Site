import React from "react";
import ProjectItem from "../components/ProjectItem";
import { FiGithub, FiLinkedin, FiMail} from 'react-icons/fi';
import {FaPython, FaReact} from 'react-icons/fa';
import {SiSquare, SiTailwindcss, SiJupyter, SiBootstrap, SiJquery, SiHtml5, SiPandas, SiNumpy, SiRstudio, SiPlotly, SiVite, SiScikitlearn, SiCss3, SiJavascript} from 'react-icons/si';
import {TbBrandZoom} from 'react-icons/tb';
import {SiStyledcomponents, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const projects = [

  {
    id: 1,
    title: "Square for Zoom",
    description: ["- Zoom App integrating Square payment on demand in-meeting",
    "- Built with Zoom Developer API, Square Payment Processing API, and Vite+React"], 
    url: "https://github.com/roycesun7/ZoomPaymentProcessor",
    image: "/SquareforZoom.png",
    icons: [
      <TbBrandZoom/>,
      <SiSquare/>,
      <FaReact/>,
      <SiTailwindcss/>,
    ],
  },

  {
    id: 2,
    title: "Tumor Classification",
    description: ["- Authored individual research paper on tumor malignancy classification based on 9 million+ patients and 70+ features", 
  "- Produced data-driven conclusions by compiling, analyzing, and visualizing data"],
    url2: "https://drive.google.com/file/d/1V8RwfApH2Xi4wmXkyZuxeLB9lmvdklou/view?usp=sharing",
    image: "https://www.dicomdirector.com/wp-content/uploads/2022/03/wire-frame-image-human-body-2120x1060.jpg",
    icons: [
      <FaPython/>,
      <SiJupyter/>,
      <SiRstudio/>,
      <SiPandas/>,
      <SiNumpy/>,
    ],
  },

  {
    id: 3,
    title: "Pet Gallery",
    description: ["- React app that displays images of pets from a custom pet API", 
  "- Made with React, Typescript, styled-components, and JSZip"],
    url: "https://github.com/roycesun7/pet-image-site/tree/main/pet-gallery",
    url2: "https://pet-image-site.vercel.app/", 
    image: "https://hips.hearstapps.com/hmg-prod/images/low-maintenance-pets-hamsters-in-hand-1643914343.jpg?crop=1.00xw:0.750xh;0,0.0577xh&resize=1200:*",
    icons: [
      <SiTypescript/>,
      <SiVite/>,
      <FaReact/>,
      <SiTailwindcss/>,
      <SiStyledcomponents/>,
    ],
  },

  {
    id: 4,
    title: "Rubi",
    description: ["- Designed a website to connect charitable organizations to restaurants to claim extra food at the end of the day",
    "- Built using HTML/CSS/JS in conjunction with Bootstrap and JQuery"],
    url2: "https://benoy515.github.io/Rubi/",
    image: "/Rubi.png",
    icons: [
      <SiBootstrap/>,
      <SiJquery/>,
      <SiJavascript/>,  
      <SiCss3/>,
    ],
  },

  {
    id: 5,
    title: "Crash Detection",
    description: ["- Compiled, analyzed, and visualized feature information from multiple NYC borough datasets",
    "- Analyzed processed data and insights by EDA, predicted crash danger by borough area"],
    url: "https://github.com/roycesun7/data-projects/blob/main/crash-detection.ipynb",
    image: "/vehicle.png",
    icons: [
      <FaPython/>,
      <SiScikitlearn/>,
      <SiPlotly/>,
      <SiJupyter/>,
    ],
  },



  {
    id: 6,
    title: "Rocket Website",
    description: ["- Built website concept for Montgomery Rocketry Team",
    "- Created with React and TailwindCSS"], 
    url: "https://github.com/roycesun7/rocket-site",
    url2: "https://rocket-site-beta.vercel.app/",
    image: "/rocketsite.png",
    icons: [
      <SiVite/>,
      <FaReact/>,
      <SiTailwindcss/>,
      <SiHtml5/>,

    ],
  }



];

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-800 relative w-screen pt-20 overflow-y-auto">
      <motion.div 
        className="justify-center flex"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-100 via-indigo-400 to-indigo-500 text-center py-5 px-7 rounded-br-xl mb-7 mt-3">
          Project Gallery
        </h1>
      </motion.div>

      <div className="space-y-8 pb-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <ProjectItem
              title={project.title}
              description={project.description}
              url={project.url}
              url2={project.url2}
              image={project.image}
              icons={project.icons}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

