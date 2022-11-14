const jwt = require('jsonwebtoken');
const jwkToPem = require('jwk-to-pem');

exports.issue = (payload = {}, tokenSecret = config.tokenSecret, options = {}) => {
    
    if (!options || (options && !options.expiresIn)) {
        options = {
            ...options,
            expiresIn: config.maxTokenAge
        }
    }

    return jwt.sign(payload, tokenSecret, options);
}

exports.verify = (token, secret = config.tokenSecret, options = {}, next) => {
    return jwt.verify(
        token,
        secret,
        options,
        next
    );
}

exports.decode = (token, options = {}) => {
    return jwt.decode(token, options);
}

exports.jwkToPem = (key) => {
    return jwkToPem(key);
}