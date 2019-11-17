import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import UserInterface from '../../interfaces/UserInterface';


const User = (props) => {
    const user: UserInterface = useSelector(state => state.user)
    return (
        <>
            <p>
                {user && <><p>Username:  {user.name}</p><p>User ID:  {user._id}</p> </>}
            </p>

        </>
    );
};

export default User;
