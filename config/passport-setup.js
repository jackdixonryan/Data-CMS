const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/User');

passport.use(
  new GoogleStrategy({
    // options...
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/api/auth/google/redirect'
  }, (accessToken, refreshToken, profile, done) => {
    // passport callback function.
    User.findOne({googleID: profile.id}).then(currentUser => {
      if (currentUser){
        console.log('User already exists.');
      } else {
        new User({
          username: profile.displayName,
          googleID: profile.id
        }).save().then(newUser => console.log('new user created:' + newUser));
      }
    })
    // console.log(profile);
  })
)
