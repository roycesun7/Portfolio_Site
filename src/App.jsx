import React from 'react';
import './App.css'; // Import custom CSS file

const Home = () => {
  return (
    <>
        <h1 className="text-4xl mb-4">Welcome to My Website</h1>
        <p className="text-lg">
          This is a basic home screen of a Vite + React project with Tailwind CSS.
          Feel free to customize and build upon it!
        </p>
    </>
  );
};

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
