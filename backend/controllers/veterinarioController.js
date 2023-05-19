import Veterinario from '../models/Veterinario.js';
import generarJWT from '../helpers/generarJWT.js';
import generarId from '../helpers/generarId.js';

const registrar = async (req, res) =>{
   
    const { email } = req.body;

    const existeUsuario = await Veterinario.findOne({email});
    
    if(existeUsuario){
        const error = new Error("Usuario ya registrado");
    
        return res.status(400).json({msg: error.message});
    }

    try {
        const veterinario = new Veterinario(req.body)
        const veterinarioGuardado = await veterinario.save(); 
        
        res.json(veterinarioGuardado); // Devolvemos el json del usuario agregado

    } catch (error) {
       console.log(error) 
    }
}

const perfil = (req, res) =>{
    const { veterinario } = req

    res.json({
        perfil: veterinario
    })     
}

const confirmar = async ( req, res ) =>{

    const { token } = req.params;

    const usuarioConfirmar = await Veterinario.findOne({token});

    if(!usuarioConfirmar){
        const error = new Error("Usuario no existe");
    
        return res.status(404).json({msg: error.message});
    }

    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save();

        res.json({
            url: "La cuenta fue confirmada."
        }) 
    } catch (error) {
        console.log(error);
    }

}

const autenticar = async (req, res ) => {
    // console.log(req.body);

    const {email, password} = req.body

    const usuario = await Veterinario.findOne({email});

    if(!usuario){
        const error = new Error("Usuario no existe");
    
        return res.status(403).json({msg: error.message});
    }

    if(!usuario.confirmado){
        const error = new Error("La cuenta aún no ha sido confirmada");
    
        return res.status(403).json({msg: error.message});
    }

    if(!await usuario.comprobrarPass(password)){
        const error = new Error("El correo o contraseña son incorrectos");
        return res.status(403).json({msg: error.message});
    }

    res.json({token: generarJWT(usuario.id)});
}

const olvidePassword = async(req, res) =>{
    const {email}  = req.body;

    const existeVeterinario = await Veterinario.findOne({email});

    if(!existeVeterinario){
        const error = new Error("El usuario no existe");
        return res.status(400).json({msg: error.message});
    }

    try {
        existeVeterinario.token = generarId()
        await existeVeterinario.save();
        res.json({msg: "Correo enviado"})
    } catch (error) {
        console.log(error)
    }
}

const comprobarToken = async(req, res) =>{
    const {token} = req.params

    const tokenValido = await Veterinario.findOne({token});
    
    if(!tokenValido){
        const error = new Error("Token no valido");
        return res.status(400).json({msg: error.message});
    }

    res.json({msg: "Token valido"})

}

const nuevoPassword = async(req, res) =>{
    const {token} = req.params;
    const { password } = req.body;

    const veterinario = await Veterinario.findOne({ token });

    if(!veterinario){
        const error = new Error("Error en el token");
        return res.status(400).json({msg: error.message});
    }

    try {
        
        veterinario.token = null;
        veterinario.password = password;
        await veterinario.save();

        res.json({ msg: "Contraseña nueva creada"})

    } catch (error) {
        console.log(error);
    }

}

export {
    registrar,
    perfil,
    confirmar,
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword
    
};