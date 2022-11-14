module.exports = async (req, res, next) => {
    try {
        // const email = decodeURIComponent(req.body.email);
        // const redirect_to = req.param['redirect_to'];

        // const user = await User.findOne({
        //     atreibutes: ['user_id', 'user_name', 'user_fname', 'user_lname','user_email'],
        //     where: {
        //         user_email: email
        //     }
        // })

        // if (!user) {
        //     throw new NotFoundError({ message: 'forgotpass_user_not_found' });
        // }

        // const resset_code = service.content.uniqid();
        // const request_time = helper.moment().unix();
        // const user_id = user.user_id;

        // await ResetPassword.destroy({
        //     where: {
        //         user_id
        //     }
        // })

        // await ResetPassword.create({
        //     user_id,
        //     resset_code,
        //     request_time
        // })

        // const templateName = 'forgotpassword';
        // const templateData = {
        //     resetLink: `${config.base_url}user/forgotpass/${resset_code}?redirect_to=${encodeURI(redirect_to)}`
        // };
        // const passwordResetEmail = new PasswordResetEmail(templateData);

        // passwordResetEmail
        //     .setUser(user)
        //     .setTemplateName(templateName)
        //     .send();
        return res.json({});
    } catch (e) {
        next(e);
    }
}