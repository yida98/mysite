import React, { useCallback, useEffect, useState } from 'react';
import './Descript2.css';

function Descript( {item, onClick} ) {

    useEffect(() => {
    }, [])

    return (
        <div className="descript">
            <img src={(item.img)} alt="Image" />
            <div className="right" onClick={onClick(item)} style={{
                marginTop: `${item.initialLoad ?  0 : `${-170}px`}`,
                opacity: `${item.initialLoad ? 1 : 0}`,
            }}>
                <h2>{item.title}</h2>
                <div className="title">
                    <p>{item.subtitle}</p>
                </div>
                <div className="content">
                    <p>{item.content}</p>
                </div>
            </div>
        </div>

    );


}

export default Descript;