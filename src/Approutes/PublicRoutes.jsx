import react from "react";
import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import { Auth } from "../context/AuthContext"; 

const ProtectedRoutes = () => {
    const{loggedInUser} = useContext(Auth)

    if(loggedInUser) //if user is logged in, then redirect to main page
    {
        return <Navigate to='/main'/>
    }
    //if user is not logged in, then allow access to the login page
  return <Outlet/>;
}   

export default ProtectedRoutes;