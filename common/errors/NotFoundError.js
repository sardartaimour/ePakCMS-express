module.exports = class NotFoundError extends Error {
    constructor(payload) {
        super();

        this.payload = payload;
        this.status = 404;
    }

    handle({ req, res }) {
        if (this.payload && this.payload.message) {
            // req.user
            // return res.status(this.status).json({
            //     message: __({ phrase: this.payload.message, locale: req.param.locale })
            // })
        }

        return res.status(this.status).json({})
    }
}