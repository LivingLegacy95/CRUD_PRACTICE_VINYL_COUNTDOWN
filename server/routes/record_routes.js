import express from 'express';
import { createRecords, getAllRecords, getOneRecord } from '../controllers/record_controllers.js';


const router = express.Router();

router
    .router('/')
    .get(getAllRecords)
    .post(createRecords);

router
    .router('/:id')
    .get(getOneRecord)
    .put(updateOneRecord)
    .delete(deleteOneRecord);

export default router;