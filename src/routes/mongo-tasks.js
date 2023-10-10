const express  = require('express');
const MongoConnect = require('../utils/mongoConnect.js');
//Creo l'oggetto (miniapplicazione) "router"
const router = express.Router();

//router si comporta come app: possiamo utilizzare il metodo "get"
router.get('/tasks', async (req, res) => {
    //Query di ricerca: 
    const taskCollection = MongoConnect.blogDatabase.collection('vuetasks');
    const tasks = [];
    const findQuery= {}
    const cursor =  taskCollection.find(findQuery);
    while (await cursor.hasNext()){
        const task = await cursor.next(); //questo recupera il primo risultato
        console.log(task);
        tasks.push(task);
      }    
  
    console.log(`Numero di documenti recuperati: ${await taskCollection.estimatedDocumentCount()}`)
    console.log(`Numero di documenti recuperati: ${await taskCollection.countDocuments(findQuery)}`)
    
    res.json(tasks);
  });

  module.exports = router;