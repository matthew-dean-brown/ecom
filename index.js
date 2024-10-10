import express from 'express'
import cors from 'cors'
import productsRouter from  './routes/productsRouter.js'
import userRouter from  './routes/userRouter.js'

const PORT = process.env.PORT || 9000
const app = express()

app.use(cors())
app.use('/products',productsRouter)
app.use('/users',userRouter)


app.listen(PORT,()=>{
    console.log('port running on http://localhost:'+PORT);
})