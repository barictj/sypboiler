import React, { useEffect } from 'react';
import Router from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

import { addUser, logoutUser } from '../../../store/actions/userActions'
import Data from '../../../../env'
import useAuth from '../../../hooks/checkAuth'

import UserInterface from '../../../interfaces/UserInterface'

import './styles/buttons.scss'

interface theseProps {
    user: UserInterface;
    isAuthenticated: boolean;

}
const GitHubLoginButton = () => {
    //get user information if logged in
    const url: string = `${Data.baseAPIEndpoint}/auth/login/success`
    const [theseProps, loading] = useAuth(url)
    const dispatch: any = useDispatch()
    //if user logs in send user to the store  
    useEffect(() => {
        if (theseProps && theseProps.user) {
            dispatch(addUser(theseProps.user))
        }
    }
        , [theseProps]);
    let button;
    //on logout remove user from store and push to logout auth on backend
    const onClick = (e) => {
        e.preventDefault()
        dispatch(logoutUser())
        Router.push(`${Data.baseAPIEndpoint}/auth/logout`)
    }
    //get user from store if there is one
    const userState: theseProps = useSelector(state => state)
    if (userState.isAuthenticated) {
        button = (
            <>
                <div className='githubbuttondiv' onClick={onClick} >
                    Logout
                </div>
            </>
        )
    } else if (theseProps && theseProps.user) {
        button = (
            <div className='githubbuttondiv' onClick={onClick} >
                Logout
                </div>
        )
    } else {
        button = (
            <a href={`${Data.baseAPIEndpoint}/auth/github`} className='githubbutton'>
                <div className='githubbuttondiv'>
                    <img src='../../static/git-hub.png' className='img-git' />Login With GitHub
                </div>
            </a >
        )
    }
    return (
        <div style={{ paddingTop: '.4rem' }}>
            {button}
        </div>
    );
};

export default GitHubLoginButton;