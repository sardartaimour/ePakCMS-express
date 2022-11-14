module.exports = async (req, res, next) => {
    try {
        // const email = req.param.email;

        // const user = await User.findOne({
        //     where: {
        //         user_email: email
        //     },
        //     attributes: ['user_id', 'user_email', 'extra_data']
        // });

        // if (!user) {
        //     throw new BadError({ message: 'forgotpass_user_not_found' })
        // }

        // if (user.extra_data && user.extra_data.isLti) {
        //     service.auth.sendTemporaryPasswordEmailToLtiRegisteredUser(user);

        //     return res.json({
        //         step: 'password',
        //         lti: true
        //     });
        // }

        return res.json({
            step: 'password'
        });
    } catch (e) {
        next(e);
    }
}