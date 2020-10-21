import React, { useCallback, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Descript.css';
import image from './assets/journ-display.png';

function Descript( {show} ) {

    return (

        <div className={`descript ${show ? '' : 'hide'}`}>
            <img src={image} alt="Image" className="float"/>
            <div className="right float">
                <div className="title">
                    <h2>Journ'</h2>
                    <p>the journaling app</p>
                </div>
                <div className="content">
                    <p>
                    Journ' is an intuitive journaling app for people who just want to write without distractions.
                    </p>
                </div>
            </div>
        </div>

    );


}

export default Descript;