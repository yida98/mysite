import React, { useCallback, useEffect, useState } from 'react';
import './Home.css';
import Page from './Page';

function Home() {


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
      <div className="body">
        <Page />
      </div>
    </div>
  );
}

export default Home;
