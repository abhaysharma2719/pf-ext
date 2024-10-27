// src/popup.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use this for React 18

// Define your Home component
const Home = () => {
    return (
        <div className='p-5 bg-slate-800'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
        </div>
    );
};


// Render the Home componentclear
const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure your HTML has an element with id 'root'
root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);
