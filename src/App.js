import React, { useCallback, useEffect, useState } from 'react';
import './App.css';

import Nav from './Components/Nav';
import Main from './Components/Main';

function App() {


  const [yOffset, setOffset] = useState(0);
  const [showIntro, setShow] = useState(false);

  useEffect(() => {
    function handleOffset() {
      setOffset(window.pageYOffset)
      console.log(window.innerHeight)
      console.log(window.pageYOffset)
    }

    window.addEventListener("scroll", handleOffset)
    setShow(!showIntro)

    return () => {
      setShow(false)
      window.removeEventListener("scroll", handleOffset)
    }
  }, [])
  return (
    <div id="app">
      <Nav />
      <div className="content">
        <Main />
        <ul>
          <li>applications</li>
          <li>product designs</li>
          <li>3D tools</li>
          <li>websites</li>
          <li>ideas a reality</li>
          <li>applications</li>
          <li>product designs</li>
          <li>3D tools</li>
          <li>websites</li>
          <li>ideas a reality</li>
          <li>applications</li>
          <li>product designs</li>
          <li>3D tools</li>
          <li>websites</li>
          <li>ideas a reality</li>
        </ul>
        <ul>
          <li>applications</li>
          <li>product designs</li>
          <li>3D tools</li>
          <li>websites</li>
          <li>ideas a reality</li>
          <li>applications</li>
          <li>product designs</li>
          <li>3D tools</li>
          <li>websites</li>
          <li>ideas a reality</li>
          <li>applications</li>
          <li>product designs</li>
          <li>3D tools</li>
          <li>websites</li>
          <li>ideas a reality</li>
        </ul>
  
       
      </div>
    </div>
  );
}

export default App;
