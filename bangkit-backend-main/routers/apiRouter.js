import express from "express";
import {
    find, 
    findOne,
    created,
    updated,
    deleted
} from "../controllers/apiControllers.js";

const router = express.Router();

router.get('/api', find);
router.get('/api/:id', findOne);
router.post('/api', created);
router.patch('/api/:id', updated);
router.delete('/api/:id', deleted);

export default router;