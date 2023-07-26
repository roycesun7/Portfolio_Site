import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Accordion from "../components/Accordion";

export default function Experience() {
    let experiences = [
      {
        id: 0,
        title: "LightBeam.ai",
        subtitle: "AI/ML Engineer - Internship",
        date: "May 2023 - August 2023",
        description: [
          "Implemented Microsoft’s Presidio SDK together with GPT-3 to autonomously analyze and anonymize personal identifiable information (PII) to protect client data",
          "Managed firm's machine learning repository and contributed 500+ high-quality topic-based images for model training data by leveraging search engine scraping methodologies and data version control for Git (dvc)",
          "Led ML dev team in designing efficient and scalable web scraping program (Python) to help firm train machine learning model for data categorization in privacy"
        ]
      },

      {
        id: 1,
        title: "Pallacanestro Trieste",
        subtitle: "Data Analytics Consultant",
        date: "June 2023 - August 2023",
        description: [
          "Leveraged data tools in Python to scrape, merge, and analyze LBA player data for Italian professional basketball team Trieste",
          "Guided project team in designing and implementing a robust ELO strength measurement system + MA individualized player ranking model, customizing a novel data-driven player hiring strategy that maximized performance and competitiveness",
          "Collaborated with team general manager and ownership weekly to communicate updates and directly influence player signings for enhanced team performance success"
        ]
      },

      {
        id: 2,
        title: "Linguistics Data Consortium",
        subtitle: "Analyst",
        date: "December 2022 - Present",
        description: [
          "Quantitatively analyzed speech patterns of patients with neurodegenerative disorders for a biomedical research initiative",
          "Utilized transcription software to combine/transcribe high-volume audio files and analyze case patient data "
        ]
      },

      {
        id: 3,
        title: "Sierra Project Foundation",
        subtitle: "Director of Web Operations",
        date: "August 2022 - August 2022",
        description: [
          "Managed the official website, implementing periodic updates to layout, coloring, and digital design based on outreach objective",
          "Collaborated with a diverse team of college students as technical lead to publish international outreach efforts, fostering global health education and awareness"
        ]
      },

      {
        id: 4,
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
      <div className="h-screen bg-slate-700 relative w-screen pt-20">
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