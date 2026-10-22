import { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

//custom hook to handle login and register form logic
export const useAuth = () => {

      let{loggedInUser,setloggedInUser,registeredUsers,setregisteredUsers}=useContext(Auth)
    
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
 //logic for login form submit
  const loginformSubmit = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });
    if (!user) {
      toast.error("invalid credentials");
      reset();
      return;
    }
    //else
    setloggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success("login successfull");
    navigate("/main");

    reset();
  };
//logic for register form submit
  const registerformSubmit = (data) => {
    let arr = [...registeredUsers, data];
    setregisteredUsers(arr);
    alert("user registered successfully");
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    reset();
  };
//returning/exporting all the required variables and functions from the custom hook
  return{
    register,
    handleSubmit,
    reset,  
    errors,
    loginformSubmit,
    registerformSubmit,
    navigate,
  }
};
