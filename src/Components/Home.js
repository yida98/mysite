import React, { useCallback, useEffect, useState } from 'react';
import './Home.css';
import Page from './Page';

function Home() {

  return (
    <div id="app">
      <div className="body">
        <Page />
      </div>
    </div>
  );
}

export default Home;
