class TransaccionesMemModel{

    constructor(){
        this.transacciones = [

            {id: 1,tipo: "transferencia", monto: 19000, destinatario: "Juan Manuel"},
            {id:2,tipo: "retiro", monto: 11000, destinatario: "Maria Perez"},
            {id:3,tipo: "retiro", monto: 5000, destinatario: "Sofia Andaluza"},
            {id:4,tipo: "transferencia", monto: 60000, destinatario: "Pedro Rodriguez"}

        ]
    }

    getTransacciones = async () =>{
        return await this.transacciones
    }

    postTransacciones = async(transaccion)=>{
        transaccion.id = this.transacciones[this.transacciones.length - 1].id + 1

        this.transacciones.push(transaccion)

        return await transaccion
    }

    getTransaccionesTotales = async()=>{
        
        const cantidadTransacciones = this.transacciones.length 
        
        const mensaje = `Cantidad de  transacciones en cuenta: ${cantidadTransacciones}`

        return await mensaje
    }

    deleteTransacciones = async(id)=>{
        
        const index = this.transacciones.findIndex(t => t.id == id)

        if(index == -1) throw new Error("Ese id no existe")

        const mensaje = `Se elimino lo siguiente: ${JSON.stringify(this.transacciones[index])}`
        
        this.transacciones.splice(index,1)

        

        return await mensaje
    }

}

export default TransaccionesMemModel