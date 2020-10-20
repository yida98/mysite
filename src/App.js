import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home.js'
import Nav from './Components/Nav.js'
import Article from './Components/Article.js'
// import Resume from './Components/Nav.js'
import About from './Components/About.js'

function App() {
  return (
    <Router>

      <Nav />
      <Route exact path="/" component = {Home} />  
      <Route exact path="/project/:id" component = {Article} />  
      {/* <Route path="/resume" component = {Resume} />   */}
      <Route exact path="/about" component = {About} />  
    
    </Router> 
  );
}

export default App;
