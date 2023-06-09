var express = require('express');
var router = express.Router();

const { Inventory } = require('../models');

router.post('/', async (req, res) => {
    try {

        const {item, quantity, quantity_metric, is_perishable, image} = req.body;
        const newItem = await Inventory.create({
            item,
            quantity,
            quantity_metric,
            is_perishable,
            image
            });
        res.status(201).json(newItem);
      } catch (error) {
        res.status(500).json({ message: 'Error adding Inventory item', error });
      }
    })



router.get('/', async (req, res) => {
        try {
            //This will need to be modified to .findALl( where: item.belongsToId = the user Id)

            const items = await Inventory.findAll();

      

            res.json(items);
        } catch (error) {
            res.status(500).json({ message: "Error retrieving Inventory items", error });
        }
    })

    module.exports = router;