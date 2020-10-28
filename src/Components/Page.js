import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Page.css';

import Article from './Article.js'
import Descript from './Descript.js'

import image from './assets/journ-display.png';

import backgroundImg from './assets/journ-bg.png';

function Page() {

    const [pages, setPages] = useState([
        {
            id: 0,
            img: image,
            title: "Journ'",
            subtitle: "Swift | CloudKit | Sketch | Blender",
            content: "Journ' is an intuitive journaling app for people who just want to write without distractions.",
            article: <Article />,
            show: false,
        },
        {
            id: 1,
            img: image,
            title: "Blender Scripts",
            subtitle: "Python | Blender",
            content: "Journ' is an intuitive journaling app for people who just want to write without distractions.",
            article: <Article />,
            show: false,
        },
        {
            id: 2,
            img: image,
            title: "My Site",
            subtitle: "ReactJS | Express | HTML/CSS | Git",
            content: "Journ' is an intuitive journaling app for people who just want to write without distractions.",
            article: <Article />,
            show: false,
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
        console.log(window.scrollY)
    }, [])



  const [yOffset, setOffset] = useState(0);
  const [showIntro, setShow] = useState(false);

  useEffect(() => {
    function handleOffset() {
      setOffset(window.pageYOffset)
      // console.log(window.innerHeight)
      // console.log(window.pageYOffset)
    }

    window.addEventListener("scroll", handleOffset)
    setShow(!showIntro)

    return () => {
      setShow(false)
      window.removeEventListener("scroll", handleOffset)
    }
  }, [])
  
    return (
        <div className="page">

            {
                pages.map((item, index) => {
                    
                    return (
                        <div key={index} className="wrapper">

                            <div className={`tile ${item.show ? 'showarticle' : ''}`}>
                                {item.show ? item.article :<h2>{item.title}</h2>}
                            </div>
                                <div className="contentwrapper">
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

export default Page;