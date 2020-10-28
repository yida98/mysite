import React, { useCallback, useEffect, useState } from 'react';
import './Descript.css';

function Descript( {show, img, title, subtitle = '', content} ) {

    useEffect(() => {
    }, [])

    return (
        <div className={`descript`} >
            <img src={img} alt="Image" className="float"/>
            <div className="right float">
                <div className="title">
                    <p>{subtitle}</p>
                </div>
                <div className="content">
                    <p>{content}</p>
                </div>
            </div>
        </div>

    );


}

export default Descript;