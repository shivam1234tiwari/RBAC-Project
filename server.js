import express from 'express'
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'
import userRoute from './routes/user.js'
import connectDB from './config/db.js';
const app=express();

dotenv.config();

const port=process.env.PORT||8000
connectDB();
// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes 
app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);
app.get('/',(req,res)=>{
    res.json({
        message:"Welcome"
    })
})

app.listen(port,()=>{
    console.log(`Server is running http://localhost:${port}`)
})