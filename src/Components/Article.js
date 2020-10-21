import React, { useCallback, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Article.css';
import bg from "./assets/journ-bg.png"
import IAImage from "./assets/journ-IA.png"
import underlay from "./assets/journ-screens.png"
import overlay from "./assets/journ-arrows.png"

function Article( {show} ) {

  return (
    <div className={`article ${show ? '' : 'hide'}`}>
      <h1>Journ'</h1>
      <section>
        <h2>Journ's Conception</h2>
        <p>I love journaling; it’s therapeutic to write down your thoughts and when reading past entries back, you take a hike down memory lane. As my days get busier and busier, however, even moving to pick up a pencil seemed like too much of a chore. I have tried many other journalling apps, but they always had features or distracting and inconsistent aspects I didn’t like. So, I thought, why should I compromise when I know what I want? As someone who loves a challenge, I decided to make a journaling app that’s fun to navigate and gives the users zero burden to use.</p>
        <img src={bg} alt="Image" />
      </section>
      <section>
        <h2>Key Aspects</h2>
        <h3>Easy and fun to navigate</h3>
        <p>The app has very few views. It centers around the monthly calendar where the user can open up entries and edit them. Swiping left and right navigates the user's journal at the monthly granularity. Swiping up on the monthly bar enters the yearly summary of the months and swiping left and right on them navigates the user's journal at the yearly granularity. There are, all together, three main views and the navigation between them follow similar actions to create callback (i.e. swipe up to open means swipe down to close).</p>
        
        <section className="half">            
          <img src={IAImage} alt="IA" className="half"/>
          <div>
            <h3>Information Architecture</h3>
            <p>This IA maps out the simple flow of the app. I wanted there to be very few decisions at every view. Since the structure of the app is so simple, the navigation becomes very straight forward.</p>
          </div>
        </section>

        <h3>Burden Free UI</h3>
        <p>Each view is clear about what their purpose is and they are visually refreshing but they contain all the necessary tools. The UI doesn't crowd the screen for better aesthetics.</p>

        <h3>Ethical Incentives</h3>
        <p>Each month where the user has journaled everyday shows a celebratory sash on that month’s tab. The app is not achievement based where it pushes you to complete all the months because then it piles on extrinsic motivation which can scare the user away. Instead, having the achievement sash as a response to the users’ actions rewards them for something they decided to do via intrinsic motivation.</p>

      </section>

      <section className="overlay">
        <img src={underlay} alt="underlay image" />
        <img src={overlay} alt="overlay image" className="over" />
      </section>

    </div>
  );
}

export default Article;
