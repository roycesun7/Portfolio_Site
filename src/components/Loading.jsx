import React, { useEffect, useState } from 'react';

const Loading = ({ finishLoading }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      finishLoading();
    }, 1000); // Set the duration to 1 second (1000 milliseconds)

    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#fff' }}>
      {/* Optionally, you can add a loading message or spinner here */}
    </div>
  );
};

export default Loading;
