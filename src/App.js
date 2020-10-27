import React, { useCallback } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home.js'
import Nav from './Components/Nav.js'
import Article from './Components/Article.js'
// import Resume from './Components/Nav.js'
import About from './Components/About.js'

function App() {

  const backToTop = useCallback(() => (event) => {
      window.scrollTo(0, 0)
  })

  return (
    <Router>

      <Nav />
      
      <Route exact path="/" component = {Home} />  
      <Route exact path="/project/:id" component = {Article} />  
      {/* <Route path="/resume" component = {Resume} />   */}
      <Route exact path="/about" component = {About} /> 
    

      <button onClick={backToTop()} className="centre">Back to top</button>
    </Router> 
  );
}

export default App;
