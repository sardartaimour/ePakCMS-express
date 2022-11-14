const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const LocalStrategy = require('passport-local').Strategy;

// const findByToken = (token, done) => {
//     service.jwt.verify(token, config.tokenSecret, {}, (err, payload) => {
//         if (err) {
//             return done(err);
//         }

//         User.findOne({
//             where: {
//                 user_id: payload.user_id
//             },
//             attributes: {
//                 exclude: ['id', 'user_password']
//             }
//         }).then(user => {
//             done(null, user);
//         }).catch(done)
//     });
// }

// const validateCredentials = async (email, password, next) => {
//     try {
//         const user = await User.findOne({
//             where: {
//                 user_email: email
//             },
//             attributes: ['user_id', 'user_email', 'user_password', 'change_password_required']
//         });

//         if (!user) {
//             return next(
//                 {
//                     message: 'Incorrect email.'
//                 },
//                 false
//             );
//         }

//         if (helper.makeHash(password) !== user.user_password) {
//             return next(
//                 {
//                     message: 'Invalid Password'
//                 },
//                 false
//             );
//         }

//         return next(
//             null,
//             {
//                 email: user.user_email,
//                 user_email: user.user_email,
//                 user_id: user.user_id,
//                 isAdmin: await helper.isSuperAdmin(user.user_id),
//                 change_password_required: user.change_password_required
//             },
//             {
//                 message: 'Logged In Successfully'
//             }
//         );
//     } catch (err) {
//         return next(
//             err,
//             false
//         );
//     }
// }

// passport.use(new BearerStrategy(findByToken));
// passport.use(new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password'
// }, validateCredentials));

module.exports = passport;
// module.exports.validateCredentials = validateCredentials;