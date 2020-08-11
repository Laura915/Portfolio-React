
import React, { Component } from 'react';
import { HashRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Works from './components/Works';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Navbar/>
  
          <Route exact path="/" component={Home} />
          <Route exact path="/About Me" component={AboutMe} />
          <Route exact path="/Works" component={Works} />
          <Route exact path="/Contact" component={Contact} />
          
          <Footer/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
