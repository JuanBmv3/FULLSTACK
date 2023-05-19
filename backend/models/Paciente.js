import mongoose from "mongoose";

const pacienteSchema = mongoose.Schema({
        nombre: {
            type: String,
            required: true,
        },
        propietario:{
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        fecha_alta:{
            type: Date,
            required: true,
            default: Date.now()

        },
        sintomas: {
            type: String,
            required: true
        },
        veterinario:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Veterinario"
        },
    },{
    timestamps: true // Columnas de editado y creado
});

const Paciente = mongoose.model('Paciente', pacienteSchema)

export default Paciente