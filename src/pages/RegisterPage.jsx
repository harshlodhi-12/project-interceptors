import React, { useContext } from "react";

import {useAuth} from '../hooks/useAuth'

const RegisterPage = () => {
  //   let {registeredUsers, setregisteredUsers}=useContext(Auth)
  //   let navigate = useNavigate();
    
  // let {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm();


  // const formSubmit=(data)=>{
  //   let arr= [...registeredUsers,data]
  //    setregisteredUsers(arr)
  //    alert('user registered successfully')
  //    localStorage.setItem('registeredUsers',JSON.stringify(arr))
  //    reset()
  // }
  let { register, handleSubmit, errors, registerformSubmit, navigate } = useAuth();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-500 mt-2">Register to get started</p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit(registerformSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>

            <input
            {...register('name',{
                required:"name is required",
            })}
              type="text"

              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                         outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500 transition"
            />
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
             {...register('email',{
                required:"email is required",
            })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                         outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500 transition"
            />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
             {...register('password',{
                required:"password is required",
                minLength:{
                    value:6,
                    message:"min 6 character is requires"
                }
            })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                         outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500 transition"
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700
                       text-white font-semibold py-3 rounded-lg
                       transition duration-200"
          >
            Register
          </button>
        </form>

        {/* Login Section */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-3 text-sm text-gray-400">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <p className="text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
