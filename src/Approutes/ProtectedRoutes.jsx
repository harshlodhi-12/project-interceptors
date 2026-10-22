import react from "react";
import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import { Auth } from "../context/AuthContext"; 

const ProtectedRoutes = () => {
    const{loggedInUser} = useContext(Auth)

    if(!loggedInUser) //user is not logged in, then redirect to login page
    {
        return <Navigate to='/'/>
    }
  return <Outlet/>;
}   

export default ProtectedRoutes;