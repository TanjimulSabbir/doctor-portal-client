import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../Firebase/Firebase.config';


const UserAvator = () => {
    const { user } = useContext(AuthContext);
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();
    const userSignOut = () => {
        const EnsureLogOut = window.confirm("Do you want to Logout?")
        if (EnsureLogOut) {
            signOut(auth);
            navigate("/login")
        }
    }

    return (
        <div className="dropdown dropdown-end">
            <label onClick={() => setMenu(!menu)} tabIndex={0} className="btn btn-outline btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt='profilephoto' />
                </div>
            </label>
            <ul tabIndex={0} className={`mt-3 p-2 shadow menu menu-compact dropdown-content text-black font-semibold bg-gray-400 rounded-box w-52 ${menu ? "block" : "hidden"} lg:block`}>
                <li>
                    <a>
                        {
                            user ? user?.displayName ? user?.displayName : <Link to="/updateUser" className="justify-between">
                                Update Profile <span className='badge'>New</span>
                            </Link> : "No User"
                        }

                    </a>
                </li>
                <li><a>Settings</a></li>
                {
                    user ? <li><Link onClick={userSignOut}><a>Logout</a></Link></li> : <li><Link to="/login"><a>Login</a></Link></li>
                }
            </ul>
        </div>
    );
};

export default UserAvator;