import React, { useCallback } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Page from './Components/Page.js'
import Nav from './Components/Nav.js'
import About from './Components/About.js'

function App() {

  const backToTop = useCallback(() => (event) => {
      window.scrollTo(0, 0)
  })

  return (
    <Router>

      <Nav />
      
      <Route exact path="/" component = {Page} />  
      <Route exact path="/about" component = {About} /> 
    

      <button id="btt" onClick={backToTop()} className="centre">Back to top</button>
    </Router> 
  );
}

export default App;
