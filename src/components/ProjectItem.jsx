const ProjectItem = ({ title, description, url }) => {
  return (
    <div className="mb-6 mx-auto" style={{ maxWidth: "75%" }}>
      
      <h2 className="text-white text-3xl mt-20 mb-5 text-center">
        {title}
        </h2>

      <p className="text-white text-lg mb-5 text-center">
        {description.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        </p>



      <div className="flex justify-center">
        <a className="text-white text-center text-lg underline" href={url} target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      </div>

    </div>
  );
};

export default ProjectItem;
