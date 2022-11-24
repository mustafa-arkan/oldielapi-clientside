import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";

import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import SignUp from "../../SignUp/SignUp";



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
path:'/blogs',
element:<Blogs></Blogs>




}





        








]

},

/////

{
path:'/dashboard',
element:<Dashboard></Dashboard>



},



{
path:'*',
element:<PageNotFound></PageNotFound>


}



])
export default router