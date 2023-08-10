import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';

const ProjectItem = ({ title, description, url, url2, image, icons }) => {
  const projectContainerStyles = {
    width: '80%',
    margin: '0 auto',
  };

  const projectCardStyles = {
    backgroundColor: '#17395F',
    borderRadius: '10px',
    padding: '1em',
    marginBottom: '1em',
    transition: '0.2s',
    position: 'relative',
  };

  const projectTitleStyles = {
    margin: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.5rem',
  };

  const linkButtonStyles = {
    fontSize: '0.875rem',
    color: '#fff',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '4px',
    background: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyles = {
    fontSize: '1.5rem',
    margin: '0 0.75rem',
    color: '#a5b4fc',
    "&:hover": {
      color: '#99f6e4', 
    }
  };

  const projectImgStyles = {
    borderRadius: '10px',
    width: '100%',
    height: '200px',
  };

  return (
    <div style={projectContainerStyles}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        {(
          <div style={{ width: '100%', flex: '1 1 50%', order: '2', marginBottom: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <img src={image} alt={title} style={{ ...projectImgStyles, width: '100%', height: 'auto' }} />
            </div>
          </div>
        )}

        <div style={{ width: '100%', flex: '1 1 50%', padding: '1rem', ...projectCardStyles }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>

            <div style={projectTitleStyles}>
            <h2 style={{ fontSize: '1.875rem', margin: '0', textAlign: 'center', fontWeight: 'bold' }}>
              {title}
            </h2>
            </div>

            <div style={{ display: 'flex' }}>
              {url && (
                <a href={url} style={linkButtonStyles} className="hover:text-teal-200">
                  <FaGithub style={iconStyles} />
                </a>
              )}
              {url2 && (
                <a href={url2} style={linkButtonStyles}>
                  <FaArrowUpRightFromSquare className="hover:text-teal-200" style={iconStyles} />
                </a>
              )}
            </div>
          </div>

          <div style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
            {description.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {icons && (
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '0.5rem' }}>
              {icons.map((icon, index) => (
                <span key={index} style={{ fontSize: '2rem', margin: '0 1rem', color: '#a5b4fc'}}>
                  {icon}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
