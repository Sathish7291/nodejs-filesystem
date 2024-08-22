import express from 'express';
import TimeStampController from '../controller/TimeStampController.js';

const Approuter = express.Router();
Approuter.get("/", TimeStampController.getTime);

export default Approuter;