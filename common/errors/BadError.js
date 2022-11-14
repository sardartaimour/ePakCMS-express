module.exports = class AccessDeniedError extends Error {
    constructor(payload = {}) {
        super();

        this.payload = payload;
        this.status = 400;
    }

    handle({ req, res }) {
        // if (this.payload && this.payload.message) {
        //     let message = '';

        //     if (Array.isArray(this.payload.message)) {
        //         message = this.payload.message.map(part => {
        //             if (part.translate) {
        //                 return __({ phrase: part.content, locale: req.param.locale })
        //             }

        //             return part.content;
        //         }).join(' ');
        //     } else {
        //         message = __({ phrase: this.payload.message, locale: req.param.locale });
        //     }
            
        //     return res.status(this.status).json({
        //         message
        //     })
        // }

        return res.status(this.status).json({})
    }
}