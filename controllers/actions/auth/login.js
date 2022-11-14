module.exports = (req, res, next) => {
    // req.tracker.markAsync();
    
    // service.passport.authenticate('local', async (err, user, info) => {
    //     if (err) {
    //         return next(new BadError({ message: err.message }));
    //     }

    //     const token = service.jwt.issue({
    //         user_id: user.user_id,
    //         user_email: user.user_email
    //     });

    //     res.json({
    //         message: info.message,
    //         user: user,
    //         token: token
    //     });

    //     if (req.headers && req.headers.tempuserid) {
    //         await service.sequence.syncUserSequenceProgress(user.user_id, req.headers.tempuserid);
    //     }

    //     req.tracker.complete();
    // })(req, res, next);
}