import express from 'express';
import AppRoutes from './src/routes/index.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/",AppRoutes);

app.listen(PORT,()=>console.log(`Server is listening to ${PORT}`));