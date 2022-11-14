module.exports = class DBFailureError extends Error {
    constructor(payload = {}) {
        super();

        this.payload = payload;
        this.status = 500;
    }

    handle({ req, res }) {
        // if (this.payload && this.payload.message) {
        //     // req.user
        //     return res.status(this.status).json({
        //         message: this.payload.message
        //     });
        // }

        return res.status(this.status).json({})
    }
}