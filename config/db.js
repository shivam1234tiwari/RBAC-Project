import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Mongodb is Connected`);
    }catch(error){
        console.log('Failed to Connect',error)
        process.exit(1);
    }
}
export default connectDB;