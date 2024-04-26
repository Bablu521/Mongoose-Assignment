import  { Schema , model , Types} from "mongoose";


const productSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    userId:{
        type:Types.ObjectId,
        ref:'User',
        required:true
    }
},{
    timestamps:true
})

const productModel = model('Product' , productSchema)

export default productModel