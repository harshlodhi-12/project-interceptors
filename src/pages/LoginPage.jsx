import React from "react";
import { useAuth } from "../hooks/useAuth";


const LoginPage = () => {
  // let{loggedInUser,setloggedInUser,registeredUsers}=useContext(Auth)


  // let navigate = useNavigate();
  //   let {
  //     register,
  //     handleSubmit,
  //     reset,
  //     formState: { errors },
  //   } = useForm();
  
  
  //   const loginformSubmit=(data)=>{
  //     let user= registeredUsers.find((val)=>{
  //       return val.email===data.email && val.password===data.password;
  //      })
  //      if(!user)
  //      {
  //       toast.error('invalid credentials')
  //       reset()
  //       return;
  //      }
  //      //else
  //       setloggedInUser(user)
  //      localStorage.setItem('loggedInUser',JSON.stringify(user))
  //     toast.success('login successfull')
  //      navigate('/main')

  //      reset()
  //   } //we will move this logic to a custom hook so that we can use it in register page also

  
  let { register, handleSubmit, errors, loginformSubmit,navigate } = useAuth();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Login to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(loginformSubmit)} className="space-y-5">
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


          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 
                       text-white font-semibold py-3 rounded-lg 
                       transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Register Section */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-3 text-sm text-gray-400">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <p className="text-center text-gray-600 text-sm">
          Don't have an account?{" "}
          <button
            onClick={()=> navigate('/register')}
           className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
