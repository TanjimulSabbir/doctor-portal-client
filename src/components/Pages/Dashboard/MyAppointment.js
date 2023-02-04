import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    const [MyAppointment, setMyAppointment] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://doctor-portal-server-seven-brown.vercel.app/dashboard/booking?email=${user?.email}`,
            {
                headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
            })
            .then(res => {
                if (res.status === 403 || res.status === 401) {
                    return toast("User Unautorized")
                }
                return res.json()
            })
            .then(data => setMyAppointment(data));
    }, [user?.email])
    return (
        <div className='w-full px-4 md:px-10 lg:px-14'>
            <div className='flex mt-12 justify-center md:justify-start'>
                <h2 className='text-4xl text-black font-bold'>My Appointment</h2>
            </div>
            <div className="overflow-x-auto mt-10 rounded-xl">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='bg-gray-200 text-black text-center'>Serial</th>
                            <th className='bg-gray-200 text-black text-center'>Name</th>
                            <th className='bg-gray-200 text-black text-center'>Service</th>
                            <th className='bg-gray-200 text-black text-center'>Appointment Date</th>
                            <th className='bg-gray-200 text-black text-center'>Payment Option</th>
                        </tr>
                    </thead>
                    {
                        MyAppointment.map((data, serial) => {
                            return <tbody>
                                <tr>
                                    <th className='bg-gray-50 text-black border-b text-center'>{serial + 1}</th>
                                    <td className='bg-gray-50 text-black border-b text-center'>{data.name}</td>
                                    <td className='bg-gray-50 text-black border-b text-center'>{data.treatmentName}</td>
                                    <td className='bg-gray-50 text-black border-b text-center'>{data.date}</td>
                                    <td className='bg-gray-50 text-black border-b text-center'>
                                        {
                                            data.price && !data.paid && <Link to={`/dashboard/payment/${data._id}`}>
                                                <button className="btn mx-auto bg-success text-black border-none rounded-lg btn-sm hover:bg-green-500 cursor-pointer">Pay</button>
                                            </Link>
                                        }

                                        {
                                            data.price && data.paid && (<Link>
                                                <button className="btn mx-auto bg-success text-black border-none rounded-lg btn-sm hover:bg-green-500 cursor-pointer">Paid</button>
                                            </Link>)
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        })
                    }

                </table>
                <small className='flex justify-center text-success'>{MyAppointment.length < 1 && "You have not booked any Appointment"}</small>
            </div>
        </div>
    );
};

export default MyAppointment;