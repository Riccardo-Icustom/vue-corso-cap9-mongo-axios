
const dotenv = require('dotenv');
const { MongoClient,ServerApiVersion } = require('mongodb');
const { EventEmitter } = require('events');
dotenv.config();
const uri = process.env.DB_URL;
//Memorizzo il nome del DB e della collezione da usare; da notare che 
//se non esistono, il driver e Atlas li creeranno alla prima scrittura di dati
const dbName = process.env.DB;

//Estendo la classe EventEmitter
class MongoConnect extends EventEmitter{
    constructor(){
        super();
        // Create a MongoClient with a MongoClientOptions object to set the Stable API version
        this.mongoClient = new MongoClient(
            uri,{
                useUnifiedTopology:true,
                serverApi: {
                    version: ServerApiVersion.v1,
                    strict: true,
                    deprecationErrors: true,
                  }
            }
        );
    }
    //E' necessario un metodo asincrono
    //In quanto il metodo connect() di mongoClient ritorna una PROMISE
    //Anziché accettare una callback come nel corso!
    // https://stackoverflow.com/questions/76322080/mongoclient-connect-callback-does-not-work
    async connect() {
        try {
            await this.mongoClient.connect();
            console.log('Connessione al DB Stabilita');
            //memorizzo il riferimento al DB all'interno di una proprietà di MongoConnect
            MongoConnect.blogDatabase = this.mongoClient.db(dbName);
             //sollevo infine l'evento 
            this.emit('dbConnection');
        } catch (err) {
          console.error('Error connecting to DB:', err);
        }
    }
};

//non resta che esportare la classe
module.exports = MongoConnect;