import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCode, FaDatabase, FaRobot, FaChartLine, FaBrain, FaMicroscope, FaGlobe, FaServer, FaPython, FaReact, FaAws } from 'react-icons/fa';
import { SiSnowflake, SiTableau, SiTerraform, SiSelenium } from 'react-icons/si';

const getExperienceIcons = (title, description) => {
  const icons = [];
  
  // Add icons based on company/role
  if (title.toLowerCase().includes('pattern')) {
    icons.push(<FaDatabase key="db" className="text-blue-400" />);
    icons.push(<SiSnowflake key="snow" className="text-blue-500" />);
    icons.push(<FaReact key="react" className="text-blue-300" />);
    icons.push(<SiTerraform key="tf" className="text-purple-400" />);
  }
  if (title.toLowerCase().includes('opsarmy')) {
    icons.push(<FaPython key="py" className="text-yellow-400" />);
    icons.push(<SiSelenium key="sel" className="text-green-400" />);
    icons.push(<FaRobot key="ai" className="text-pink-400" />);
  }
  if (title.toLowerCase().includes('lightbeam')) {
    icons.push(<FaAws key="aws" className="text-orange-400" />);
    icons.push(<FaRobot key="ml" className="text-pink-400" />);
  }
  if (title.toLowerCase().includes('wharton')) {
    icons.push(<FaChartLine key="chart" className="text-green-400" />);
    icons.push(<FaPython key="py" className="text-yellow-400" />);
  }
  if (title.toLowerCase().includes('linguistics')) {
    icons.push(<FaBrain key="brain" className="text-purple-400" />);
    icons.push(<FaMicroscope key="micro" className="text-blue-400" />);
  }
  if (title.toLowerCase().includes('sierra')) {
    icons.push(<FaGlobe key="web" className="text-blue-400" />);
  }
  if (title.toLowerCase().includes('medicine')) {
    icons.push(<FaBrain key="brain" className="text-purple-400" />);
    icons.push(<FaPython key="py" className="text-yellow-400" />);
  }

  return icons;
};

export default function Experience() {
    const [activeTab, setActiveTab] = useState('all');
    
    const experiences = [
      {
        id: 7,
        title: "Ramp",
        subtitle: "Software Engineering Intern",
        date: "May 2025 - Aug 2025",
        type: "work",
        description: [
          "coming soon..."
        ]
      },
      {
        id: 8,
        title: "Amazon",
        subtitle: "Software Engineering Intern",
        date: "Sep 2025 - Dec 2025",
        type: "work",
        description: [
          "coming soon..."
        ]
      },
      {
        id: 6,
        title: "Pattern",
        subtitle: "Software Engineering Intern",
        date: "May 2024 - Aug 2024",
        type: "work",
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
        type: "work",
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
        date: "May 2023 - Aug 2023",
        type: "work",
        description: [
          "Maintained firm's ML data repository using Git and AWS S3. Doubled the size of model training database by leveraging multi-threaded search engine crawling & cloud data version control (dvc)",
          "Designed scalable integration testing for model infrastructure updates, implemented Slackbot functionality to relay real-time errors in CI checks, reducing manual debugging time by 20%", 
          "Implemented Microsoft's Presidio SDK together with GPT-3 to autonomously analyze and anonymize personal identifiable information (PII) to protect client data"
        ]
      },
      {
        id: 2,
        title: "Wharton Analytics Fellows",
        subtitle: "Data Science Intern",
        date: "June 2023 - Aug 2023",
        type: "work",
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
        date: "Jan 2023 - June 2023",
        type: "research",
        description: [
          "Quantitatively analyzed speech patterns of patients with neurodegenerative disorders for a biomedical research initiative",
          "Utilized transcription software to combine/transcribe high-volume audio files and analyze case patient data"
        ]
      },
      {
        id: 4,
        title: "Sierra Project Foundation",
        subtitle: "Director of Web Operations",
        date: "Aug 2022 - Aug 2023",
        type: "work",
        description: [
          "Managed official website, implementing periodic updates to layout, coloring, and digital design based on outreach objective",
          "Facilitated communication and outreach with various organizations, raised 3k+ in sponsorship funding and attracted 10+ large scale clients"
        ]
      },
      {
        id: 5,
        title: "IU School of Medicine",
        subtitle: "Computational Researcher",
        date: "June 2022 - Jan 2022",
        type: "research",
        description: [
          "Modified and implemented NLSAM algorithm in Python for image denoising of diffusion-weighted MRI multi-shell brain scans",
          "Collaborated with research team to produce analysis of Alzheimer's diseased brains"
        ]
      },
    ];

    const filteredExperiences = experiences.filter(exp => 
      activeTab === 'all' || exp.type === activeTab
    );

    return (
      <div className="min-h-screen bg-slate-800 relative w-screen pt-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-100 via-indigo-400 to-indigo-600 text-center py-5 px-7 rounded-br-xl mb-7 mt-3">Experience</h1>
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === 'all'
                    ? 'bg-indigo-300 text-slate-800'
                    : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab('work')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === 'work'
                    ? 'bg-indigo-300 text-slate-800'
                    : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                }`}
              >
                <FaBriefcase className="inline mr-2" />
                Work
              </button>
              <button
                onClick={() => setActiveTab('research')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === 'research'
                    ? 'bg-indigo-300 text-slate-800'
                    : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                }`}
              >
                <FaGraduationCap className="inline mr-2" />
                Research
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <AnimatePresence mode="wait">
              {filteredExperiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-700/70 transition-colors duration-300"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-200">{exp.title}</h2>
                      <h3 className="text-xl text-indigo-300">{exp.subtitle}</h3>
                      <div className="flex space-x-3 mt-2">
                        {getExperienceIcons(exp.title, exp.description).map((icon, index) => (
                          <motion.div
                            key={index}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-2xl"
                          >
                            {icon}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <span className="text-slate-400">{exp.date}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="text-slate-300 flex items-start"
                      >
                        <span className="text-indigo-300 mr-2">•</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    );
}