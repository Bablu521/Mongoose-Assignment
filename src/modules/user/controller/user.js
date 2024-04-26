import productModel from '../../../../DB/model/product.model.js';
import userModel from '../../../../DB/model/user.model.js';


//signup//
export const signup = async(req,res,next)=>{
    try {
        const { userName , email , phone , password , cPassword , age , gender } = req.body
        // console.log({ userName , email , phone , password , cPassword , age , gender })
        if ( password != cPassword){
            return res.json({message:"MisMatch cPaasword"})
        }
        const checkUser = await userModel.findOne({
            $or:[
                {userName},
                {email},
                {phone}
            ]
        })
        if (checkUser?.userName == userName){
            return res.json({message:"userName Exist"})
        }
        if (checkUser?.email == email){
            return res.json({message:"Email Exist"})
        }
        if (checkUser?.phone == phone){
            return res.json({message:"phone Exist"})
        }
        const user = await userModel.create({userName , email , phone , password , age , gender })
        return res.json ({message:"Done" , user})
    } catch (error) {
        return res.json({message:error.message})
    }
}

//Signin//
export const signin = async(req,res,next)=>{
    try {
        const { user , password} = req.body
        // console.log({ user , password })
        const existUser = await userModel.findOne({
            $or:[
                {userName:user , password},
                {email:user , password},
                {phone:user , password}
            ]
        })
        
        if (!existUser){
            return res.json({message:"IN-VALID USER"})
        }
        return res.json ({message: `WELCOME ${existUser.userName}` , existUser})
    } catch (error) {
        return res.json({message:error.message})
    }
}


//updateUser//
export const updateUser = async(req,res,next)=>{
    try {
        const { age , phone } = req.body
        const {_id} = req.params
        // console.log({ age , phone , _id })
        const user = await userModel.findByIdAndUpdate({_id},{age,phone})
        if (!user){
            return res.json({message:"IN-VALID USER ID"})
        }
        return res.json ({message:"Done" , user})
       
    } catch (error) {
        return res.json({message:error.message})
    }
}


//deleteUser//
export const deleteUser = async(req,res,next)=>{
    try {
        const {_id} = req.params
        console.log({_id })
        const user = await userModel.findByIdAndDelete({_id})
        if (!user){
            return res.json({message:"IN-VALID USER ID"})
        }
        return res.json ({message:"Done" , user})
       
    } catch (error) {
        return res.json({message:error.message})
    }
}


//searchUser//
export const searchUser = async(req,res,next)=>{
    try {
        const {searchKey , age} = req.query
        console.log({searchKey , age})
        const users = await userModel.find({
            userName:{$regex: `${searchKey}` , $options: 'i'},
            age:{$lt: age}
        })
        return res.json({message:"Done" , users})
       
    } catch (error) {
        return res.json({message:error.message})
    }
}


//searchAge//
export const searchAge = async(req,res,next)=>{
    try {
        const {minAge , maxAge} = req.query
        console.log({minAge , maxAge})
        const users = await userModel.find({
            age:{$lt: maxAge , $gt:minAge}
        })
        return res.json({message:"Done" , users})
       
    } catch (error) {
        return res.json({message:error.message})
    }
}


//getAllUsers//
export const getAllUsers = async(req,res,next)=>{
    try {
        const users = await userModel.find ().populate([
            {
                path:"productId",
                select:'name price'
            }
        ])
        return res.json({message:"Done" , users})
    } catch (error) {
        return res.json({message:error.message})
    }
}