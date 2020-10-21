import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Page.css';
import { Link } from "react-router-dom";

import Article from './Article.js'
import Descript from './Descript.js'

function Page() {

    const [showArticle, toggleShow] = useState(false);

    const clickMore = useCallback(() => (event) => {
        const currState = showArticle
        toggleShow(!currState)

    }, [showArticle])


    return (
        <div className="page">
            <div className={`tile ${showArticle ? 'article' : ''}`}>
                {showArticle ? <Article /> : <Descript />}

            </div>
            <button onClick={clickMore()} className={`${showArticle ? 'top' : ''}`} >read more!</button>

        </div>
    )
}

export default Page;