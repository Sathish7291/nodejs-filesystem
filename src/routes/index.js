import express from 'express';
import IndexController from '../controller/index.js';
import TimeStampRouter from '../routes/TimeStampRouter.js';

const router = express.Router();
router.get("/",IndexController.homePage);
router.use("/timestamp",TimeStampRouter);

export default router;