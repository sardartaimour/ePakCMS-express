module.exports = async (req, res, next) => {
    try {
        let { reset_code } = req.params;
        // reset_code = await ResetPassword.findOne({
        //     where: { resset_code: reset_code }
        // });

        // if (!reset_code) {
        //     throw new NotFoundError({ message: 'forgotpass_verify_reset_code' });
        // }

        res.json({ reset_code })
    } catch (e) {
        next(e);
    }
}