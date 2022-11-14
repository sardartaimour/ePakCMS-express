const express = require('express');
const router = express.Router();

// router.route('/login').post(handle('auth.login'));
// router.route('/forgot-pass').post(handle('auth.forgotPass'));
// router.route('/verify/:reset_code').post(handle('auth.verifyCode'));
// router.route('/reset-pass').post(handle('auth.resetPass'));
// router.route('/register').post(handle('auth.register'));
// router.route('/verify-email').post(handle('auth.verifyEmail'));
// router.route('/me').get(middleware.allPass, action.auth.me);

module.exports.router = router;
module.exports.basePath = 'auth';