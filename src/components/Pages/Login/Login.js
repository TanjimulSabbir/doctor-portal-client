import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Context/AuthProvider';
const Login = () => {
    const [Passwordshow, setPasswordShow] = useState(false);
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const { UserSignIn, signInGoogle } = useContext(AuthContext);

    const onSubmit = (data) => {
        UserSignIn(data.email, data.password);
        reset();
    }
    console.log(errors);
    const GoogleSignIn = () => {
        signInGoogle()
    }
    return (
        <div className='px-6 md:px-0'>
            <div className='border border-gray-400 md:w-1/2 md:mx-auto px-10 py-10 my-16 rounded shadow-xl'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-center font-mono text-4xl text-black'>Login</h2>
                    <div className='pt-10 space-y-8'>
                        <div>
                            <label htmlFor='email' className='pl-2 text-black'>Email</label>
                            <input {...register("email", { required: "Email Address is Required" })} type="email" placeholder="Email Address" className="input border border-black input-bordered w-full bg-white text-black" required />
                            <small className='text-red-600'>{errors?.email?.message}</small> <br />
                        </div>

                        <div>
                            <label htmlFor="password" className='pl-2 text-black'>Password</label>

                            <div className='relative'>
                                <input {...register("password", { required: "Password is Required", minLength: { value: "6", message: "Password must be 6 charecter" } })} type={Passwordshow ? "text" : "password"} placeholder="Password" className="input border border-black input-bordered w-full bg-white text-black" required />
                                <small className='text-red-600'>{errors?.password?.message}</small> <br />
                                <Link className='text-sm text-gray-800'>Forgot Password?</Link>
                                {/* fontawesome  password show Icon  */}
                                <FontAwesomeIcon className='text-black absolute top-4 right-3 cursor-pointer' onClick={() => setPasswordShow(!Passwordshow)} icon={Passwordshow ? faEye : faEyeSlash}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-primary text-lg text-white text-center w-full mt-10'>Login</button>
                    <p className='pl-2 mt-2 text-sm text-gray-800'>New to Doctors Portal? <Link to="/signup" className='text-color1'>Create New Account</Link></p>
                </form>
                <div className="flex flex-col w-full border-opacity-50 mt-8">
                    <div className="divider text-black">OR</div>
                    <button onClick={() => GoogleSignIn()} className='py-4 border mt-10 text-xl bg-white text-black border-gray-800 rounded-lg hover:bg-emerald-500 hover:border-emerald-500 transition-all delay-75 duration-300'>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;