import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Page.css';

import Article from './Article.js'
import Descript from './Descript.js'

import image from './assets/journ-display.png';

function Page() {

    const [showArticle, toggleShow] = useState(false);

    const clickMore = useCallback(() => (event) => {
        const currState = showArticle
        toggleShow(!currState)

    }, [showArticle])

    const pages = [
        {
            id: 0,
            img: image,
            title: "Journ'",
            subtitle: "the journaling app",
            content: "Journ' is an intuitive journaling app for people who just want to write without distractions.",
            article: <Article show={showArticle} />,
        },
        {
            id: 1,
            img: image,
            title: "What is this",
            subtitle: "the journaling app",
            content: "Journ' is an intuitive journaling app for people who just want to write without distractions.",
            article: <Article show={showArticle} />,
        },
    ]


    return (
        <div className="page">

            {
                pages.map((item, index) => {
                    
                    return (
                        <div key={index} className="wrapper">

                            <div className={`tile ${showArticle ? 'showarticle' : ''}`}>
                                {item.article}
                                <Descript 
                                    show={!showArticle}
                                    img={item.img}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    content={item.content}
                                    />
                            </div>

                        </div>
                    )

                    })
            }
            <button onClick={clickMore()} className={`${showArticle ? 'top' : ''}`} >
                {showArticle ? "go back" : "read more!"}
            </button>

        </div>
    )
}

export default Page;