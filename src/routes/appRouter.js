const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const express = require('express');
const uploadController = require('../controllers/uploadController');


const router = express.Router();

router.get('/', uploadController.getView);
router.post('/upload', upload.single('fileInput'), uploadController.uploadFile);

module.exports = router;
