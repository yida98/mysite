import React, { useCallback, useEffect, useState } from 'react';
import './Page.css';

function Page() {

    return (
        <div className="page">
            <div className="tile"></div>
            <div className="title">
                <h2>Journ'</h2>
                <p>the journaling app</p>
            </div>
            <div className="content">
                <p>
                Journ' is an intuitive journaling app for people who just want to write without distractions.
                </p>
            </div>
        </div>
    )
}

export default Page;