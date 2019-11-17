
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const usePost = (url: string, postDetails) => {
    const [posted, setPosted] = useState(0)
    const [loading, setLoading] = useState()
    //only post if there is something in post
    useEffect(() => {
        if (Object.keys(postDetails).length === 0) {
            return
        }
        setLoading(true)
        axios({
            method: 'post',
            url: url,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            },
            data: postDetails
        })
            .then(res => {
                if (res.status === 200) {
                    setLoading(false)
                    setPosted(res.status)
                } else {
                    return
                }

                return [posted, loading]
            })
    }
        , [postDetails]);

    return { posted, loading }
};

export default usePost