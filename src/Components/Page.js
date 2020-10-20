import React, { useCallback, useEffect, useState } from 'react';
import './Page.css';
import image from './waitmaiday.png';
import { Link } from "react-router-dom";

function Page() {

    return (
        <div className="page">
            <div className="tile"></div>
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
                <Link to="/journ">read more</Link>
            </div>
        </div>
    )
}

export default Page;