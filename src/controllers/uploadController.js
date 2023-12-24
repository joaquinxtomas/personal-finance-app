const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const xlsx = require('xlsx');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const getView = async (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};

/* ('/upload', upload.single('fileInput') */

const uploadFile = async (req, res) => {
  const file = req.file;

  if (file) {
    const workbook = xlsx.read(file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(sheet);

    res.send(jsonData);
  } else {
    res.send('select other file');
  }
};

module.exports = {
    getView,
    uploadFile
}
