import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Accordion from "../components/Accordion";

export default function Experience() {
    let experiences = [
      {
        id: 6,
        title: "Pattern",
        subtitle: "Software Engineering Intern",
        date: "May 2024 - August 2024",
        description: [
          "Implemented custom scheduled and event-triggered table updates using Apache Airflow and ActiveRecord ORM, improving query response runtime by 30% and optimizing database storage by 15M rows", 
          "Engineered algorithms to generate 5 new out-of-stock classifier metrics using SQL in Snowflake. Integrated derived insights/visualizations into multipurpose dashboard, reducing total inventory out-of-stock rate by 55%", 
          "Migrated purchase orders data display and filter capabilities from Tableau over to centralized internal software using React/Node and PostgreSQL, provisioning infrastructure on AWS with Terraform"
        ]
      },
      {
        id: 0,
        title: "OpsArmy",
        subtitle: "Technical Product Management Intern",
        date: "Jan 2024 - March 2024",
        description: [
          "Spearheaded product spec, development, and MVP of a client web portal, enhancing engagement by 70% after introducing portal usage with performance tracking, interactive data display, and user feedback features", 
          "Led design and execution of global compensation analysis tool to aggregate pay data, empowering strategic decision-making in talent acquisition by developing web scrapers in Python with libraries bs4 and Selenium", 
          "Pioneered conception and market research outline for novel AI HR assistant, leveraging interview insights + performance metrics to create a multifaceted chatbot for talent prep, AI-powered leadership, and performance assessment"
        ]
      },

      {
        id: 1,
        title: "LightBeam.ai",
        subtitle: "Software Engineering Intern",
        date: "May 2023 - August 2023",
        description: [
          "Maintained firm's ML data repository using Git and AWS S3. Doubled the size of model training database by leveraging multi-threaded search engine crawling & cloud data version control (dvc)",
          "Designed scalable integration testing for model infrastructure updates, implemented Slackbot functionality to relay real-time errors in CI checks, reducing manual debugging time by 20%", 
          "Implemented Microsoft’s Presidio SDK together with GPT-3 to autonomously analyze and anonymize personal identifiable information (PII) to protect client data"
        ]
      },

      {
        id: 2,
        title: "Wharton Analytics Fellows",
        subtitle: "Data Science Intern",
        date: "June 2023 - August 2023",
        description: [
          "Leveraged data tools in Python to scrape, merge, and analyze LBA player data for Italian professional basketball team Trieste",
          "Guided project team in designing and implementing a robust ELO strength measurement system + MA individualized player ranking model, customizing a novel data-driven player hiring strategy that maximized performance and competitiveness",
          "Collaborated with team general manager and ownership weekly to communicate updates and directly influence player signings for enhanced team performance success"
        ]
      },

      {
        id: 3,
        title: "Linguistics Data Consortium",
        subtitle: "Analyst",
        date: "January 2023 - June 2023",
        description: [
          "Quantitatively analyzed speech patterns of patients with neurodegenerative disorders for a biomedical research initiative",
          "Utilized transcription software to combine/transcribe high-volume audio files and analyze case patient data "
        ]
      },

      {
        id: 4,
        title: "Sierra Project Foundation",
        subtitle: "Director of Web Operations",
        date: "August 2022 - August 2022",
        description: [
          "Managed official website, implementing periodic updates to layout, coloring, and digital design based on outreach objective",
          "Facilitated communication and outreach with various organizations, raised 3k+ in sponsorship funding and attracted 10+ large scale clients"
        ]
      },

      {
        id: 5,
        title: "IU School of Medicine",
        subtitle: "Computational Researcher",
        date: "June 2022 - January 2022",
        description: [
          "Modified and implemented NLSAM algorithm in Python for image denoising of diffusion-weighted MRI multi-shell brain scans",
          "Collaborated with research team to produce analysis of Alzheimer’s diseased brains"
        ]
      },

    ]

    return (
      <div className="h-screen bg-slate-800 relative w-screen pt-20">
      <div className="flex justify-center mt-10">


        <motion.div
          className="w-4/5"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
 
          <div className="max-h-screen overflow-y-auto">
            <Accordion experiences={experiences} />
          </div>
        </motion.div>
      </div>
    </div>
  );
    
  }