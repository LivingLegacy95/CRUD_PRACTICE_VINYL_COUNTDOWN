import {connect} from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

// connect to cloud database and grab url provided by MongoDB UI
// Still need to connect to atlas database before running server
// const uri = `mongodb+srv://${username}:${pw}@cluster0.8oaqdty.mongodb.net/${dbName}?retryWrites=true&w=majority`
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@keithinscluster.afclqax.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
console.log(uri)

/* This code snippet is establishing a connection to a MongoDB database using Mongoose, which is an
Object Data Modeling (ODM) library for MongoDB and Node.js. */
async function dbConnect() {
    try {
        await connect(uri), {retryWrites: true};
        console.log('Connected to the database');
    } catch (err) {
        console.error('Error connecting to the database', err);
    }}

export default dbConnect;