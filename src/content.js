// src/popup.js

import React from 'react';
import ReactDOM from 'react-dom/client';

const SELECTOR_DIV = 'pf-vast';
// Define your Content component
const Content = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page</p>
        </div>
    );
};

// Main function to initialize the popup
(function () {
    'use strict';

    // Create and append the root div if it doesn't exist
    let rootDiv = document.getElementById('root');
    if (!rootDiv) {
        rootDiv = document.createElement('div');
        rootDiv.id = 'root';
        document.body.appendChild(rootDiv);
    }

    // Create a style element
    const style = document.createElement('style');
    style.innerHTML = `
        div[id^="${SELECTOR_DIV}"] {
            position: relative; /* Required for positioning pseudo-elements */
            border: 2px solid red; /* Red border around divs with IDs starting with 'pf-vast' */
            padding: 8px; /* Optional: Adds space for better visibility */
        }

        /* Adding a pseudo-element to all divs with IDs starting with 'pf-vast' */
        div[id^="${SELECTOR_DIV}"]::before {
            content: ''; /* This can be any content you'd like to add */
            color: red;
            font-size: 1.2em;
            margin-right: 4px;
        }
    `;

    // Append the style to the document head
    document.head.appendChild(style);

    // Append the style to the document head
    document.head.appendChild(style);

    // Render the Content component into the root div
    const root = ReactDOM.createRoot(rootDiv);
    root.render(
        <React.StrictMode>
            <Content />
        </React.StrictMode>
    );
})();