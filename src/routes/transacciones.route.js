import TransaccionesController from "../controllers/transacciones.controller.js"
import  express from "express"


class TransaccionesRouter{
    constructor(){
        this.router = express.Router()
        this.controller = new TransaccionesController()
    }


    start(){

        this.router.get("/transacciones",this.controller.getTransacciones)
        this.router.post("/transacciones",this.controller.postTransacciones)
        this.router.get("/transaccionesTotales",this.controller.getTransaccionesTotales)
        this.router.delete("/transacciones/delete/:id",this.controller.deleteTransacciones)

        return this.router
    }
}

export default TransaccionesRouter



