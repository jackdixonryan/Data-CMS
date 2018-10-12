const router = require('express').Router();
const path = require('path');
const passport = require('passport');

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/login.html'));
});

router.get('/logout', (req, res) => {
  // handle with passport...
  res.send('logging out...');
});

router.get('/github', (req, res) => {
  // handle with passport
  res.send('logging in with github.')
});

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/redirect.html'));
});


module.exports = router;