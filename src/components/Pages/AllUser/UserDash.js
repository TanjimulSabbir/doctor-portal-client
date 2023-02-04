import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase.config';

const UserDash = () => {
    const [userList, setUserList] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://doctor-portal-server-seven-brown.vercel.app/alluser?email=${user?.email}`, {
                headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        return signOut(auth);
                    }
                    return res.json()
                })
                .then(data => {
                    console.log(data, "All User Verifying Data")
                    setUserList(data)
                });
        }
        fetchData()
    }, [user?.email]);
    return (
        <div className='py-10 bg-[#F1F5F9] px-10 lg:px-16 shadow-lg'>
            <div className="overflow-x-auto w-full mt-10 rounded-lg">
                <div className='flex justify-between'>
                    <h2 className='text-3xl text-black font-bold pl-4'>All Users</h2>
                    {/* <button className='btn btn-outline'>DATE</button> */}
                </div>
                <table className="table w-full shadow-2xl mt-10">
                    <thead className='border-y'>
                        <tr>
                            <th className='bg-teal-500 text-black'>Name</th>
                            <th className='bg-teal-500 text-black'>Email</th>
                            <th className='bg-teal-500 text-black'>Designation</th>
                            <th className='bg-teal-500 text-black'>User Preference</th>
                        </tr>

                    </thead>
                    {
                        userList?.map(userdata => {
                            const { photoURL, displayName, email, userType } = userdata;
                            return <tbody id='userlist'>
                                <tr>
                                    <td className='bg-[#F1F5F9] text-black border-b'>
                                        <div className="flex">
                                            <div className="avatar">
                                                <div className="mask mask-circle w-12 h-12">
                                                    <img src={photoURL} alt="user" />
                                                </div>
                                                <td className='bg-[#F1F5F9] text-black'>{displayName}</td>
                                            </div>

                                        </div>
                                    </td>
                                    <td className='bg-[#F1F5F9] text-black border-b'>{email === user?.email ? <p className='relative'>{user?.email} <small className='absolute text-green-500 bottom-4 border -right-4 badge-sm rounded-2xl' >active</small></p> : email}</td>
                                    <td className='bg-[#F1F5F9] text-black border-b text-center'><p className='border border-success rounded-xl'>{userType ? userType : "General"}</p></td>
                                    <td className='bg-[#F1F5F9] text-black border-b'>
                                        <button className="btn bg-red-600 text-black border-none rounded-lg btn-sm hover:bg-red-700">Delete</button>
                                    </td>
                                </tr>

                            </tbody>

                        })
                    }

                </table>
                <p className={`border py-4 text-center text-red-500 text-xl font-bold ${userList.length > 0 ? "hidden" : ""}`}>{userList.length === 0 && "No User Found"}</p>
            </div>
        </div>
    );
};

export default UserDash;