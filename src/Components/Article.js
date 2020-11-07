import React from 'react';
import './Article.css';
import bg from "./assets/journ-bg.jpg"
import IAImage from "./assets/journ-IA.png"
import underlay from "./assets/journ-screens.png"
import overlay from "./assets/journ-arrows.png"

function Article() {

  return (
    <div 
      className="article" >
      <h1>Journ'</h1>
      <section>
        <h2>Journ's Conception</h2>
        <p>I love journaling; it’s therapeutic to write down your thoughts and when reading past entries back, you take a hike down memory lane. As my days get busier and busier, however, even moving to pick up a pencil seemed like too much of a chore. I have tried many other journalling apps, but they always had features or distracting and inconsistent aspects I didn’t like. So, I thought, why should I compromise when I know what I want? As someone who loves a challenge, I decided to make a journaling app that’s fun to navigate and gives the users zero burden to use.</p>
        <img src={bg} alt="Image" />
        <h3>The problem</h3>
        <p>Some times having to find a pen or flipping to the right page is enough reason to procrastinate. This project eliminates all those distracting steps that deter the user from their actual task of writing as to not lose their initial inspiration in the process. 

        </p>
        <h3>My solution</h3>
        <p>My design won't dazzle the users. Journ' creates a simple environment where the user comes to write their entries when they just want to write an entry. 
          The lack of navigatory paths ensures the users will not be scared away by a list of potential decisions they would have to make when they just came for a simple task: writing.

        </p>
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
        <img src={overlay} alt="overlay" className="over" />
        <img src={underlay} alt="underlay" />
      </section>

      <section>
        <h2>Implementation</h2>
        <p>This app was implemented using SwiftUI and CloudKit and the biggest hurdle was making custom, stateless, functional UI and animation with a fairly incomplete SwiftUI library. 
          The code can be viewed <a href="https://github.com/yida98/Journ" target="_blank" >here</a>.
        </p>
        <h3>Account handling</h3>
        <p>Journ' synchronizes the user data across all of their devices that has the same iCloud account in a private database. 
          
        </p>
        <h3>UI</h3>
        <p>Journ' handles like a single-page application by stacking custom components. 
          The animation of the UI is tedious to create due to the functional nature of this API which makes stacking and interrupting animation difficult. 

        </p>
      </section>

    </div>
  );
}

export default Article;
