import TransaccionesRouter from "./routes/transacciones.route.js"
import express, { urlencoded } from "express"

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/",new TransaccionesRouter().start())

app.listen(PORT,()=>console.log("Server Running..."))
app.on("Error",(error)=>console.log("Error: ",error))
