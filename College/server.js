import express from 'express';
import connection from './Connection/Connection.js';
import env from 'dotenv';
import router from './Router/Router.js';
import cors from 'cors';

const app=express();
env.config();
app.use(cors());
app.use(express.json({limit:"30mb"}))
app.use("/api",router)
connection()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server started");
    })
    }).catch((error)=>{
        console.log(error);
})