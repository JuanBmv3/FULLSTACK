import Paciente from "../models/Paciente.js"

const obtenerPacientes = async(req, res) =>{
    
    const veterinario = req.veterinario._id;
    const pacientes = await Paciente.find().where('veterinario').equals(veterinario);

   
    res.json({
        pacientes
    })
}

const agregarPaciente = async (req , res) =>{
    
    const paciente = new Paciente(req.body);
    paciente.veterinario = req.veterinario._id;
    try {
        const pacienteGuardado = await paciente.save();
        res.json({
            pacienteGuardado
        })
    } catch (error) {
        console.log(error)
    }
}

const obtenerPaciente = async (req , res) =>{
    const { id } = req.params;
    const veterinario = req.veterinario._id.toString();
    

    // const paciente = await Paciente.find().where('veterinario').equals(veterinario).where('_id').equals(id)

    try {
        const paciente = await Paciente.findById(id);
        
        if(!paciente){
            const error = new Error('Usuario no encontrado');

            return res.status(404).json({msg: error.message});
        }
    
        if(paciente.veterinario._id.toString() !== veterinario){
            const error = new Error('Acción no valida');

            return res.status(403).json({msg: error.message});
        }


        res.json({
            paciente
        })
        
    } catch (error) {
        console.log(error)
    }
    
}

const eliminarPaciente = async (req , res) =>{
    const { id } = req.params;
    const veterinario = req.veterinario._id.toString();
    

    // const paciente = await Paciente.find().where('veterinario').equals(veterinario).where('_id').equals(id)

    try {
        const paciente = await Paciente.findById(id);
        
        if(!paciente){
            const error = new Error('Usuario no encontrado');

            return res.status(404).json({msg: error.message});
        }
    
        if(paciente.veterinario._id.toString() !== veterinario){
            const error = new Error('Acción no valida');

            return res.status(403).json({msg: error.message});
        }
        await paciente.deleteOne();

        
      
        res.json({msg: "Paciente eliminado"});
        
    } catch (error) {
        console.log(error)
    }

}

const actualizarPaciente = async (req , res) =>{
    const { id } = req.params;
    const veterinario = req.veterinario._id.toString();
    

    // const paciente = await Paciente.find().where('veterinario').equals(veterinario).where('_id').equals(id)

    try {
        const paciente = await Paciente.findById(id);
        
        if(!paciente){
            const error = new Error('Usuario no encontrado');

            return res.status(404).json({msg: error.message});
        }
    
        if(paciente.veterinario._id.toString() !== veterinario){
            const error = new Error('Acción no valida');

            return res.status(403).json({msg: error.message});
        }
        
        paciente.nombre = req.body.nombre || paciente.nombre;
        paciente.propietario = req.body.propietario || paciente.propietario;
        paciente.email = req.body.email || paciente.email;
        paciente.fecha_alta = req.body.fecha_alta || paciente.fecha_alta
        paciente.sintomas = req.body.sintomas || paciente.sintomas

        const pacienteActualizado = await paciente.save();
        res.json(pacienteActualizado);
        
    } catch (error) {
        console.log(error)
    }
    
}





export {
    obtenerPacientes,
    agregarPaciente,
    obtenerPaciente,
    eliminarPaciente,
    actualizarPaciente
}