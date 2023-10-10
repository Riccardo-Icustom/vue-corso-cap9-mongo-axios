const express  = require('express');
const MongoConnect = require('../utils/mongoConnect.js');
//const ObjectId = require('mongodb').ObjectId;

//Creo l'oggetto (miniapplicazione) "router"
const router = express.Router();
router.use(express.json());

router.post('/:id', async (req, res) => {
    const taskCollection = MongoConnect.blogDatabase.collection('vuetasks');
    const id = Number(req.params.id);        
    //const o_id = new ObjectId(id);
    const findQueryOne = {fakeid : id};
    const updateDoc = { $set: { favorite: req.body.favorite} };

    const ris = await taskCollection.updateOne(
        findQueryOne,
        updateDoc,
        {}
        );
      console.log(ris);
      console.log(`Numero di documenti modificati: ${ris.modifiedCount}`)
      res.json({"aggiornato":"OK"})
    
  });

  module.exports = router; 