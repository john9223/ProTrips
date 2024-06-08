import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import RegistrationForm from './components/RegistrationForm'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Kalvium</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
              <li><Link to="/register">Registration Form</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/register" element={<RegistrationForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
