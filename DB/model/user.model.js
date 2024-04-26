import { Schema , Types, model } from "mongoose";

const userSchema = new Schema ({
    userName:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    age:Number,
    gender:{
        type:String,
        enum:['male','female'],
        default:'male'
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    productId:[{
        type:Types.ObjectId,
        ref:"Product"
    }]
},{
    timestamps:true
})

const userModel = model('User' , userSchema)

export default userModel