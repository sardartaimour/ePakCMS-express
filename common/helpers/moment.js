const moment = require('moment-timezone');

moment.tz.setDefault(config.default_timezone)

module.exports = moment;