import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Components
import Header from './components/Header/Header';
import HomePage from './components/Homepage/HomePage';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';

// Contents

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='/about' element={<AboutMe/>} />
          {/* <Route path='/rules' element={<Rules/>} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
