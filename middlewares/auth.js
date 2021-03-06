const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const { User } = require('../models');

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    session: false
  },
  async function (email, password, done) {
    const user = await User.findOne({ where: { email: email } });
    if (!user) return done(null, false, { message: 'Incorrect username.' });
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  }
));

passport.serializeUser(function(user, done) {  
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {  
  User.findByPk(id).then(function(user) {
    done(null, user);
  }).catch(function(err) {
    done(err, null);
  });
});

