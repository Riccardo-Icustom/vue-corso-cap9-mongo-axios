const express  = require('express');
const MongoConnect = require('../utils/mongoConnect.js');
//const ObjectId = require('mongodb').ObjectId;

//Creo l'oggetto (miniapplicazione) "router"
const router = express.Router();
router.use(express.json());

router.post('/addsome', async (req, res) => {
    const daInserire = {
            fakeid: req.body.fakeid,
            title: req.body.title,
            favorite: req.body.favorite
        }
    const taskCollection = MongoConnect.blogDatabase.collection('vuetasks');    
    const ris = await taskCollection.insertOne(daInserire);
    if(ris.acknowledged){
        console.log(`Inserito nuovo documento!`);
    }
    res.end();   
  });
  module.exports = router; 