import React from "react";
import ProjectItem from "../components/ProjectItem";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Crash Detection",
    description: ["This is the description of Project 1."],
    url: "https://example.com/project1",
  },

  {
    id: 2,
    title: "Project 2",
    description: ["This is the description of Project 2."],
    url: "https://example.com/project2",
  },

  {
    id: 3,
    title: "Rubi",
    description: ["Designed a website to connect charitable organizations to restaurants to claim extra food at the end of the day",
    "Built using HTML/CSS/JS in conjunction with Bootstrap and JQuery and won third overall at MontyHacks V"],
    url: "https://example.com/project2",
  },

  {
    id: 4,
    title: "Project 4",
    description: ["This is the description of Project 4."],
    url: "https://example.com/project2",
  },



];

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-700 relative w-screen pt-20 overflow-y-auto">
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
          />
        ))}

    </div>
  );
}

