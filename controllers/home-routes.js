const router = require('express').Router();
const { User} = require('../models');
const withAuth = require('../utils/auth');
router.get('/', async (req, res) => {
    res.render('homepage')
});

router.get('/login', (req, res) => {
   //If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
   //Otherwise, render the 'login' template
    res.render('login');
  });
module.exports = router;