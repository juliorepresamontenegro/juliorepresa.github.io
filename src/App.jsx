import React, { Component } from 'react';
import Header from './components/Header/Header'
import Nav from './components/nav/Nav'
import About from './components/About/About'
import Experience from './components/experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/Footer'

import Portfolio from './components/Portfolio/portfolio'
import { BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';

import MainPage from './pages/index';

const App = () => {
  return(
  <Router>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
  <Routes>
    <Route exact path='/' elements={<MainPage />} />
    <Route exact path='/grua' elements={<MainPage/>} />
  </Routes>
  </Router>
  

  );
}

export default App;


/*
const App = () => {
      <Router>
        <Route path="/grua" component={MainPage} />
        <Route exact path="/" element={<Header/>} />
      </Router>
  
  }
 


export default App;
*/