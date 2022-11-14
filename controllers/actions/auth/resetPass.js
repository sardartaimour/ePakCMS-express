module.exports = async (req, res, next) => {
    try {
        // let { password, user_id, reset_code } = req.body;
        // password = helper.makeHash(password);

        // code = await ResetPassword.findOne({
        //     where: { resset_code: reset_code, user_id }
        // });

        // if (!code) {
        //     throw new NotFoundError({ message: 'forgotpass_verify_reset_code' });
        // }

        // await User.update({
        //     user_password: password
        // }, {
        //     where: { user_id }
        // })

        // await ResetPassword.destroy({
        //     where: { user_id }
        // })

        return res.json({});
    } catch (e) {
        next(e);
    }
}