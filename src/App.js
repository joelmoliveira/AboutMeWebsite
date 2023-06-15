import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

// Components
import Header from "./components/Header/Header";
import HomePage from "./components/Homepage/HomePage";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import ProjectPage from "./components/ProjectPage/ProjectPage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          {/* <Route path="/projects" element={<ProjectPage />} /> */}
          <Route path="/projects/:projectId" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
