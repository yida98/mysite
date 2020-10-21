import React, { useCallback, useEffect, useState } from 'react';
import './Descript.css';

function Descript( {show, img, title, subtitle = '', content} ) {

    return (

        <div className={`descript ${show ? '' : 'hide'}`}>
            <img src={img} alt="Image" className="float"/>
            <div className="right float">
                <div className="title">
                    <h2>{title}</h2>
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