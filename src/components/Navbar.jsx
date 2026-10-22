import React from 'react'
import { NavLink } from 'react-router'
import { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import { toast } from 'react-toastify'


const Navbar = () => {
  let { setloggedInUser } = useContext(Auth)
  return (
    <div className='border-r border-gray-500 flex flex-col gap-2 justify-between p-2'>
      <div>

        <div className='text-3xl font-bold'>E-comm</div>

      <div className='flex flex-col gap-2 border-t border-gray-500 mt-2 p-2'>
        <NavLink className={({isActive})=>
         isActive? "font-bold text-red-500 ":"text-black "} to={'/main'} end>Home</NavLink>
        <NavLink className={({isActive})=>
         isActive? "font-bold text-red-500 ":"text-black "} to={'/main/users'}>Users</NavLink>
        <NavLink className={({isActive})=>
         isActive? "font-bold text-red-500 ":"text-black "} to={'/main/products'}>Products</NavLink>
      </div>

      </div>
      <button
      onClick={()=>{
        localStorage.removeItem('loggedInUser')
        // return <Navigate to={'/'} /> it will require a reload after clicking logout button
        toast.warn('Logged out successfully')
        setloggedInUser(null)

      }}
       className='bg-blue-500 text-white w-30 p-2 rounded-md hover:bg-red-600 '>Logout</button>
    </div>
  )
}

export default Navbar
