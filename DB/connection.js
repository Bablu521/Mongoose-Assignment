import mongoose from "mongoose";

export const connectDB = async()=>{
    return await mongoose.connect(process.env.DB_URL).then(result=>{
        console.log(`DBconnected`)
        // console.log(result.model)
    }).catch(error=>{
        console.log(`FAIL TO CONNECT ... ${error}`)
    })
}

export default connectDB