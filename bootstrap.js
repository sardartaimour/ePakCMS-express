module.exports = {
    loadGlobals: app => {
        require(`${__dirname}/models`).bootstrap();
        require(`${__dirname}/common/middlewares`).bootstrap();
        require(`${__dirname}/common/errors`).bootstrap();
        require(`${__dirname}/controllers/actions`).bootstrap();

        const lodash = require('lodash');
        global._ = lodash;

        global.handle = key => {
            let handleValidator = validate;
            let handleAction = action;

            key.split('.').forEach(part => {
                handleValidator = handleValidator[part];
                handleAction = handleAction[part];
            });

            return [
                handleValidator,
                handleAction
            ]
        }
    },

    loadConfig: _ => {
        require(`${__dirname}/common/config`).bootstrap();
        require(`${__dirname}/common/config/constants`).bootstrap();
    },

    loadLocales: app => {
        const i18n = require(`${__dirname}/common/config/i18n`);

        app.use(i18n.init);
        app.use((req, res, next) => {
            res.locals.__ = res.__;

            next();
        });

        global.__ = i18n.__;
    },

    loadServices: app => {
        const services = require(`${__dirname}/controllers/services`);
        services.bootstrap(app);
    },

    loadHelpers: app => {
        const helpers = require(`${__dirname}/common/helpers`);
        helpers.bootstrap(app);
    },

    loadRoutes: app => {
        require(`${__dirname}/common/routes`).bootstrap(app);
    },

    loadParams: app => {
        app.use((req, res, next) => {
            req.param = {};

            Object.keys(req.query).forEach(param => {
                req.param[param] = req.query[param];

                if (req.param[param] === 'null') {
                    return req.param[param] = null;
                }
                if (req.param[param] === 'undefined') {
                    return req.param[param] = undefined;
                }
            });

            Object.keys(req.body).forEach(param => {
                req.param[param] = req.body[param];
            });

            req.param['locale'] = req.path.split('/')[2];

            next();
        });
    }
}