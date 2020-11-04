import React, { useCallback, useEffect, useState } from 'react';
import './Page.css';

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

    const clickMore = useCallback((item) => (event) => {
        const newPages = [...pages]

        newPages.splice(item.id, 1, {
            ...item, 
            show: !item.show, 
        })

        setPages(newPages)

    }, [pages])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    const [yOffset, setOffset] = useState(0);
    const [showIntro, setShow] = useState(false);

    const [currentID, setCurrentID] = useState(0)

    useEffect(() => {
        const loadingItem = pages[currentID]
        if (!loadingItem.initialLoad) {
            console.log("first time loading")
            const newPages = [...pages]
        
            newPages.splice(loadingItem.id, 1, {
                ...loadingItem, 
                initialLoad: true, 
            })
        
            setPages(newPages)
        }
    }, [currentID])

    useEffect(() => {
        function handleOffset() {
            setOffset(window.pageYOffset)
            setCurrentID(Math.floor((window.scrollY + 300)/window.innerHeight))
        }

        window.addEventListener("scroll", handleOffset)
        setShow(!showIntro)

        return () => {
            setShow(false)
            window.removeEventListener("scroll", handleOffset)
        }
    }, [])
  
    const display = useCallback((item) => {
    }, [pages])

    return (
        <div className="page">

            {
                pages.map((item, index) => {
                    
                    return (
                        <div key={index} className="wrapper" >

                            <div 
                                className={`tile ${item.show ? 'showarticle' : ''}`} 
                                onClick={item.show ? {} : clickMore(item)}>
                                {item.show ? item.article :<h2 className={`displayTitle`}>{item.title}</h2>}
                            </div>
                                <div className="contentwrapper"
                                    style={{
                                        opacity: `${item.initialLoad ? 1 : 0}`,
                                        marginLeft: `${item.initialLoad ? 45 : 50}vw`,
                                        // animation: `${item.initialLoad ? 'fade-in-content' : ''} 1s`,
                                    }}>
                                    {item.show ? <div/> : (<Descript 
                                        show={!item.show}
                                        img={item.img}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        content={item.content}
                                        />)}
                                    <button onClick={clickMore(item)} className={`${item.show ? 'top' : ''}`} >
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
