//import logo from './logo.svg';
import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import './App.css';
import Home from './Routing/Home.jsx';
import Contact from './Routing/Contact.jsx';
import NotFound from './Routing/NotFound.jsx';
import Users from './Routing/Users.jsx';
import Navigation from './Routing/Navigation.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/Home">
            Home
          </Link>
          <Link to="/Contact">
            <button type="button">Contact Us</button>
          </Link>
          <Link to="/Users">
            Users
          </Link>
          <navigation/>
        </nav>
        <br />
        <header>
          <h1>I AM A HEADER</h1>
        </header>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Users/*" element={<Users/>} />
          <Route path="/Users/:id/*" element={<Users/>} />
        </Routes>
        <footer>
          I AM A FOOTER
        </footer>
      </Router>
    </div>
  );
}

export default App;
