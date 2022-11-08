import { createBrowserRouter } from "react-router-dom";
import AllServices from "../../component/AllServices/AllServices";
import Blog from "../../component/Pages/Blog/Blog";
import Home from "../../component/Pages/Home/Home";
import Login from "../../component/Pages/Login/Login";
import SignUp from "../../component/Pages/SignUp/SignUp";
import Main from "../../layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/allService',
                element:<AllServices></AllServices>
            }
        ]
    }
])