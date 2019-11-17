import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Data from '../../env'
const checkAuth = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (url) {
            fetch(`${Data.baseAPIEndpoint}/auth/login/success`, {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                    // "Cookie": 'theseralkjdfasdoifthe'
                }
            })
                .then(response => {
                    if (response.status === 200) return response.json();
                    throw new Error("failed to authenticate user");
                })
                .then(responseJson => {

                    setData({
                        authenticated: true,
                        user: responseJson.user
                    });
                    setLoading(false)
                })
                .catch(error => {
                    setData({
                        authenticated: false,
                        error: "Failed to authenticate user"
                    });
                });
        }
    }
        , [url]);
    return [data, loading];
};

export default checkAuth