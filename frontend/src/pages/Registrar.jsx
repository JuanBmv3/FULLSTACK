
import { useState } from "react";
import { Link } from "react-router-dom"



const Registrar = () => {

    const [nombre, setNombre] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [rpassword, setRPassword] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();

        if([nombre, password, email, rpassword].includes('')){
            console.log('campos vacios')
            return;
        }

        if(password !== rpassword){
            console.log('no son iguales los pass')
            return;
        }

        if(password.length < 6 ){
            console.log('tu pass es corto')
            return;
        }
    }


    return (
      <>
          <div >
            <h1 className="text-indigo-600 font-black text-6xl"> Crea tu cuenta y administra tus<span className="text-black"> Pacientes </span></h1>
          </div>

          <div className=" shadow-lg px-5 py-10 rounded-xl bg-white">
          <form onSubmit={handleSubmit}>
            <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-bold ">
                Nombre
              </label>
              <input type="text" 
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                placeholder="Email de registro"
                value={nombre}
                onChange={e => setNombre(e.target.value)} 
               
              />
            </div>

            <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-bold ">
                Email
              </label>
              <input type="email" 
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                placeholder="Email de registro"
                value={email}
                onChange={e => setEmail(e.target.value)} 
               
              />
            </div>

            <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-bold ">
                Password
              </label>
              <input type="password" 
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                placeholder="Contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)} 
              />
            </div>

            <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-bold ">
                Repetir Password
              </label>
              <input type="password" 
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                placeholder="Contraseña"
                value={rpassword}
                onChange={e => setRPassword(e.target.value)} 
               
              />
            </div>

            <input type="submit"
              value="Registrarse"
              className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
            />

          </form>

          <nav className="mt-10 lg:flex lg:justify-between">
              <Link className=" block text-center my-5 text-gray-500" to="/registrar"> ¿Ya tienes una cuenta? Inicia Sesión</Link>
              <Link className=" block text-center my-5 text-gray-500" to="/olvide-password"> Olvide mi password</Link>

          </nav>
      </div>


      </>
      
    )
  }
  
  export default Registrar