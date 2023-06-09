var express = require('express');
var router = express.Router();

const { inventory } = require('../models');

router.post('/', async (req, res) => {
    try {
        const newItem = await inventory.create(req.body);
        res.status(201).json(newItem);
      } catch (error) {
        res.status(500).json({ message: 'Error adding inventory item', error });
      }
    })

    router.get('/', async (req, res) => {
        try {
            //This will need to be modified to .findALl( where: item.belongsToId = the user Id)
            const items = await inventory.findAll();
            res.json(items);
        } catch (error) {
            res.status(500).json({ message: "Error retrieving inventory items", error });
        }
    })

    module.exports = router;