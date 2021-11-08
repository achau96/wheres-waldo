import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Image1 from './components/Image1';
import Image2 from './components/Image2';

function App() {
  const [timer, setTimer] = useState([0, 0]);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image1" element={<Image1 />} />
          <Route path="/image2" element={<Image2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
