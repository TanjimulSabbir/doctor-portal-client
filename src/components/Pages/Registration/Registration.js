import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';


const Registration = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { CreateUser, signInGoogle } = useContext(AuthContext);
    const [Passwordshow, setPasswordShow] = useState(false);

    const onSubmit = (data) => {
        console.log(data)
        CreateUser(data.email, data.password)
    }
    console.log(errors);

    const GoogleSignIn = () => {
        signInGoogle()
    }

    return (
        <div className='px-6 md:px-0'>
            <div className='border border-gray-400 md:w-1/2 md:mx-auto px-10 py-10 my-16 rounded shadow-xl'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-center font-mono text-3xl text-black'>Create a Account</h2>
                    <div className='pt-6 space-y-8'>
                        <div className=''>
                            <label htmlFor='name' className='pl-2 text-black'>Name</label>
                            <input {...register("name", { required: "User Name is Required" })} type="text" placeholder="Full Name" className="input border border-black input-bordered w-full bg-white text-black" />
                            <small className='text-red-500'>{errors?.name?.message}</small>
                        </div>
                        <div className=''>
                            <label htmlFor='email' className='pl-2 text-black'>Email</label>
                            <input {...register("email", { required: "Email is Required" })} type="email" placeholder="Email Address" className="input border border-black input-bordered w-full bg-white text-black" />
                            <small className='text-red-500'>{errors?.email?.message}</small>
                        </div>
                        <div>
                            <label htmlFor="password" className='pl-2 text-black'>Password</label>

                            <div className='relative'>
                                <input {...register(
                                    "password", {
                                    required: "Password is Required",
                                    minLength: { value: 6, message: "Password must have minimum 6 charecters" },
                                    pattern: {
                                        value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/, message: "Password Must be strong"
                                    }
                                })} type={Passwordshow ? "text" : "password"} placeholder="Password" className="input border border-black input-bordered w-full bg-white text-black" />
                                <small className='text-red-500'>{errors?.password?.message}</small>
                                {/* fontawesome  password show Icon  */}
                                <FontAwesomeIcon className='text-black absolute top-4 right-3 cursor-pointer' onClick={() => setPasswordShow(!Passwordshow)} icon={Passwordshow ? faEye : faEyeSlash}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-primary text-lg text-white text-center w-full mt-10'>Sign Up</button>
                    <p className='pl-2 mt-2 text-sm text-gray-800'>Already have an account? <Link to="/login" className='text-color1'>Do you want to login?</Link></p>
                </form>

                <div className="flex flex-col w-full border-opacity-50 mt-4">
                    <div className="divider text-black">OR</div>
                    <button onClick={() => GoogleSignIn()} className='py-4 border mt-10 text-xl bg-white text-black border-gray-800 rounded-lg hover:bg-emerald-500 hover:border-emerald-500 transition-all delay-75 duration-300'>Continue With Google</button>
                    <button className='py-4 border mt-10 text-xl bg-white text-black border-gray-800 rounded-lg hover:bg-emerald-500 hover:border-emerald-500 transition-all delay-75 duration-300'>Continue With Github</button>
                </div>
            </div>
        </div>
    );
};

export default Registration;