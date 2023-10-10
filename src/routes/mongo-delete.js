const express  = require('express');
const MongoConnect = require('../utils/mongoConnect.js');

//Creo l'oggetto (miniapplicazione) "router"
const router = express.Router();
router.use(express.json());

router.get('/:id', async (req, res) => {
    const taskCollection = MongoConnect.blogDatabase.collection('vuetasks');
    const id = Number(req.params.id);
    const findQueryOne = {fakeid : id};
    const ris = await taskCollection.deleteOne(findQueryOne);
    console.log(`Numero di documenti cancellati: ${ris.deletedCount}`);
  //  res.end();
    res.json({"eliminato":"OK"})

});

module.exports = router; 