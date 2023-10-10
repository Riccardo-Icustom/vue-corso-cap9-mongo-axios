const express  = require('express');
const MongoConnect = require('../utils/mongoConnect.js');

//Creo l'oggetto (miniapplicazione) "router"
const router = express.Router();
router.use(express.json());

router.get('/:id', async (req, res) => {
    const taskCollection = MongoConnect.blogDatabase.collection('vuetasks');
    const id = Number(req.params.id);
    const findQueryOne = {fakeid : id};
    const ris = await taskCollection.findOne(findQueryOne);
    console.log(ris);
    res.json(ris)
});

module.exports = router; 