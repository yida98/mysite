import React, { useCallback, useEffect, useState } from 'react';
import './Page2.css';

import Article from './Article.js'
import Article2 from './Article2.js'
import Article3 from './Article3.js'
import Descript from './Descript.js'

import journImage from './assets/journ-display.png';
import blenderImage from './assets/blender-display.png';
import websiteImage from './assets/mac-display.png';

function Page2() {

    const [pages, setPages] = useState([
        {
            id: 0,
            img: journImage,
            title: "Journ'",
            subtitle: "Swift | CloudKit | Sketch | Blender",
            content: "Journ' is an intuitive journaling app for people who just want to write without distractions.",
            article: <Article />,
            show: false,
            initialLoad: false,
        },
        {
            id: 1,
            img: blenderImage,
            title: "Blender Scripts",
            subtitle: "Python | Blender",
            content: "Journ' is an intuitive journaling app for people who just want to write without distractions.",
            article: <Article2 />,
            show: false,
            initialLoad: false,
        },
        {
            id: 2,
            img: websiteImage,
            title: "My Site",
            subtitle: "ReactJS | Express | HTML/CSS | Git",
            content: "Journ' is an intuitive journaling app for people who just want to write without distractions.",
            article: <Article3 />,
            show: false,
            initialLoad: false,
        },
    ])

    const [currID, setCurrID] = useState(0)

    useEffect(() => {
        function handleOffset() {
            setCurrID(Math.floor(window.scrollY/window.screenY))
        }

        window.addEventListener("scroll", handleOffset)
        
        return () => {
            window.removeEventListener("scroll", handleOffset)
        }
    }, [])

    return (
        <div className="page">

            {
                pages.map((item, index) => {
                    
                    return (
                        <div key={index} className="wrapper" >
                            
                            <div className="tile top"/>
                            <div className="tile bottom"/>
                            <div className="contentWrapper">
                                {item.show ? <div/> : (<Descript 
                                    show={!item.show}
                                    img={item.img}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    content={item.content}
                                    />)}
                                <button className={`${item.show ? 'top' : ''}`} >
                                    {item.show ? <p>close</p> : <p>read more!</p> }
                                </button>
                            </div>

                        </div>
                    )

                    })
            }
        </div>
    )
}

export default Page2;
