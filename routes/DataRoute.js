import express from "express";
import {
    getDatas, 
    getDataById,
    createData,
    updateData,
    deleteData
    }
    from "../controllers/DataController.js";

const router = express.Router();

router.get('/data', getDatas);
router.get('/data/:id', getDataById);
router.post('/data', createData);
router.patch('/data/:id', updateData);
router.delete('/data/:id', deleteData);

export default router;
