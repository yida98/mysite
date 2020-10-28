import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Page.css';

import Article from './Article.js'
import Descript from './Descript.js'

import image from './assets/journ-display.png';

function Page() {

    // const colorSchemes = [
        
    // ]

    const [pages, setPages] = useState([
        {
            id: 0,
            img: image,
            title: "Journ'",
            subtitle: "Swift | CloudKit | Sketch | Blender",
            content: "Journ' is an intuitive journaling app for people who just want to write without distractions.",
            article: <Article show={false} />,
            show: false,
        },
        {
            id: 1,
            img: image,
            title: "Rest+Order",
            subtitle: "eating in restaurants for awkward people",
            content: "Journ' is an intuitive journaling app for people who just want to write without distractions.",
            article: <Article show={false} />,
            show: false,
        },
        {
            id: 2,
            img: image,
            title: "Rest+Order",
            subtitle: "eating in restaurants for awkward people",
            content: "Journ' is an intuitive journaling app for people who just want to write without distractions.",
            article: <Article show={false} />,
            show: false,
        },
    ])

    const clickMore = useCallback((item) => (event) => {
        const newPages = [...pages]

        newPages.splice(item.id, 1, {
            ...item, 
            show: !item.show, 
            article: React.createElement(Article, {show: !item.show}), 
        })

        setPages(newPages)

    }, [pages])

    useEffect(() => {
        window.scrollTo(0, 0)
        console.log(window.scrollY)
    }, [])

    return (
        <div className="page">

            {
                pages.map((item, index) => {
                    
                    return (
                        <div key={index} className="wrapper">

                            <div className={`tile ${item.show ? 'showarticle' : ''}`}>
                                {item.article}
                                <Descript 
                                    show={!item.show}
                                    img={item.img}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    content={item.content}
                                    />
                            </div>
                            <button onClick={clickMore(item)} className={`${item.show ? 'top' : ''}`} >
                                {item.show ? <p>go back</p> : <p>read more!</p> }
                            </button>

                        </div>
                    )

                    })
            }

        </div>
    )
}

export default Page;