import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home.js'
import Article from './Components/Article.js'
import Nav from './Components/Nav.js'

function App() {
  return (
    <Router>

      <Nav />
      <Route exact path="/" component = {Home} />  
      <Route path="/:id" component = {Article} />  
    
    </Router> 
  );
}

export default App;
