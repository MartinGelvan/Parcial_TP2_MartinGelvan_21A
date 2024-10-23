import TransaccionesServices from "../services/transacciones.services.js"

class TransaccionesController{

    constructor(){

        this.services = new TransaccionesServices()


    }

    getTransacciones = async (req,res) =>{
        const transacciones = await this.services.getTransacciones()
        res.send(transacciones)
    }

    postTransacciones = async(req,res)=>{

        const transaccion = req.body
       const nuevaTransaccion = await this.services.postTransacciones(transaccion)
        res.send(transaccion)
    }

    getTransaccionesTotales = async(req,res)=>{
        
        const mensaje = await this.services.getTransaccionesTotales()

        res.send(JSON.stringify(mensaje))
    }

    deleteTransacciones = async(req,res)=>{
        
        const {id} = req.params
        
        const mensaje = await this.services.deleteTransacciones(id)

        res.send(JSON.stringify(mensaje))
    }


    
}

export default TransaccionesController