import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Guide from "./pages/GuidePage/guide.jsx";
import ContactUs from "./pages/HomePage/contactus.jsx";
import Locate from "./pages/LocatePage/locate.jsx";
import Resources from "./pages/ResourcesPage/resources.jsx";
import HomePage from "./pages/HomePage/homepage.jsx";
import Header from "./components/Header/header.jsx"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/locate" element={<Locate/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/guide" element={<Guide/>} />
      </Routes>
    </Router>
  );
}

export default App;
