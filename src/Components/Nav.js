import React, { useCallback, useEffect, useState } from 'react';
import './Nav.css'

function Nav() {

    const [navItems, setItems] = useState([
        {
          id: 2,
          title: "projects",
          active: true,
        },
        {
          id: 1,
          title: "Blender",
          active: false,
        },
        {
          id: 0,
          title: "about me",
          active: false,
        },
      ]);
    const [activeId, setActive] = useState(2)
    
    const click = useCallback((item) => (event) => {
        const newItems = [...navItems]
        newItems.map((i) => {
            return(i.id === item.id ? ((i.active = true) && (setActive(i.id))) : i.active = false);
        })
        setItems(
            newItems
        )
        console.log(navItems)
    }, [navItems]);

    const buttonRef = React.createRef()
    
    return (
        <div id="navbar">
            <div id="highlight" style={{
                right: `${(activeId) * 140}px`,
            }}></div>
            <h1>YIDA ZHANG</h1>
                <div id="buttons">
                {navItems.map((item, index) => {
                    return(
                    <button 
                     key={index}
                     ref={buttonRef}
                     className={item.active ? 'active' : ''} 
                     onClick={click(item)}>
                        {item.title}
                    </button>
                    )
                })}
            </div>
            <div id="bottomline"></div>
        </div>
    )
}

export default Nav;