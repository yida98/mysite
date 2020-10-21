import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Page.css';

import Article from './Article.js'
import Descript from './Descript.js'

import image from './assets/journ-display.png';

function Page() {

    const [showArticle, toggleShow] = useState(false);
    const [showID, setShow] = useState(null);

    const [pages, setPages] = useState([
        {
            id: 0,
            img: image,
            title: "Journ'",
            subtitle: "the journaling app",
            content: "Journ' is an intuitive journaling app for people who just want to write without distractions.",
            article: <Article show={false} />,
            show: false,
        },
        {
            id: 1,
            img: image,
            title: "What is this",
            subtitle: "the journaling app",
            content: "Journ' is an intuitive journaling app for people who just want to write without distractions.",
            article: <Article show={false} />,
            show: false,
        },
    ])

    const clickMore = useCallback((item) => (event) => {
        const newPages = pages.slice()

        newPages.map((i) => {
            return (i.id == item.id ? 
                (i.show = !i.show) && (i.article = React.cloneElement(i.article, i.show)) 
                : null) 
        })
        console.log(newPages)
        setPages(newPages)

    }, [pages])

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
                                    <button onClick={clickMore(item)} className={`${item.show ? 'top' : ''}`} >
                                        {item.show ? "go back" : "read more!"}
                                    </button>
                            </div>

                        </div>
                    )

                    })
            }

        </div>
    )
}

export default Page;