import React, { useCallback, useEffect, useState } from 'react';
import './Descript.css';

function Descript( {item, onClick} ) {

    useEffect(() => {
    }, [])

    return (
        <div className={`descript`}> 
            <h2>{item.title}</h2>
            <p className="subtitle">{item.subtitle}</p>
            <p className="content">{item.content}</p>
        </div>

    );


}

export default Descript;