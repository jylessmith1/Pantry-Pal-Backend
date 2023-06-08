const express = require('express');
const router = express.Router();
const { shopping_list } = require('../models');

router.get('/', async (req, res) => {
    try {
        //This will need to be modified to .findALl( where: item.belongsToId = the user Id)
        const items = await shopping_list.findAll();
        let stuff = [{ "id": 1, "name": "from the top rope", "image": "banana.jpg" }, { "id": 2, "name": "Randy Orton", "image": "steak.jpg" }]
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving shopping list items", error });
    }
})

module.exports = router;