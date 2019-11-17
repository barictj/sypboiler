import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url: string) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (url) {
            axios({
                method: 'get',
                url: url,
                // headers: {
                //     Accept: "application/json",
                //     "Content-Type": "application/json",
                //     "Access-Control-Allow-Credentials": true,
                // }
            })
                .then(res => {
                    if (res.data) {
                        setData(res.data)
                        setLoading(false)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
        , [url]);
    return [data, loading];
};

export default useFetch