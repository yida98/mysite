import React, { useCallback, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Nav.css'

function Nav() {

    const [navItems, setItems] = useState([
        {
          id: 1,
          title: "projects",
          active: window.location.pathname === "/",
          link: '/',
        },
        {
          id: 0,
          title: "about me",
          active: window.location.pathname === "/about",
          link: '/about',
        },
      ]);

    const [activeItem, setActive] = useState(navItems.filter(item => item.active === true)[0])
    
    const click = useCallback((item) => (event) => {
        let newItems = [...navItems]
        newItems.map((i) => {
            return(i.id === item.id ? ((i.active = true) && (setActive(i))) : i.active = false);
        })
        setItems(newItems)

    }, []);

    const goHome = useCallback(() => {
        let newItems = [...navItems]
        let item = navItems[0]
        newItems.map((i) => {
            return(i.id === item.id ? ((i.active = true) && (setActive(i))) : i.active = false);
        })
        setItems(newItems)
        window.location.assign("/")
    })

    return (
        <div id="navbar">
            <div id="highlight" style={{
                right: `${(activeItem.id) * 140}px`,
            }}></div>
            <h1 className={`${activeItem.id === 0 ? 'about' : ''}`} onClick={goHome}>YIDA ZHANG</h1>
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
            <div id="bottomline">
            </div>
        </div>
    )
}

export default Nav;