const router = require('express').Router();
const passport = require('passport');


// auth login
router.get('/home', (req, res) => {
    res.render('home', { user: req.user });
});

// auth logout
router.get("/logout", (req, res, next) => {
    req.logout(req.user, err => {
      if(err) return next(err);
      res.redirect("/");
    });
  });

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));


router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/');
});

module.exports = router;