import React, { useCallback, useEffect, useState } from 'react';
import './Page2.css';

import Article from './Article.js'
import Article2 from './Article2.js'
import Article3 from './Article3.js'
import Descript from './Descript.js'

import journImage from './assets/journ-icon.png';
import blenderImage from './assets/blender-display.png';
import websiteImage from './assets/mac-display.png';

function Page2() {

    const [pages, setPages] = useState([
        {
            id: 0,
            img: journImage,
            title: "Journ'",
            subtitle: "Swift | CloudKit | Sketch | Blender",
            content: "Journ' is an intuitive journaling app for people who just want to keep writing without distractions.",
            article: <Article />,
            show: false,
            initialLoad: false,
            loadArticle: false,
        },
        {
            id: 1,
            img: blenderImage,
            title: "Blender Scripts",
            subtitle: "Python | Blender",
            content: "An add-on full of tools to help with 3D character rigging in Blender.",
            article: <Article2 />,
            show: false,
            initialLoad: false,
            loadArticle: false,
        },
        {
            id: 2,
            img: websiteImage,
            title: "My Site",
            subtitle: "ReactJS | Express | HTML/CSS | Git",
            content: "A website to display my projects; you are here.",
            article: <Article3 />,
            show: false,
            initialLoad: false,
            loadArticle: false,
        },
    ])

    const [currID, setCurrID] = useState(0)

    useEffect(() => {
        window.scrollTo(0,0)

        function handleOffset() {
            setCurrID(Math.floor((window.scrollY + (window.innerHeight*(4/5)))/window.innerHeight))
            if (window.scrollY < 20) {
                resetInitial()
            }
        }

        window.addEventListener("scroll", handleOffset)
        
        return () => {
            window.removeEventListener("scroll", handleOffset)
        }
    }, [])

    useEffect(() => {
        const currItem = pages[currID]

        if (!currItem.initialLoad && !currItem.show) {
            const newPages = [...pages]
            newPages.splice(currItem.id, 1, {
                ...currItem, 
                initialLoad: true,
            })

            setPages(newPages)
        }

    }, [currID, pages])

    const toggleShow = useCallback((item) => () => {
        let newPages = [...pages]
        newPages.splice(item.id, 1, {
            ...item, 
            show: !item.show,
            initialLoad: !item.initialLoad,
        })
        setPages(newPages)
        

    }, [pages])

    const resetInitial = useCallback(() => {

        let newPages = [...pages]
        newPages.map((item) =>{
            item.initialLoad = false
        })
        setPages(newPages)
    }, [])

    return (
        <div className="page">

            {
                pages.map((item, index) => {
                    
                    return (
                        <div key={index} className="wrapper" >
                            
                            <div className={`tile ${item.show ? 'show' : 'hide'}`} >
                                <div className="art">
                                    {item.article} </div>
                                <div  className={`content ${item.initialLoad ? "down" : "up" }`}>
                                    <Descript 
                                        item={item}
                                        onClick={toggleShow}
                                    />
                                </div>
                            </div>
                            <button className={`${item.show ? 'top' : ''}`} onClick={toggleShow(item)}>
                                {item.show ? <p>less</p> : <p>more</p> }
                            </button>      
                            <div className="contentWrapper">
                                <img src={(item.img)} alt="Image" style={{
                                    opacity: `${item.show ? 0 : 1}`,
                                }} />             
                            </div>
                            {/* {item.show ? <span/> :  <div className="contentWrapper">

                                <img src={(item.img)} alt="Image" />                      
                            </div>}
                             */}

                        </div>
                    )

                    })
            }
        </div>
    )
}

export default Page2;
