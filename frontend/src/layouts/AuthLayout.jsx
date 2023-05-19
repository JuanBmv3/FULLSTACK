import { Outlet } from "react-router-dom";

const AuthLayout = () =>{
    return (
        <>

            <main className="mt-10 container mx-auto md:grid md:grid-cols-2 gap-5 p-5 items-center"> 
                <Outlet/> 
            </main>

        </>

    )
};

export default AuthLayout