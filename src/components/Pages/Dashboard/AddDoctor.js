import { error } from 'daisyui/src/colors';
import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase.config';
import { AuthContext } from '../../../Context/AuthProvider';

const AddDoctor = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const { data: treatmentNames } = useQuery({
        queryKey: ["treatmentName"],
        queryFn: async () => {
            const res = await fetch('https://doctor-portal-server-seven-brown.vercel.app/dashboard/specialty');
            const data = await res.json();
            return data;
        }
    });

    const handleDoctor = (data) => {
        const doctorData = {
            doctorName: data.doctorName.trim(),
            email: data.email.trim(),
            specialty: data.specialty.trim(),
            photo: data.photo.trim()
        }
        AddDoctor(doctorData);
        reset();
    }
    const AddDoctor = (addDoctor) => {
        const AddFetch = async () => {
            const res = await fetch(`https://doctor-portal-server-seven-brown.vercel.app/dashboard/adddoctor?email=${user?.email}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(addDoctor)
            })
            if (res.status === (401 || 403)) {
                toast.warn("Hey, You are not Admin. Go Away!")
                return;
            }
            if (res.status === 409) {
                toast.error(`${addDoctor.email} already added`)
            }
            const data = await res.json()
            if (data.result.acknowledged) {
                toast.success("Doctor Added Successfully");
                console.log(data);
            }
        }
        AddFetch();
    }

    return (
        <div className='md:w-3/5 px-10 py-10 rounded shadow-xl mx-14'>
            <form onSubmit={handleSubmit(handleDoctor)}>
                <h2 className='font-bold text-4xl text-black text-center md:text-start'>Add a New Doctor</h2>
                <div className='pt-6 space-y-4'>
                    <div>
                        <label htmlFor='doctorName' className='pl-2 text-black'>Doctor Name</label>
                        <input {...register("doctorName", { required: "Doctor name is required" })} type="text" placeholder="Doctor Name" className="input border border-black input-bordered w-full bg-white text-black" required />
                        <small className='text-red-600'>{errors?.doctorName?.message}</small> <br />
                    </div>
                    <div>
                        <label className='pl-2 text-black'>Email</label>
                        <input {...register("email", { required: "Email address is required" })} type="email" placeholder="Email Address" className="input border border-black input-bordered w-full bg-white text-black" required />
                        <small className='text-red-600'>{errors?.email?.message}</small> <br />
                    </div>
                    <div>
                        <label className='pl-2 text-black'>Specialty</label>
                        <div>
                            <select {...register("specialty", { required: "select*" })} className="select input-bordered border-black w-full bg-white text-black">
                                {treatmentNames?.map(treatement => <option key={treatement?._id} className='border text-black'>
                                    {treatement?.treatmentName}
                                </option>)}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className='pl-2 text-black'>Photo</label> <br />
                        <input type="text" {...register("photo", { required: "photo is required" })} className='input border-black bg-white border w-full' placeholder='PhotoURl' />
                    </div>

                </div>
                <button className='btn btn-primary text-white text-center w-full mt-10'>Add Doctor</button>
            </form>
        </div>
    );
};

export default AddDoctor;