import React from "react";
import ProjectItem from "../components/ProjectItem";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Crash Detection",
    description: ["Selected as one of 35 to compete and placed top 5 in Point72’s inaugural datathon based on holistic achievement and potential for success in programming + data analytics/solutions ",
  "Compiled, analyzed, and visualized feature information from multiple NYC borough datasets using Python data libraries",
"Analyzed processed data and insights by EDA + utilized gradient boosting machine learning to predict crash danger by borough area with longitude/latitude location groups"],
    url: "https://example.com/project1",
    image: "https://i.imgur.com/8Z1zZ1I.png",
    imagePosition: "left",
  },

  {
    id: 2,
    title: "Tumor Classification",
    description: ["Authored individual research paper on tumor malignancy classification based on 9 million+ patients and 70+ features", 
  " Produced data-driven conclusions w/ inferential statistics model by compiling, analyzing, and visualizing data with R, trained logistic regression machine learning model in Python"],
    url: "https://drive.google.com/file/d/1V8RwfApH2Xi4wmXkyZuxeLB9lmvdklou/view?usp=sharing",
    image: "https://i.imgur.com/8Z1zZ1I.png",
    imagePosition: "right",
  },

  {
    id: 3,
    title: "Rubi",
    description: ["Designed a website to connect charitable organizations to restaurants to claim extra food at the end of the day",
    "Built using HTML/CSS/JS in conjunction with Bootstrap and JQuery and won third overall at MontyHacks V"],
    url: "https://benoy515.github.io/Rubi/",
    image: "https://i.imgur.com/8Z1zZ1I.png",
    imagePosition: "left",
  },

  {
    id: 4,
    title: "Rocket Website",
    description: ["Built website concept for Montgomery Rocketry Team",
    "created with React and TailwindCSS"], 
    url: "https://example.com/project2",
    image: "https://i.imgur.com/8Z1zZ1I.png",
    imagePosition: "left",
  },

  {
    id: 5,
    title: "AI Face Detection",
    description: [""],
    url: "https://example.com/project2",
    image: "https://i.imgur.com/8Z1zZ1I.png",
    imagePosition: "right",
  },




];

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-800 relative w-screen pt-20 overflow-y-auto">
      <div className="justify-center flex">
        <h1 className="text-white text-center text-7xl py-5 px-7 rounded-br-xl">Project Gallery</h1>
      </div>

        {/* Map through the projects array and render each project */}
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            description={project.description}
            url={project.url}
            image={project.image}
            imagePosition={project.imagePosition}
          />
        ))}

    </div>
  );
}

