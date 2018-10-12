const router = require('express').Router();
const authRoutes = require('./routes');

router.use('/auth', authRoutes);

module.exports = router;