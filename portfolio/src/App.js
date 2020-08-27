
import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Works from './components/Works';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Navbar />

          <div id="page-container">

            <div id="content-wrap">
              <Route exact path="/" component={Home} />
              <Route exact path="/About Me" component={AboutMe} />
              <Route exact path="/Works" component={Works} />
              <Route exact path="/Contact" component={Contact} />
            </div>

            <Footer/>
            
          </div>

        </div>
      </HashRouter>
    );
  }
}

export default App;
