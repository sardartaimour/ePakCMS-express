module.exports = async (req, res, next) => {
    try {
        // if (!req.user) {
        //     return res.json({
        //         user: null,
        //         superAdmin: null,
        //         isSystemAdmin: null
        //     });
        // }

        // const [isSuperAdmin, isSystemAdmin] = await helper.promise.all ([
        //     helper.isSuperAdmin(req.user.user_id),
        //     helper.isSystemAdmin(req.user.user_id)
        // ]);
        // if (req.user && req.user.change_password_required) {
        //     return res.json({
        //         changePassword: true,
        //         user: req.user,
        //         superAdmin: isSuperAdmin,
        //         systemAdmin: isSystemAdmin,
        //         message: __({
        //             phrase: 'tmp_pass_change_request',
        //             locale: req.param.locale
        //         })
        //     });
        // }

        // let superAdminDetails = [];

        // if (!isSuperAdmin) {
        //     superAdminDetails = await helper.promise.all([
        //         service.academy.isAdminInAnyAcademy(req.user.user_id),
        //         service.user.getCompanyIdsOfUser(req.user.user_id)
        //     ]);
        // }

        // return res.json({
        //     user: req.user,
        //     isAdminInAnyAcademy: superAdminDetails[0],
        //     companies: superAdminDetails[1],
        //     superAdmin: isSuperAdmin,
        //     systemAdmin: isSystemAdmin,
        // });
    } catch (e) {
        next(e);
    }
}