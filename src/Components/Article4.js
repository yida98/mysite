import React from 'react';
import './Article.css';

import img1 from './assets/Blue 1.png'
import img2 from './assets/Blue 2.png'
import img3 from './assets/Blue 3.png'
import img4 from './assets/Blue 4.png'
import img5 from './assets/Blue 5.png'
import img6 from './assets/Blue 6.png'

function Article4() {

  return (
    <div 
      className="article" >
          <h1>Poll App</h1>
          <p>This is a fun little project built using (my favourite) SwiftUI and CloudKit and designed using Sketch.

          </p>
          <h2>Synopsis</h2>
          <p>Poll App is an app where you can vote on an unlimited supply of polls. 
              The unlimited supply comes from user submitted polls. 
              When a user submits a poll, they can keep track of the progress and delete the poll when they decide to. 
              The entire process is completely anonymous so there will never be any concern of maintaining a profile.

          </p>
          <h2>Designs</h2>
          <p>The design of this app is very lightweight with a minimal. 
              There are only three tabs that transition between their corresponding modal components. 
              Below are some of the designs I made for this app:

          </p>
          <div className="grid column3 row2">
            <img src={img1} alt="design image" className="shadow rounded maxHeight" title="starting screen"/>
            <img src={img2} alt="design image" className="shadow rounded maxHeight"/>
            <img src={img3} alt="design image" className="shadow rounded maxHeight"/>
            <img src={img4} alt="design image" className="shadow rounded maxHeight"/>
            <img src={img5} alt="design image" className="shadow rounded maxHeight"/>
            <img src={img6} alt="design image" className="shadow rounded maxHeight"/>

          </div>
          
    </div>
  );
}

export default Article4;
