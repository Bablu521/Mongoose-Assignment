import productModel from '../../../../DB/model/product.model.js';
import userModel from '../../../../DB/model/user.model.js';
// import { isValidObjectId } from 'mongoose';

//addProduct//
export const addProduct = async (req,res,next)=>{
    try {
        const {userId , name , description , price} = req.body
        // console.log({userId , name , description , price})
        const user = await userModel.findById(userId)
        
        if(!user){
            return res.json({message:"IN-VALID USER ID"})
        }
        const product = await productModel.create({userId , name , description , price})
        user.productId.push(product._id)
        await user.save()
        return res.json({message:"Done" , product})
    } catch (error) {
        return res.json({message:error.message})
    }
}

//addProduct//
// export const addProduct = async (req,res,next)=>{
//     try {
//         const {userId , name , description , price} = req.body
//         // console.log({userId , name , description , price})
//         if (!isValidObjectId(userId)) {
//             return res.json({ message: "Invalid USER ID format" });
//         }
//         const product = await productModel.create({userId , name , description , price})
//         return res.json({message:"Done" , product})
//     } catch (error) {
//         return res.json({message:error.message})
//     }
// }



//updateProduct//
export const updateProduct = async(req,res,next)=>{
    try {
        const {_id , userId} = req.params
        const {name , description , price } = req.body
        // console.log ({_id , userId , name , description , price})
        const product = await productModel.findOneAndUpdate({_id,userId},{name , description , price },{new:true})
        if (!product){
            return res.json({message:"IN-VALID USER ID"})
        }
        return res.json({message:"Done" , product})
    } catch (error) {
        return res.json({message:error.message})
    }
}


//deleteProduct//
export const deleteProduct = async(req,res,next)=>{
    try {
        const {_id , userId} = req.params
        // console.log ({_id , userId})
        const product = await productModel.deleteOne({_id,userId})
        return product.deletedCount? res.json({message:"Done" , product}):res.json({message:"IN-VALID USER ID"})
    } catch (error) {
        return res.json({message:error.message})
    }
}


//getAllProducts//
export const getAllProducts = async(req,res,next)=>{
    try {
        const products = await productModel.find().populate([
            {
                path:"userId",
                select:'userName email'
            }
        ]).sort({createdAt : "desc"})
        return res.json({message:"Done" , products})
    } catch (error) {
        return res.json({message:error.message})
    }
}