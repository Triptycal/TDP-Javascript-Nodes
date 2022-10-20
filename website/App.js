//import logo from './logo.svg';
import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Routing/Home.jsx';
import Contact from './Routing/Contact.jsx';
import NotFound from './Routing/NotFound.jsx';
import Users from './Routing/Users.jsx';
import Navigation from './Routing/Navigation.jsx';

function App() {
  return (
    <div className="App" >
      <Router>
        <nav>
          <Link to="/Home">
          <button class="btn btn-dark" type="button">Home</button>
          </Link>
          <Link to="/Contact">
            <button class="btn btn-dark" type="button">Contact Us</button>
          </Link>
          <Link to="/Users">
          <button class="btn btn-dark" type="button">Users</button>
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
          <p class="text-warning bg-dark">I AM A FOOTER</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
