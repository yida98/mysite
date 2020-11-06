import React, { useCallback, useEffect, useState } from 'react';
import './Descript2.css';

function Descript( {item, onClick} ) {

    useEffect(() => {
    }, [])

    return (
        <div className="descript" onClick={onClick(item)} style={{
            marginTop: `${item.initialLoad ?  `${30}px` : `${-100}%`}`,
        }}>
            <h2>{item.title}</h2>
            <p className="subtitle">{item.subtitle}</p>
            <p className="content">{item.content}</p>
        </div>

    );


}

export default Descript;