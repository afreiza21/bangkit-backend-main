import express from "express";
import cors from "cors";
import UserRoute from "./routers/apiRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, ()=> console.log('Server up and running...'));