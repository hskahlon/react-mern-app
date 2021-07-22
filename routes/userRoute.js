const express = require('express');
router = express.Router();

usersRoute = require('../controllers/usersController');

router.get("/", usersRoute.usersControllers);

modulue.exports = router;