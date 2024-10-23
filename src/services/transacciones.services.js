import TransaccionesFactory from "../models/transacciones.factory.js"

class TransaccionesServices{

    constructor(){

        this.model = TransaccionesFactory.get("MEM")
    }

    getTransacciones = async () =>{
        return await this.model.getTransacciones()
    }

    postTransacciones = async(transaccion)=>{

       return await this.model.postTransacciones(transaccion)

    }

    getTransaccionesTotales = async()=>{
        
        return await this.model.getTransaccionesTotales()
    }

    deleteTransacciones = async(id)=>{
        
        return await this.model.deleteTransacciones(id)
    }


    

}

export default TransaccionesServices