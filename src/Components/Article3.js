import React from 'react';
import './Article.css';
import v1 from "./assets/websitev1.png"
import v2 from "./assets/websitev2.png"
import v3 from "./assets/websitev3.png"
import v4 from "./assets/websitev4.png"

function Article3() {

  return (
    <div 
      className="article" >
      <h1>My Site</h1>
      <section>
        <h2>The Designs</h2>
        <p>The first step to designing a website that doesn't have a heavy backend (e.g. can be easily handled by expressJS) is by designing the UI. 
          Below are a selection of the designs.
        </p>
        <div className="grid column2 row2">
          <img src={v1} alt="Image" className="shadow rounded"/>
          <img src={v2} alt="Image" className="shadow rounded"/>
          <img src={v3} alt="Image" className="shadow rounded"/>
          <img src={v4} alt="Image" className="shadow rounded"/>
        </div>
        <p style={{
          marginTop: `${100}px`,
        }}>I used Sketch and Adobe XD for the layout design and used Sketch and Blender to create the icons and display images. 
          I kept designing while I was implementing this app and eventually settled on the design you're seeing right now.
        </p>
      </section>
      <section>
        <h2>Implementation</h2>
        <p>This app was implemented using ReactJS for the frontend and expressJS, MongoDB, and nodemon for the backend. 
          I didn't use a template to design the layout and animation; instead, I wrote it in good, old CSS and JSX.
          
        </p>
        <h3>Challenges</h3>
        <p>After being pamper with SwiftUI, ReactJS was a bit of a nightmare to work with. 
          The biggest difficulty was stacking animation during transitions considering I was using declarative components. 
          Luckily, through trial and error, I built some hacky solutions that aren't pretty but look flawless. 
          <br/>The backend was a breeze using the typical MERN setup as this site is not too data heavy.
          <br/>You can view the code for this app <a href="https://github.com/yida98/mysite" target="_blank" >here.</a>
        </p>

      </section>
    </div>
  );
}

export default Article3;
