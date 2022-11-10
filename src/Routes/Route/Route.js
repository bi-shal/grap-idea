import { createBrowserRouter } from "react-router-dom";
import AllServices from "../../component/AllServices/AllServices";
import AddService from "../../component/Pages/AddService/AddService";
import Blog from "../../component/Pages/Blog/Blog";
import Edit from "../../component/Pages/Home/Edit";
import Home from "../../component/Pages/Home/Home";
import Login from "../../component/Pages/Login/Login";
import MyReviews from "../../component/Pages/MyReviews/MyReviews";
import SignUp from "../../component/Pages/SignUp/SignUp";
import ServicesDetail from "../../component/ServicesDetai/ServicesDetail";
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
                element:<Blog></Blog>
            },
            {
                path:'/myreviews',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path:'/addservice',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
                
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
            },
            {
                path:'/servicess/:id',
                element:<ServicesDetail></ServicesDetail>,
                loader: ({params}) => fetch(`https://assignment-11-server-site-beryl.vercel.app/servicess/${params.id}`)
                
            },
            {
                path:'/edit/button/:id',
                element:<Edit></Edit>
            }
        ]
    }
])