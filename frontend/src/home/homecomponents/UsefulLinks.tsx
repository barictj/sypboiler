import React, { useState, useEffect, useContext } from 'react';

import './style/useful-links.scss'

const UsefulLinks = (props) => {

    return (
        <>
            <h3>Helpful Links</h3>
            <div className='useful-links'>
                <p><a href='http://www.stackyourprops.com/'>Stack Your Props</a></p>
                <p><a href='https://stackoverflow.com/'>stackoverflow</a></p>
                <p><a href='https://reactjs.org/'>React Docs</a></p>
                <p><a href='http://expressjs.com/'>Express Docs</a></p>

            </div>

        </>
    );
};

export default UsefulLinks;
