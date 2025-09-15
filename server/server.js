import dotenv from 'dotenv';
import dbConnect from '.config/mongoose-config.js';
import recordRouter from './routes/record_routes.js';
import cors from 'cors';

const app = express();
dotenv.config();


app.use(express.json(), cors())
/* The line `app.use('/api/records', recordRouter);` is setting up a middleware in the Express
application. This middleware is specifying that any requests made to the '/api/records' endpoint
should be handled by the `recordRouter` router. This allows for modularizing the routing logic
related to records into a separate file (`record_routes.js`) and then integrating it into the main
Express application using this middleware. */
app.use('/api/records', recordRouter);


/**
 * The function `serverStart` attempts to connect to a database and start a server on a specified port,
 * handling any errors that may occur.
 */
async function serverStart() {
    try {
        await dbConnect();
        const PORT = process.env.PORT;
        app.listen(Port, () => console.log(`Server is running on port: ${PORT}`));
    } catch (err) {
        console.log('Error starting server:', err);
    }
}

serverStart();