require('dotenv').config()

const MongoClient = require('mongodb').MongoClient;

//Connect to mongoDB
const uri = "mongodb+srv://admin:123qwe@cluster0.1henban.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri,{ useNewUrlParser: true })

client.connect((err,db) => {
    if(!err) {
        console.log('mongodb Connected')
    }
    else {
        console.log("DB Error: ", err);
        process.exit(1);
    }
})

exports.mongoClient = client;