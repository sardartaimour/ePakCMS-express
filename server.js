const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const bootstrap = require('./bootstrap');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const app = express();

global.__rootdir = __dirname;

bootstrap.loadConfig();
bootstrap.loadHelpers(app);
bootstrap.loadServices(app);
bootstrap.loadLocales(app);
bootstrap.loadGlobals(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.enable('trust proxy');

app.use(middleware.httpsRedirect);

app.use(logger(constant.environments.DEV));
app.use(fileUpload());
app.use(express.json({ limit: '5MB' }));
app.use(passport.initialize());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

bootstrap.loadParams(app);
bootstrap.loadRoutes(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return next(new NotFoundError({ message: 'Method not supported' }))
});

// error handler
app.use(middleware.errorHandler);

module.exports = app;