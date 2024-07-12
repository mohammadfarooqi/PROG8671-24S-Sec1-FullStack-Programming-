module.exports = (req, res) => {
  // const test = req.session.validationErrors;
  // req.session.validationErrors = null;

  var username = '';
  var password = '';
  const data = req.flash('data')[0];

  if (typeof data != 'undefined') {
    username = data.username;
    password = data.password;
  }

  res.render('register', {
    // errors: test,
    errors: req.flash('validationErrors'),
    username: username,
    password: password,
  });
};
