const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
const authRoutes = require('./auth');

router.use('/api', apiRoutes);
router.use('/api', authRoutes);

// router.use((req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/')
// })

module.exports = router;