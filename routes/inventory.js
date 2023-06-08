var express = require('express');
var router = express.Router();

const { inventoryItem } = require('../models');

router.post('/', async (req, res) => {
    try {
        const newItem = await message.create(req.body);
        res.status(201).json(newItem);
      } catch (error) {
        res.status(500).json({ message: 'Error adding inventory item', error });
      }
    });