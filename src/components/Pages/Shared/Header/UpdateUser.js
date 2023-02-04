import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';


const UpdateUser = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const { UserUpdate } = useContext(AuthContext);
    const onSubmit = async (data) => {
        console.log(data)
        await UserUpdate({ displayName: (data.name).trim(), photoURL: (data.photo).trim() });
        reset()
    }
    console.log(errors)
    return (
        <div className='px-6 md:px-0'>
            <div className='border border-gray-400 md:w-1/2 md:mx-auto px-10 py-10 my-16 rounded shadow-xl'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-center font-mono text-3xl text-black'>Update Profile</h2>
                    <div className='pt-6 space-y-8'>
                        <div className=''>
                            <label htmlFor='name' className='pl-2 text-black'>Name</label>
                            <input {...register("name", { required: "User Name is Required" })} type="text" placeholder="Full Name" className="input border border-black input-bordered w-full bg-white text-black" />
                            <small className='text-red-500'>{errors?.name?.message}</small>
                        </div>
                        <div className=''>
                            <label htmlFor='photo' className='pl-2 text-black'>Photo</label>
                            <input {...register("photo", { required: "PhotoURL is Required" })} type="url" placeholder="PhotoURL Address" className="input border border-black input-bordered w-full bg-white text-black" />
                            <small className='text-red-500'>{errors?.photo?.message}</small>
                        </div>
                    </div>
                    <button className='btn btn-primary font-bold text-white text-center w-full mt-10'>Update User</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;