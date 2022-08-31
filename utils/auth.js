const withAuth = (req, res, next) => {
  // TODO: If the user is not logged in, redirect the user to the login page
  
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
  });
  // TODO: If the user is logged in, allow them to view the paintings
};

module.exports = withAuth;
