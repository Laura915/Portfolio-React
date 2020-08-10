
import React, { Component } from 'react';
import { HashRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Works from './components/Works';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

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

const Home = () => <div><h2>Home</h2></div>
// const About = () => <div><h2>About Me</h2></div>
// const Works = () => <div><h2>Works</h2></div>
// const Contact = () => <div><h2>Contact</h2></div>

export default App;
