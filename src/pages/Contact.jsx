import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="h-screen bg-slate-800 relative w-screen pt-20">
      <div className="flex flex-col h-3/5 justify-center">
        <div className="flex flex-col items-center space-y-4">

        <div style={{ margin: "20px" }}></div>

        <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-teal-400 to-teal-500 text-center mb-7 pt-24 mt-5">Get in Touch</h1>

        <div style={{ margin: "14px" }}></div>

        <div className="flex justify-center text-center">
        <p className="text-slate-300 text-xl max-w-3xl px-4">
          Feel free to reach out to me through any of the contact points linked below:
        </p>
      </div>

      <div style={{ margin: "14px" }}></div>

          <motion.div
            className="flex items-center p-4 bg-slate-700/20 backdrop-blur-sm rounded-lg border border-teal-400/20 hover:border-teal-400/50 transition-all duration-300"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <AiFillGithub className="text-teal-400 text-4xl me-3" />
            <a className="group text-slate-200 text-2xl cursor-pointer transition-all duration-500" href="https://github.com/roycesun7">
              github.com/roycesun7
              <span className="block max-w-0 ms-[50%] group-hover:ms-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-teal-400"></span>
            </a>
          </motion.div>

          <motion.div
            className="flex items-center p-4 bg-slate-700/20 backdrop-blur-sm rounded-lg border border-teal-400/20 hover:border-teal-400/50 transition-all duration-300"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.75 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <AiFillLinkedin className="text-teal-400 text-4xl me-3" />
            <a className="group text-slate-200 text-2xl cursor-pointer transition-all duration-500" href="https://www.linkedin.com/in/royce-sun/">
              linkedin.com/roycesun
              <span className="block max-w-0 ms-[50%] group-hover:ms-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-teal-400"></span>
            </a>
          </motion.div>

          <motion.div
            className="flex items-center p-4 bg-slate-700/20 backdrop-blur-sm rounded-lg border border-teal-400/20 hover:border-teal-400/50 transition-all duration-300"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <AiFillMail className="text-teal-400 text-4xl me-3" />
            <a className="group text-slate-200 text-2xl cursor-pointer transition-all duration-500" href="mailto:roycesun@sas.upenn.edu">
              roycesun@sas.upenn.edu
              <span className="block max-w-0 ms-[50%] group-hover:ms-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-teal-400"></span>
            </a>
          </motion.div>

          <motion.div
            className="flex items-center p-4 bg-slate-700/20 backdrop-blur-sm rounded-lg border border-teal-400/20 hover:border-teal-400/50 transition-all duration-300"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.25 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <AiFillMail className="text-teal-400 text-4xl me-3" />
            <a className="group text-slate-200 text-2xl cursor-pointer transition-all duration-500" href="mailto:roycesun7@gmail.com">
              roycesun7@gmail.com
              <span className="block max-w-0 ms-[50%] group-hover:ms-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-teal-400"></span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
