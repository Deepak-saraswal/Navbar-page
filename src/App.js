import React from 'react';
import './App.css';
import Slider from './components/Slider';

import Navbar from './components/Navbar';


function App() {
  const images = [
    './media/pic1.jpg',
    './media/pic2.jpg',
    './media/pic3.jpg'
  ];

  return (
    <div className="App">
      <Navbar />
      <div>
      <h1>Simple Slider Example</h1>
      <Slider images={images} />
    </div>
    </div>
  );
}

export default App;
