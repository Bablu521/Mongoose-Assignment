import dotenv from "dotenv"
dotenv.config()
import bootstrap from './src/index.router.js'
import express from 'express'
const app = express()
const port = process.env.PORT || 5000

bootstrap(app,express)


app.listen(port, () => console.log(`SERVER IS RUNNING ON PORT ${port}`))


