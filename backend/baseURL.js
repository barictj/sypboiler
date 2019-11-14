
let urlObject;
if (process.env.THIS === 'development') {
    urlObject = {
        apiURL: 'http://localhost:4000/auth/github/callback',
        baseURL: 'http://localhost:3000'
    }
} else if (process.env.THIS === 'production') {
    urlObject = {
        apiURL: 'http://yourcallback.com',
        baseURL: 'www.redirect.com'
    }
} else {
    urlObject = {
        apiURL: 'http://yourcallback.com',
        baseURL: 'www.redirect.com'
    }
}
module.exports = urlObject