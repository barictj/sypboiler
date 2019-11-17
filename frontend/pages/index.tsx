import React, { useEffect } from 'react';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';
//for use with default fetch NextJS

import Data from '../env'
import GitHubLoginButton from '../src/user/usercomponents/buttons/GitHubLoginButton';
import User from '../src/user/usercontainers/User';
import UserInterface from '../src/interfaces/UserInterface'
import HomeLogo from '../src/home/homecomponents/HomeLogo';

import '../styles/index-styles.scss'
import UsefulLinks from '../src/home/homecomponents/UsefulLinks';


const index = (props) => {
    return (
        <>
            <HomeLogo />

            <div className='home-container'>
                <div className='home-child'>
                    < GitHubLoginButton />
                    < User />
                </div>
                <div className='home-child'>
                    <UsefulLinks />
                </div>
            </div>

        </>
    );
};

//use getInitialProps if you want the server to render the props.  Good for SEO
index.getInitialProps = async ({ req }) => {
    let users: UserInterface
    const res = await axios({
        method: 'get',
        url: `${Data.baseAPIEndpoint}/user/`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
        }
    })
        .then(res => {
            users = res.data
        })

    return { users }
}
export default index;