import { Link } from "react-router-dom"


const Login = () => {
  return (

    <>  
      <div >
          <h1 className="text-indigo-600 font-black text-6xl"> Inicia sesion y administra tus <span className="text-black"> Pacientes </span></h1>

      </div>

      <div className="my-10 shadow-lg px-5 py-10 rounded-xl bg-white">
          <form action="">
            <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-bold ">
                Email
              </label>
              <input type="email" 
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                placeholder="Email de registro"
               
              />
            </div>

            <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-bold ">
                Password
              </label>
              <input type="password" 
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                placeholder="Contraseña"
               
              />
            </div>

            <input type="submit"
              value="Iniciar Sesión"
              className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
            />

          </form>

          <nav className="mt-10 lg:flex lg:justify-between">
              <Link className=" block text-center my-5 text-gray-500" to="/registrar"> ¿No tienes una cuenta ? Regístrate</Link>
              <Link className=" block text-center my-5 text-gray-500" to="/olvide-password"> Olvide mi password</Link>

          </nav>
      </div>
        
      
    
    </>
    
  )
}

export default Login