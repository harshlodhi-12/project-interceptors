import React from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import MainLayout from '../layouts/MainLayout'
import ProtectedRoutes from './ProtectedRoutes'
import PublicRoutes from './PublicRoutes'
import Homepage from '../pages/Homepage'
import Userspage from '../pages/Userspage'
import Productspage from '../pages/Productspage'

const AppRoutes = () => {
  //overall flow is that if user is logged in, then he will be redirected to main page, else he will be allowed to access login page
  let router = createBrowserRouter([
   {
    path:'/',                    
    element:<PublicRoutes/>,
    children:[
       {
      path:'',
      element:<AuthLayout/>,
      children:[
        {
          path:'',
          element:<LoginPage/>
        },
           {
          path:'register',
          element:<RegisterPage/>
        }
      ]

    },
    ]

   },
    {
      path:'/main',
      element:<ProtectedRoutes/>,
      children:[
        {
          path:'',
          element:<MainLayout/>,
          children:[
            {
              path:'',
              element:<Homepage/>
            },
             {
              path:'users',
              element:<Userspage/>
            },
             {
              path:'products',
              element:<Productspage/>
            },
          ]
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default AppRoutes

