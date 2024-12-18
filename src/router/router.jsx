import {
    createBrowserRouter,

  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/signIn/SignIn";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2>404 not found</h2>,
      children :[
        {
            path:'/', 
            element: <Home></Home>,
        },
        {
            path:'/register',
            element:<Register></Register>,
        },
        {
          path :'/login',
          element :<SignIn></SignIn>,
        }
      ]
    },
  ]);
  

  export default router;