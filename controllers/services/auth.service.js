module.exports = {
    // sendTemporaryPasswordEmailToLtiRegisteredUser: async user => {
    //     const extraData = _.omit(user.extra_data, 'isLti');

    //     const templateData = {
    //         url: '',
    //         user_email: user.user_email,
    //         user_password: extraData.temporary_password
    //     };

    //     user.extra_data = extraData;
    //     user.change_password_required = 1;

    //     const temporaryPasswordEmail = new TemporaryPasswordEmail(templateData);
    //     temporaryPasswordEmail.setUser(user);

    //     await temporaryPasswordEmail.send();
    //     await user.save();
    // },

    // sendWelcomeEmail: async user => {
    //     const welcomeEmail = new WelcomeEmail(user);
    //     welcomeEmail.setUser(user);

    //     await welcomeEmail.send();
    // },

    // createInvitedCourseSubscriptionsForUser: async user => {
    //     const courseInvites = await CourseInvite.findAll({
    //         where: {
    //             email: user.user_email
    //         }
    //     });

    //     if (courseInvites.length === 0) {
    //         return true;
    //     }

    //     await helper.promise.map(courseInvites, async(courseInvite) => {
    //         await CourseSubscriber.create({
    //             user_id: user.user_id,
    //             course_id: courseInvite.course_id,
    //             academy_id: courseInvite.academy_id,
    //             subscription_date: courseInvite.created_on,
    //             expiry_date: courseInvite.expiry_date,
    //             status: 'subscribed',
    //             completion_percentage: 0.00,
    //             is_due: false
    //         });

    //         return service.aws.pushMessageToSQS({
    //             QueueUrl: config.SYNC_COURSE_SUBSCRIPTION_SQS_URL,
    //             body: {
    //                 type: 'CREATE',
    //                 subscriber: {
    //                     user_id: user.user_id,
    //                     course_id: courseInvite.course_id,
    //                     academy_id: courseInvite.academy_id,
    //                     subscription_date: courseInvite.created_on
    //                 }
    //             }
    //         });
    //         // return helper.promise.all([
    //         //     CourseSubscriber.create({
    //         //         user_id: user.user_id,
    //         //         course_id: courseInvite.course_id,
    //         //         academy_id: courseInvite.academy_id,
    //         //         subscription_date: courseInvite.created_on,
    //         //         expiry_date: courseInvite.expiry_date,
    //         //         status: 'subscribed',
    //         //         completion_percentage: 0.00
    //         //     }),
    //         //     service.academy.createAcademyLearnerIfNotExist({
    //         //         academy_id: courseInvite.academy_id,
    //         //         user_id: user.user_id
    //         //     })
    //         // ]);
    //     });

    //     await CourseInvite.destroy({
    //         where: {
    //             email: user.user_email
    //         }
    //     })

    //     return true;
    // }
}