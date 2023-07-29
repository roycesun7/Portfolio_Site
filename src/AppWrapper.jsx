import React, { useState, useEffect } from 'react';
import App from './App'; // Import the main App component
import Loading from './components/Loading'; // Import the Loading component

function AppWrapper() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Replace this setTimeout with any async operation (e.g., data fetching) that you want to perform before showing the main content of the app.
    setTimeout(() => setIsLoading(false), 2000); // Set isLoading to false after the initial loading
  }, []);

  return (
    <>
      {isLoading ? (
        // Show the Loading component during the initial loading
        <Loading finishLoading={() => setIsLoading(false)} />
      ) : (
        // Once isLoading is false, render the main App component
        <App />
      )}
    </>
  );
}

export default AppWrapper;
