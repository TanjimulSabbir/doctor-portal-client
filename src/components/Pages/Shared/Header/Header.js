import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import UserAvator from './UserAvator';
import { signOut } from 'firebase/auth';
import auth from '../../Firebase/Firebase.config';

const Header = () => {
    const { user } = useContext(AuthContext);
    console.log(user, "form header component");
    const navigate = useNavigate()

    const userSignOut = () => {
        const EnsureLogOut = window.confirm("Do you want to Logout?")
        if (EnsureLogOut) {
            signOut(auth);
            navigate("/login")
        }
    }

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        {
            user?.uid ? <li onClick={userSignOut}><Link >Logout</Link> </li> : <li><Link to="/login">Login</Link></li>
        }
        <UserAvator></UserAvator>
    </>
    return (
        <div>
            <div className="navbar bg-primary relative">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-400 rounded-box w-52 text-black">
                            {menuItems}
                        </ul>
                    </div>
                    <a href className="btn btn-ghost normal-case text-xl">Doctor-Portal</a>
                </div>
                <div className="navbar-center hidden text-white lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;