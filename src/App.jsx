import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar.jsx'
import ClearAnimation from './components/FlyAnimation.jsx'
import Home from './pages/Home.jsx'
import Experience from './pages/Experience.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Sidebar from './components/Sidebar.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import { ThemeProvider } from './context/ThemeContext'
import { initGA, trackPageView } from './utils/analytics'

function App() {
  const [page, setPage] = useState(0)
  const [animationActive, setAnimationActive] = useState(false)

  // Initialize GA4
  useEffect(() => {
    initGA();
    trackPageView(window.location.pathname);
  }, []);

  // Track page changes
  useEffect(() => {
    const pageNames = ['Home', 'Experience', 'Projects', 'Projects', 'Contact'];
    trackPageView(`/${pageNames[page]}`);
  }, [page]);

  const handlePageChange = (keyVal) => {
    setAnimationActive(true)
    
    setTimeout(() => {
      setPage(keyVal)
    }, 500)

    setTimeout(() => {
      setAnimationActive(false)
    }, 1200)
  }

  const myRef = useRef(null);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className='grid grid-cols-5'>
          <Sidebar />

          <div className='col-span-4 relative' ref={myRef}>
            {animationActive && <ClearAnimation />}

            {(() => {
              switch (page) {
                case 0:
                  return <Home />
                case 1:
                  return <Experience />
                case 2:
                  return <Projects />
                case 3:
                  return <Projects />
                case 4:
                  return <Contact />
              }
            })()}
          </div>
          
          <Navbar page={page} handleClick={handlePageChange} />
        </div>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  )
}

export default App
