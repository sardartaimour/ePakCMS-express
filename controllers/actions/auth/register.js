module.exports = async (req, res, next) => {
    try {
        // const userData = {
        //     user_fname: req.body.user_fname,
        //     user_lname: req.body.user_lname,
        //     user_email: req.body.user_email,
        //     user_password: helper.makeHash(req.body.user_password),
        //     extra_data: {},
        //     created_at: helper.moment().format("YYYY-MM-DD HH:mm:ss"),
        //     updated_at: helper.moment().format("YYYY-MM-DD HH:mm:ss"),
        // }

        // const userExists = await service.user.userExists({
        //     user_email: userData.user_email
        // });

        // if (userExists) {
        //     return next(new BadError({ message: 'register_user_exists' }));
        // }

        // const user = await User.create(userData);

        // service.auth.sendWelcomeEmail(user.toJSON());
        // service.auth.createInvitedCourseSubscriptionsForUser(user);

        // const redirect_to = req.param.redirect_to || req.param.redirect;

        // const token = service.jwt.issue({
        //     user_id: user.user_id,
        //     user_email: user.user_email
        // });

        // return res.json({
        //     message: __({
        //         phrase: 'register_signup_success',
        //         locale: req.param.locale
        //     }),
        //     redirect: redirect_to,
        //     user: user,
        //     token: token
        // });
    } catch (e) { next(e); }
}