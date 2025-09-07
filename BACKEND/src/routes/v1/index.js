const express = require('express');
const router = express.Router();
const { touristProfileController,  } = require('../../controllers');

router.post('/', touristProfileController.createTourist);
router.get('/:id', touristProfileController.getTourist);


module.exports = router;