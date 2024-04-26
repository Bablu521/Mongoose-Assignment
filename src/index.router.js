import userRouter from './modules/user/user.router.js'
import productRouter from './modules/product/product.router.js'
import connectDB from '../DB/connection.js'
import cors from "cors"

const bootstrap = (app,express)=>{
    app.use(cors())
    app.use(express.json())
    app.get('/' , (req,res,next)=>{
        return res.json({message:"WELCOME"})
    })
    app.use('/user' , userRouter)
    app.use('/product' , productRouter)
    app.use('*' , (req,res,next)=>{
        return res.json({message:"IN-VALID ROUTNING"})
    })
    connectDB ()
}

export default bootstrap