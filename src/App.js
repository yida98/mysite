import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home.js'
import Article from './Components/Article.js'

function App() {
  return (
    <Router>
      <Route path="/" component = {Home} />  
      <Route path="/:id" component = {Article} />  
    
    </Router> 
  );
}

export default App;
