const cookieSession = require("cookie-session");
const express = require("express");
const app = express();
let port = app.listen(process.env.PORT
    || 4001);
if (typeof port === Number) {
    console.log('number')
} else {
    port = 4000
}
const urlObject = require('./baseURL')
const passport = require("passport");
const passportSetup = require("./config/passport-setup");
const session = require("express-session");
const authRoutes = require("./routes/auth-routes");
const userRoutes = require('./routes/user-routes')
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // parse cookie header

// use with docker-compose.  This points to the mongoDB in the container
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://mongodb', { useNewUrlParser: false });

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/kb', { useNewUrlParser: true });
const connection = mongoose.connection;
const baseURL = urlObject.baseURL
connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

app.use(
    cookieSession({
        name: "session",
        keys: [keys.COOKIE_KEY],
        maxAge: 24 * 60 * 60 * 100
    })
);

// parse cookies
app.use(cookieParser());

// initalize passport
app.use(passport.initialize());
// deserialize cookie from the browser
app.use(passport.session());

// set up cors to allow us to accept requests from our client
// app.use(
//     cors({
//         origin: baseURL, // allow to server to accept request from different origin
//         methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
//         credentials: false,
//         "preflightContinue": true
//         // allow session cookie from browser to pass through
//     })
// );


// set up routes
app.use("/auth", authRoutes);
app.use('/user', userRoutes)
const authCheck = (req, res, next) => {
    if (!req.user) {
        res.status(401).json({
            authenticated: false,
            message: "user has not been authenticated"
        });
    } else {
        next();
    }
};

// if it's already login, send the profile response,
// otherwise, send a 401 response that the user is not authenticated
// authCheck before navigating to home page
// app.get("/", authCheck, (req, res) => {
//     console.log(process.env, '-------------env---------------')

//     res.status(200).json({
//         authenticated: true,
//         message: "user successfully authenticated",
//         user: req.user,
//         cookies: req.cookies
//     });
// });
// // app.get("/", authCheck, (req, res) => {
// //     res.status(200).json({
// //         authenticated: true,
// //         message: "user successfully authenticated",
// //         user: req.user,
// //         cookies: req.cookies
// //     });
// // });

// connect react to nodejs express server
console.log(port, '-----pporttttt')
app.listen(port, () => console.log(`Server is running on port ${port}!`));
