// src/popup.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use this for React 18

// Define your Home component
const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page</p>
        </div>
    );
};

// Render the Home component
const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure your HTML has an element with id 'root'
root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);
