import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyAppointment from './MyAppointment';
import IsAdmin from '../../PrivateRoute/IsAdmin';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const { admin } = IsAdmin(user);
    const location = useLocation();
    const pathName = location.pathname;
    const Menu = <>
        <li className='text-black text-lg duration-200 hover:bg-gray-500 rounded'><Link to='/dashboard/myappointment'>My Appointment</Link></li>
        {
            admin === "Admin" && <li className='text-black text-lg duration-200 hover:bg-gray-500 rounded'><Link to='/dashboard/alluser'>All User</Link></li>
        }
        {
            <li className='text-black text-lg duration-200 hover:bg-gray-500 rounded'><Link to='/dashboard/adddoctor'>Add Doctor</Link></li>
        }
        {
            admin === 'Admin' && <li className='text-black text-lg duration-200 hover:bg-gray-500 rounded'><Link to='/dashboard/managedoctor'>Manage Doctor</Link></li>
        }
    </>
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="dropdown dropdown-bottom dropdown-end absolute right-10 top-5 cursor-pointer" title='Drop-Drow Button'>
                    <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-gray-200 rounded-box w-52">
                        {Menu}
                    </ul>
                </div>

                <div className="drawer-content">
                    <Outlet />
                    {
                        pathName === '/dashboard' && <MyAppointment />
                    }
                </div>
                <div className="drawer-side rounded">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-gray-100 text-base-content ">
                        {Menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;