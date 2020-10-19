import React, { useCallback, useEffect, useState } from 'react';
import './App.css';

import Nav from './Components/Nav';
import Page from './Components/Page';

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
      <div className="body">
        <Page />
      </div>
    </div>
  );
}

export default App;
