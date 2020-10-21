import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Page.css';
import image from './journ-display.png';
import { Link } from "react-router-dom";

import Article from './Article.js'

function Page() {

    const [showArticle, toggleShow] = useState(false);

    const clickMore = useCallback(() => (event) => {
        const currState = showArticle
        toggleShow(!currState)

    }, [showArticle])


    return (
        <div className="page">
            <div className={`tile ${showArticle ? 'article' : ''}`}>{showArticle ? <Article /> : null}</div>

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
                {/* <Link to="/project/journ">read more {'>'}</Link> */}
            </div>
            <button onClick={clickMore()}>read more!</button>
        </div>
    )
}

export default Page;