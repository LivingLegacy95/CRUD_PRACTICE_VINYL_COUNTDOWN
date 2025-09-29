import express from 'express';
import { createRecords, getAllRecords, getOneRecord, updateOneRecord, deleteOneRecord } from '../controllers/record_controllers.js';


const router = express.Router();

/* This part of the code is defining routes for handling HTTP requests related to the root endpoint
'/'. It specifies that when a GET request is made to the root endpoint, the `getAllRecords` function
from the `record_controllers.js` file should be executed. Similarly, when a POST request is made to
the root endpoint, the `createRecords` function from the same file should be executed. */
router
    .route('/')
    .get(getAllRecords)
    .post(createRecords);


/* This part of the code is defining routes for handling HTTP requests related to a specific record
identified by its ID. */
router
    .route('/:id')
    .get(getOneRecord)
    .put(updateOneRecord)
    .delete(deleteOneRecord);

export default router;