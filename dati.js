
const express  = require('express');
const MongoConnect = require('./src/utils/mongoConnect.js');
const cors = require('cors');
const tasksRouter = require('./src/routes/mongo-tasks.js');
const updateRouter = require('./src/routes/mongo-udpate.js');
const deleteRouter = require('./src/routes/mongo-delete.js');
const addRouter = require('./src/routes/mongo-add.js');
const singleTaskRouter = require('./src/routes/mongo-singletask.js');

const port = process.env.PORT || 3000;
const frontend = process.env.FRONTEND_URL || "http://localhost:5173";

const app = express();
app.use(cors({origin:  frontend}));

//creo l'istanza mongoConnect dalla classe
const mongoConnect = new MongoConnect();

//Utilizzo rotte
app.use('/', tasksRouter);
app.use('/update', updateRouter);
app.use('/delete', deleteRouter);
app.use('/add', addRouter);
app.use('/tasks',singleTaskRouter);

//gestione dell’evento
mongoConnect.on('dbConnection', ()=> {
    //Questa callback viene invocata una volta catturato l'evento. A questo punto
    //La connessione al DB è avvenuta e posso mettere in ascolto il server node.
    //passo come secondo parametro una callback che informa il client che il server è in ascolto.
    app.listen(port, ()=>{
        console.log(`server in ascolto sulla porta ${port}`);
    });
});

//Mi connetto al DB invocando il metodo connect() dell'istanza
mongoConnect.connect();