import React, { useState, useEffect, useContext } from 'react';

import './style/home-logo.scss'
const HomeLogo = (props) => {





    return (
        <div className='home-logo-root'>
            <h1>Welcome to the </h1>
            <div className='home-logo-container'>
                <div>
                    Stack
            </div>
                Your
            <div>
                    Pr<img src="../../../static/download.png" className='imgmongo' />ps
            </div>


            </div>
            <h1>BoilerPlate</h1>
        </div>
    );
};

export default HomeLogo;