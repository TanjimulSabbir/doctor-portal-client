import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase.config';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';

const AllUser = () => {
    const { user } = useContext(AuthContext);
    const { data: AllUser = [], refetch } = useQuery({
        queryKey: ['delete', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://doctor-portal-server-seven-brown.vercel.app/alluser?email=${user?.email}`,
                {
                    method: 'GET',
                    headers: { 'authorization': `Bearer ${localStorage.getItem('accessToken')}` }
                })
            if (res.status === (401 || 403)) {
                return toast.error("Unauthorized Access")
            }
            const data = await res.json();
            if (data) {
                console.log(data, "data after jwt verify");
                return data;
            }
        }

    })
    const deleteHandle = (id) => {
        const fetchData = async () => {
            await fetch(`https://doctor-portal-server-seven-brown.vercel.app/alluser/${id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify({ email: user?.email })
                })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        console.log("All User unauthorized")
                        return signOut(auth);
                    }
                    res.json()
                })
                .then(data => {
                    if (data) {
                        toast.success("User Deleted Successfully")
                        refetch()
                    }
                })
            const refetchFast = () => {
                refetch({ force: true });
            }
            refetchFast()
        }
        fetchData()
    }

    return (
        <div className='w-full shadow-lg bg-white px-4 md:px-10 lg:px-14 min-h-screen'>
            <div className="overflow-x-auto w-full bg-[#F1F5F9] rounded-lg">
                <div className='flex justify-center md:justify-start mt-10 pl-10'>
                    <h2 className='text-4xl text-black font-bold'>All Users</h2>
                    {/* <button className='btn btn-outline'>DATE</button> */}
                </div>
                <table className="table w-full shadow-2xl mt-10">
                    <thead>
                        <tr>
                            <th className='bg-gray-200 text-black text-center'>Name</th>
                            <th className='bg-gray-200 text-black text-center'>Email</th>
                            <th className='bg-gray-200 text-black text-center'>Designation</th>
                            <th className='bg-gray-200 text-black text-center'>Options</th>
                        </tr>

                    </thead>
                    {
                        AllUser?.map(userdata => {
                            const { _id, photoURL, displayName, email, userType } = userdata;
                            return <tbody id='userlist'>
                                <tr>
                                    <td className='bg-[#F1F5F9] text-black border-b text-center flex justify-center'>
                                        <div className="flex">
                                            <div className="avatar">
                                                <div className="mask mask-circle w-12 h-12">
                                                    <img src={photoURL} alt="user" />
                                                </div>
                                                <td className={`bg-[#F1F5F9] text-black`}>{displayName}</td>
                                            </div>

                                        </div>
                                    </td>
                                    <td className='bg-[#F1F5F9] text-black border-b text-start'>
                                        {
                                            email === user?.email ?
                                                <p className='relative cursor-pointer' title='active'>{user?.email}
                                                    <small className='absolute top-[0px] right-3 text-black border py-0 px-1 rounded-full 
                                                    text-[8px] shadow bg-green-500'>active</small>
                                                </p>
                                                :
                                                <p>{email}</p>
                                        }
                                    </td>

                                    <td className='bg-[#F1F5F9] text-black border-b text-center'><p className='border border-success rounded-xl'>{userType ? userType : "General"}</p>
                                    </td>
                                    <td onClick={() => deleteHandle(_id)} className='bg-[#F1F5F9] text-black border-b text-center'>
                                        <button className="btn bg-red-600 text-black border-none rounded-lg btn-sm hover:bg-red-700">Delete</button>
                                    </td>
                                </tr>

                            </tbody>

                        })
                    }

                </table>
                <p className={`border py-4 text-center text-red-500 text-xl font-bold ${AllUser?.length > 0 ? "hidden" : ""}`}>{AllUser?.length === 0 && "No User Found"}</p>
            </div>
        </div>
    );
};

export default AllUser;