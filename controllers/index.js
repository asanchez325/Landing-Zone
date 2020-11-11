const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const HistoryRoutes = require('./passedRental-routes.js');
const newRentalRoutes = require('./newRental-routes');
const processOrderRoutes = require('./processOrder-routes.js');
const newClientRoutes = require('./newClient-routes');

router.use('/', homeRoutes);
router.use('/History', HistoryRoutes);
router.use('/newRental', newRentalRoutes);
router.use('/processOrder', processOrderRoutes);
router.use('/newClient', newClientRoutes);
router.use('/api', apiRoutes);

module.exports = router;