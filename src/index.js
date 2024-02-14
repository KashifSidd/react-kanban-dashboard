import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Get the container element by its id
const container = document.getElementById('board');

// Create a root for rendering React components into the container
const root = createRoot(container);

// Render the App component into the root
root.render(<App />);
