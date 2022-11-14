module.exports = class SequelizeErrorHandle extends Error {
    constructor(err) {
        super();

        this.err = err;
    }

    handle({ req, res }) {
        if (this.err.original) {
            switch (this.err.original.code) {
                case 'ER_EMPTY_QUERY':
                    res.json({});
                    break;

                case 'ER_BAD_FIELD_ERROR':
                    console.error(this.err)
                    res.status(500).json({ message: 'Please make sure there is no pending data migrations', trace: this.err });
                    break;
                    
                default:
                    console.error(this.err)
                    res.status(500).json({ message: 'Unhandled mysql exception', trace: this.err });
                    break;
            }
            return;
        }

        return res.status(500).json({ error: this.err })
    }

}