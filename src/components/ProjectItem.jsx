import React from 'react';

const ProjectItem = ({ title, description, url, image, imagePosition, icons }) => {
  const imageOnLeft = imagePosition === 'left';
  const imageOnRight = imagePosition === 'right';

  const projectContainerStyles = {
    width: '80%', // Set the container width to 75% of the screen
    margin: '0 auto', // Center the container horizontally
  };

  const projectCardStyles = {
    backgroundColor: '#023868',
    borderRadius: '10px',
    color: 'white',
    padding: '1em',
    marginBottom: '1em',
    transition: '0.2s',
  };

  const projectTitleStyles = {
    margin: '0',
  };

  const projectLinkStyles = {
    marginLeft: '1em',
  };

  const projectImgStyles = {
    borderRadius: '10px',
    width: '100%', // Standardize the image width
    height: '200px', // Set the image height
  };

  return (
    <div style={projectContainerStyles}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        {imageOnLeft && (
          <div style={{ width: '100%', flex: '1 1 50%', order: '2', marginBottom: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <img src={image} alt={title} style={{ ...projectImgStyles, width: '100%', height: 'auto' }} />
            </div>
          </div>
        )}

        <div style={{ width: '100%', flex: '1 1 50%', padding: '1rem', ...projectCardStyles }}>
          <h2 style={{ fontSize: '1.875rem', marginBottom: '1rem', textAlign: 'center', ...projectTitleStyles }}>
            {title}
          </h2>
          <div style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
            {description.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          {icons && <div>{icons}</div>}
        </div>

        {imageOnRight && (
          <div style={{ width: '100%', flex: '1 1 50%', order: '1', marginBottom: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <img src={image} alt={title} style={{ ...projectImgStyles, width: '100%', height: 'auto' }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
