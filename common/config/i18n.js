const i18n = require("i18n");

i18n.configure({
    directory: __dirname + '/../assets/i18n',
    updateFiles: false,
    defaultLocale: 'en'
});

module.exports = i18n;