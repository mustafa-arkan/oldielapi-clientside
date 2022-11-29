import { createBrowserRouter } from "react-router-dom";
import DashLay from "../../Layout/DashLay";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import MyProduct from "../../Pages/AddProduct/MyProduct";
import Blogs from "../../Pages/Blogs/Blogs";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";


import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import Phones from "../../Pages/Phones/Phones";
import SignUp from "../../SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



export const router=createBrowserRouter([


{
path:'/',
element:<Main></Main>,
children:[

    {

        path:'/',
        element:<Home></Home>
        
        
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
                                path: '/brands/:brand',
                                element: <Phones></Phones>,
                                loader: ({ params }) =>
                                  fetch(`https://social-app-server-mustafa-arkan.vercel.app/brands/${params.brand}`),
                              },





                        
        
{
path:'/blogs',
element:<Blogs></Blogs>




},






        








]

},

/////

{
path:'/dashboard',
element:<PrivateRoute><DashLay></DashLay></PrivateRoute>,
children:[

{

path:'/dashboard',
element:<Dashboard></Dashboard>


},
{
path:'/dashboard/allsellers',
element:<AllSellers></AllSellers>



},
{
path:'/dashboard/allusers',
element:<AdminRoute><AllUsers></AllUsers></AdminRoute>



},



{
        path:'/dashboard/addproducts',
        element:<AddProduct></AddProduct>
        
        
        
        },
        {
                path:'/dashboard/mypro',
                element:<MyProduct></MyProduct>
                
                
                
                }
        






]



},



{
path:'*',
element:<PageNotFound></PageNotFound>


}



])
export default router