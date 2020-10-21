import React, { useCallback, useEffect, useState } from 'react';
// import './Home.css';

function About( {match, location}) {

  return (
    <div id="about" className="body">
        <h2>I make everything.</h2>

        <ul>
            <li>apps</li>
            <li>scripts</li>
            <li>3D renders</li>
            <li>paintings</li>
        </ul>

        <p>I have multidisciplinary </p>
    </div>
  );
}

export default About;