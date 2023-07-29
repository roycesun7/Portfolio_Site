import React, { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed inset-y-1/3 left-0 bg-slate-900 h-1/4 flex flex-col items-center justify-center z-50 transition-all rounded-r-lg`}
      style={{ width: isHovered ? '4%' : '0%', transition: 'width 0.15s ease-in',} }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sidebar content */}
      {isHovered ? (
        <div className="flex flex-col items-center space-y-6">
          <a
            href="https://github.com/roycesun7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-indigo-400 hover:text-teal-200"
          >
            <FiGithub className="text-4xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/royce-sun/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-indigo-400 hover:text-teal-200"
          >
            <FiLinkedin className="text-4xl" />
          </a>
          <a
            href="mailto:roycesun@sas.upenn.edu"
            className="flex items-center space-x-2 text-indigo-400 hover:text-teal-200"
          >
            <FiMail className="text-4xl" />
          </a>
        </div>
      ) : (
        <div className="w-8 h-64 bg-slate-900 rounded-r-lg relative">
            <div className="absolute top-1/2 right-0 transform text-indigo-400 text-2xl mr-0"
            style={{
                transitionProperty: 'transform',
                transform: 'translateY(-50%) translateX(18.7%)',
              }}
            >
                <FaAngleRight />
            </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
