import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// src/App.jsx
import './App.css';

const App = () => {
  const items = [
    { name: 'Milk', available: true },
    { name: 'Flour', available: false },
    { name: 'Eggs', available: true },
    { name: 'Butter', available: false },
    { name: 'vanilla', available: false },


  ];

  return (
    <>
      <h1>Recipe Ingredients Checker</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.available ? 'available' : 'not-available'}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;