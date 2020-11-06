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
            setCurrID(Math.floor((window.scrollY + 400)/window.innerHeight))
        }

        window.addEventListener("scroll", handleOffset)
        
        return () => {
            window.removeEventListener("scroll", handleOffset)
        }
    }, [])

    useEffect(() => {
        const currItem = pages[currID]

        if (!currItem.initialLoad) {
            const newPages = [...pages]
            newPages.splice(currItem.id, 1, {
                ...currItem, 
                initialLoad: true,
            })

            setPages(newPages)
        }

    }, [currID, pages])

    const toggleShow = useCallback((item) => () => {
        const newPages = [...pages]
        newPages.splice(item.id, 1, {
            ...item, 
            show: !item.show,
        })
        console.log("clicked at index:", item.id)

        setPages(newPages)
    }, [pages])

    return (
        <div className="page">

            {
                pages.map((item, index) => {
                    
                    return (
                        <div key={index} className="wrapper" >
                            
                            <div className={`tile ${item.show ? 'show' : 'hide'}`} >
                                {item.show ? item.article : <Descript 
                                    item={item}
                                    onClick={toggleShow}
                                    />}
                            </div>
                            {item.show ? <span/> :  <div className="contentWrapper">
                                <Descript 
                                    item={item}
                                    onClick={toggleShow}
                                    />
                                <button className={`${item.show ? 'top' : ''}`} onClick={toggleShow(item)}>
                                    {item.show ? <p>close</p> : <p>read more!</p> }
                                </button>                            
                            </div>}
                            

                        </div>
                    )

                    })
            }
        </div>
    )
}

export default Page2;
