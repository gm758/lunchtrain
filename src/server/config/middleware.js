const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');

module.exports = (app, express) => {
  app.use(session({ secret: 'asdfqwertty' }));
  app.use(morgan('dev'))
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, '../../../static')));
  app.use('/build', express.static(path.join(__dirname, '../../client')));
  app.use(passport.initialize());
  app.use(passport.session());
};

