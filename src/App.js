import React, { useCallback, useEffect, useState } from 'react';
import './App.css';

import Nav from './Components/Nav';
import Main from './Components/Main';

function App() {

  const introItems = [
    {
      id: 0,
      title: "applications",
    },
    {
      id: 1,
      title: "product designs",
    },
    {
      id: 2,
      title: "3D tools",
    },
    {
      id: 3,
      title: "websites",
    },
    {
      id: 4,
      title: "ideas a reality",
    }
  ];

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
      <div className="title">
        <p>Hello, world</p>
        <h1>YIDA ZHANG</h1>
        <div id="intro">
          <p>I make</p>
          <ul>
            {introItems.map((item) => {
              console.log(item)
              return(<li key={item.id} className={showIntro ? "show" : ""}>{item.title}</li>)
            })}
          </ul>
        </div>
      </div>
      <div className="content">
        <Nav />
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
