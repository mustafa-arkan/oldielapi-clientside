
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashLay = () => {
const {user}=useContext(AuthContext)

const [isAdmin]=useAdmin(user?.email)





    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {/* <li><Link to="/dashboard/allsellers">All Sellers</Link></li> */}



                        <li><Link to="/dashboard/addproducts">Add a Product</Link></li>

                        <li><Link to="/dashboard/mypro">My product</Link></li>
                        {/* <li><Link to="/dashboard/allusers">All Sellers</Link></li> */}



{

isAdmin && <>



<li><Link to="/dashboard/allusers">All Sellers</Link></li>


</>




}



                        {/* <li><Link to="/dashboard/allusers">All Users</Link></li> */}




                    </ul>

                </div>
            </div>




        </div>
    );
};

export default DashLay;