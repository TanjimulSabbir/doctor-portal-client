import React, { useContext } from 'react';
import GetDoctor from './GetDoctor';
import { AuthContext } from '../../../../Context/AuthProvider';


const ManageDoctor = () => {
    const { user } = useContext(AuthContext);
    const { getDoctors } = GetDoctor(user);
    console.log(getDoctors, "getDoctors")
    return (
        <div className="overflow-x-auto px-4 md:px-10 lg:px-14 py-10 bg-gray-200 min-h-screen">
            <h2 className='font-bold text-4xl text-black text-center md:text-start'>Manage Doctor</h2>
            <table className="table w-full shadow-lg mt-10">
                <thead>
                    <tr>
                        <th className='bg-gray-400 text-black'>Doctor Name</th>
                        <th className='bg-gray-400 text-black'>Specialty</th>
                        <th className='bg-gray-400 text-black'>Email</th>
                        <th className='bg-gray-400 text-black'>Option</th>
                    </tr>
                </thead>
                {
                    getDoctors?.map((doctor, index) => {
                        return <tbody key={doctor._id}>
                            <tr>
                                <td className='bg-white text-black flex items-center space-x-2'>
                                    <div className="avatar">
                                        <div className="mask mask-circle w-12 h-12">
                                            <img src={doctor.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>{doctor.doctorName}</div></td>
                                <td className='bg-white text-black'>{doctor.specialty}</td>
                                <td className='bg-white text-black'>{doctor.email}</td>
                                <td className='bg-white text-black'><p className='btn btn-primary'>Details</p></td>
                            </tr>
                        </tbody>
                    })
                }
            </table>
        </div>
    )
};

export default ManageDoctor;