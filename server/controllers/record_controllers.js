import Record from '../models/record-model.js';
import asyncHandler from 'express-async-handler';


async function createRecords(req, res) {
    try {
        const newRecord = await Record.create(req.body);
        res.status(201).json(newRecord);
    } catch (err) {
        console.log(err);
        res.status(400).json.err('Error creating record');
    }
}

export { createRecords };