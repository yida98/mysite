import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import './Nav.css'

function Nav() {

    const [navItems, setItems] = useState([
        // {
        //   id: 2,
        //   title: "projects",
        //   active: true,
        //   link: '/',
        // },
        {
          id: 1,
          title: "projects",
          active: true,
          link: '/',
        },
        {
          id: 0,
          title: "about me",
          active: false,
          link: '/about',
        },
      ]);
    const [activeId, setActive] = useState(1)
    
    const click = useCallback((item) => (event) => {
        const newItems = [...navItems]
        newItems.map((i) => {
            return(i.id === item.id ? ((i.active = true) && (setActive(i.id))) : i.active = false);
        })
        setItems(newItems)
    }, [navItems]);
    
    return (
        <div id="navbar">
            <div id="highlight" style={{
                right: `${(activeId) * 140}px`,
            }}></div>
            <h1 className={`${activeId === 0 ? 'about' : ''}`}>YIDA ZHANG</h1>
                <div id="buttons">
                {navItems.map((item, index) => {
                    return(
                    <Link to={item.link} key={index}>
                        <button 
                        className={item.active ? 'active' : ''} 
                        onClick={click(item)}>
                            {item.title}
                        </button>
                    </Link>
                    )
                })}
            </div>
            <div id="bottomline"></div>
        </div>
    )
}

export default Nav;