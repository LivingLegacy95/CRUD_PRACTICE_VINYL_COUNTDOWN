const mongoose = require('mongoose');
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const dbName = "Jokesdb"

// connect to cloud database and grab url provided by MongoDB UI
// Still need to connect to atlas database before running server
const uri = `mongodb+srv://${username}:${pw}@cluster0.8oaqdty.mongodb.net/${dbName}?retryWrites=true&w=majority`
console.log(uri)

/* This code snippet is establishing a connection to a MongoDB database using Mongoose, which is an
Object Data Modeling (ODM) library for MongoDB and Node.js. */
mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err)); 