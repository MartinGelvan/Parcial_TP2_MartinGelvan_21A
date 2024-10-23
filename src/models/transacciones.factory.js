import TransaccionesMemModel from "../models/DAO/transacciones.models.mem.js"


class TransaccionesFactory{

    static get(persistence){

        switch (persistence) {
            case "MEM":
                console.log("Persistiendo en la memoria")
                return new TransaccionesMemModel()
            
        
            default:
                console.log("Persistiendo por default")
                return new TransaccionesMemModel()
               
        }

    }


}

export default TransaccionesFactory