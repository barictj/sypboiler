var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;

var User = require('../models/user');
const urlObject = require('../baseURL')
console.log(urlObject, '----passport----')
const apiURL = urlObject.apiURL
passport.serializeUser(function (user, done) {
  console.log(user.id, 'serialize')
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log(id, 'deserialize')

  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(e => {
      done(new Error("Failed to deserialize an user"));
    });
});



passport.use(new GitHubStrategy({
  // heroku app
  // clientID: 'd3ebb6fa80ac1eeb77bc',
  // clientSecret: '89de2230068d026363fbbe72caf8daffc5902d8d',
  // local host 
  clientID: 'd986c94f07bff8bc5666',
  clientSecret: '47b1cd41d86bf663fbc6227d9dc9a7495b9f71c2',
  callbackURL: apiURL
},
  async (accessToken, refreshToken, profile, done) => {
    console.log(profile, 'strategy')
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
        console.log('github.js', user)
        return await done(null, user);
      }
    });
  }

));

module.exports = passport;