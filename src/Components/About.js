import React, { useCallback, useEffect, useState } from 'react';
import './About.css';

import profile from "./assets/About2.JPG"

import Resume from "./assets/YIDA ZHANG_Resume.pdf"

function About() {

  const [headerText, setHeader] = useState("")
  const header = 'Hello there!'

  const [cursor, setCursor] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    console.log(window.scrollY)
    typing(0)

  }, [])

  function typing(i) {
    if (i < header.length) {
      setHeader(headerText => headerText + header[i])
      setTimeout(typing, 50, i+1)
    } else {
      flash(0)
    }
  }

  function flash(i) {
    if (i < 7) {
      setCursor(prev => !prev)
      setTimeout(flash, 300, i+1)
    }
  }

  return (
    <div id="about" className="body">
      <div className="full"><h1>{headerText}{cursor ? "_" : ""}</h1></div>

      <img src={profile} alt="picture of Yida" />
      <div className="back">
        <p>I am Yida and I am blessed with an unyielding desire to know <i>everything</i>.</p>
        <h2>I make everything.</h2>

        <p>To me, a <span className="">creator</span> is a master of their <span className="">craft</span> who is constantly amassing <span className="">knowledge</span> as the root of their innovation; that's the type of person I aspire to be.</p>
        
      </div>
      <div className="full">    
        <h2>I am a problem solver and <a href="https://hbr.org/2017/03/teams-solve-problems-faster-when-theyre-more-cognitively-diverse" target="_blank">cognitive diversity</a> is my tool of choice.</h2>
        <p></p> 
        <p>Growing up as a mathlete, my love for <span className="">logic</span> transformed into professionally writing <span className="special">apps</span>, scripting, and building full stack <span className="special">websites</span>.</p>
        <p>My <span className="">artistic</span> side also kept blooming through building 3D projects, painting, learning art history, and, most notably, working as the <span className="special">lead UI/UX Designer</span> at a tech startup.</p>
        {/* <p>I spend my time learning and practicing computer science, building 3D projects, looking through the Blender open source library, and studying art history.</p> */}

      </div>

      <div className="full centred">
        <div className="line" ></div>    
        <h2>You seem interested</h2>
        <p>Shoot me an email at <span>yida</span><span>zhang</span><span>.ca@</span><span>gmai</span>l.com<span></span>!</p>
        
        <p>Click <a href={Resume} download="YIDA_Resume.pdf">here</a> to download my resume</p>

        <div className="line" ></div>    
      </div>
    </div>
  );
}

export default About;