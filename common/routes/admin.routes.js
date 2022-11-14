const express = require('express');
const router = express.Router();

// router.use(middleware.isAuthenticated, middleware.isSuperAdmin);

router.get('/', (req, res, next) => {
    try {
        res.send('<h1>success</h1>');
    } catch (e) {
        res.json({});
    }
});

// router
//     .route('/')
//     .get()

module.exports.router = router;
module.exports.basePath = 'admin';