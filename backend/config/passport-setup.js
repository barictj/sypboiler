var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var keys = require('./keys')
var User = require('../models/user');
const urlObject = require('../baseURL')
const apiURL = urlObject.apiURL

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(e => {
      done(new Error("Failed to deserialize an user"));
    });
});



passport.use(new GitHubStrategy({
  // if you are using Heroku you could use env variables piped in similar to MONGODB_URI
  // local host 
  clientID: keys.clientID,
  clientSecret: keys.clientSecret,
  callbackURL: apiURL
},
  async (accessToken, refreshToken, profile, done) => {
    var searchQuery = {
      name: profile.username
    };

    var updates = {
      name: profile.username,
      someID: profile.id,

    };
    var options = {
      upsert: true,
      new: true
    };

    // update the user if s/he exists or add a new user
    User.findOneAndUpdate(searchQuery, updates, options, async function (err, user) {
      if (err) {
        return await done(err);
      } else {
        return await done(null, user);
      }
    });
  }

));

module.exports = passport;