const userRoutes = require('express').Router()
const User = require('../models/user')
const bodyParser = require('body-parser')
const urlObject = require('../baseURL')

const baseURL = urlObject.baseURL
userRoutes.use(bodyParser.json())
userRoutes.use(function (req, res, next) {
    res.set("Access-Control-Allow-Origin", baseURL); // restrict it to the required domain
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    // Set custom headers for CORS
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header, access-control-allow-credentials");

    next()
})

userRoutes.route('/').get(function (req, res) {
    User.find()
        .then(users => {
            res.json(users)
        })
})

module.exports = userRoutes