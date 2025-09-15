import Record from '../models/record-model.js';
import asyncHandler from 'express-async-handler';


/**
 * The function `createRecords` asynchronously creates a new record using the data from the request
 * body and returns the created record in JSON format, handling errors appropriately.
 * @param req - The `req` parameter typically represents the request object in Node.js applications. It
 * contains information about the HTTP request that triggered the function, including headers,
 * parameters, and the request body. In this context, `req` is likely to be an object that contains the
 * data sent by the client when creating
 * @param res - The `res` parameter in the `createRecords` function is the response object that is used
 * to send a response back to the client making the request. It is typically provided by the Express.js
 * framework in Node.js and contains methods like `res.status()` and `res.json()` to send HTTP status
 */

async function createRecords(req, res) {
    try {
        const newRecord = await Record.create(req.body);
        res.status(201).json(newRecord);
    } catch (err) {
        console.log(err);
        res.status(400).json.err('Error creating record');
    }
}

/**
 * The function `getAllRecords` retrieves all records from a database and sends them as a JSON
 * response, handling errors appropriately.
 * @param req - The `req` parameter typically represents the request object in Node.js applications. It
 * contains information about the HTTP request that triggered the function, such as headers,
 * parameters, body content, and more. In this context, `req` is likely an Express.js request object
 * that is being used to handle incoming
 * @param res - The `res` parameter in the `getAllRecords` function is the response object that will be
 * used to send a response back to the client making the request. It is typically used to set the
 * status code and send data back in the response.
 */
async function getAllRecords(req, res){
    try {
        const allRecords = await Record.find();
        res.status(200).json(allRecords); 
    } catch (err) {
        console.log(err);
        res.status(400).json.err('Error creating record');
    }
}

/**
 * The function `getOneRecord` retrieves a single record by its ID and sends it as a JSON response,
 * handling errors appropriately.
 * @param req - The `req` parameter in the `getOneRecord` function typically represents the request
 * object in an Express route handler. It contains information about the HTTP request that was made,
 * such as the parameters, body, headers, and other details sent by the client to the server. In this
 * specific function,
 * @param res - The `res` parameter in the `getOneRecord` function is the response object that is used
 * to send a response back to the client making the request. It is typically used to set the status
 * code of the response and send data back to the client in the form of JSON or other formats.
 */
async function getOneRecord(req, res) {
    try {
        const { id } = req.params;
        const oneRecord = await Record.findById(id);
        res.status(200).json(oneRecord);
    } catch (err) {
        console.log(err);
        res.status(400).json.err('Error creating record');
    }
}

/**
 * The function `updateOneRecord` updates a record in a database based on the provided ID and request
 * body, sending back the updated record in the response.
 * @param req - The `req` parameter typically represents the request object in Node.js applications. It
 * contains information about the HTTP request that triggered the function, such as request headers,
 * parameters, body, and more. In this specific function `updateOneRecord`, `req` is used to extract
 * the `id` parameter
 * @param res - The `res` parameter in the `updateOneRecord` function is the response object that will
 * be used to send the response back to the client. It is typically used to set the status code and
 * send data back to the client in the form of JSON or other formats.
 */
async function updateOneRecord(req, res) {
    try {
        const { id } = req.params;
        const updatedRecord = await Record.findByIdAndUpdate(id, req.body, {
            new: true, 
            runValidators: true});
        res.status(200).json(oneRecord);
    } catch (err) {
        console.log(err);
        res.status(400).json.err('Error creating record');
    }
}

/**
 * The function `deleteOneRecord` deletes a record by its ID and sends a response with the deleted
 * record data or an error message.
 * @param req - The `req` parameter in the `deleteOneRecord` function is typically an object
 * representing the HTTP request. It contains information about the request made to the server, such as
 * the request headers, parameters, body, and more. In this specific function, `req.params` is used to
 * extract the
 * @param res - The `res` parameter in the `deleteOneRecord` function is the response object that is
 * used to send a response back to the client making the request. It is typically used to set the
 * status code of the response and send data back to the client in the form of JSON or other formats.
 */
async function deleteOneRecord(req, res) {
    try {
        const { id } = req.params;
        const deletedRecord = await Record.findByIdAndDelete(id);
        res.status(200).json(oneRecord);
    } catch (err) {
        console.log(err);
        res.status(400).json.err('Error creating record');
    }
}

export { createRecords, getAllRecords, getOneRecord, updateOneRecord, deleteOneRecord };