import mongoose from "mongoose";
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path:'/env'
})

connectDB()
.then(()=>{
    application.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("MONGO db connection failed !!", err)
})