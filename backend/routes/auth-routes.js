const router = require("express").Router();
const passport = require("passport");
const cors = require("cors");

const urlObject = require('../baseURL')
let baseURL = urlObject.baseURL

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", baseURL); // restrict it to the required domain
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    //     // Set custom headers for CORS
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With, access-control-allow-credentials");
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
    next()
})
router.use(function (res, req) {
    cors({
        origin: baseURL, // allow to server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
        credentials: true,
        // "preflightContinue": true
        // allow session cookie from browser to pass through
    })
}
);

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.json({
            success: true,
            message: "user has successfully authenticated",
            user: req.user,
            cookies: req.cookies
        });
    } else {
        res.json('no users')
    }
});
// router.use(function (req, res, next) {

//     console.log('===== authroutes =======')
//     console.log(req.session)
//     console.log(req.user)
//     console.log('===== END =======')
//     next()
// })
// when login failed, send failed msg
router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "user failed to authenticate."
    });
});

// When logout, redirect to client
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(baseURL);
});


// redirect to home page after successfully login via github
router.get("/github", passport.authenticate("github"));

// redirect to home page after successfully login via github
router.get(
    "/github/callback",
    passport.authenticate("github", {
        successRedirect: baseURL,
        failureRedirect: baseURL
    })
);

module.exports = router;
