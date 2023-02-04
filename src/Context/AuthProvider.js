import React, { createContext, useEffect, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from '../components/Pages/Firebase/Firebase.config';
import { toast, useToast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import UseToken from '../components/Pages/Hooks/UseToken';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // const [userEmail, setUserEmail] = useState('');
    // const [accessToken] = UseToken(userEmail);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from.pathname || "/";
    // Create Json  Token
    const CreateJwtToken = (email) => {
        fetch('https://doctor-portal-server-seven-brown.vercel.app/jwt', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data, "Create Token from Server")
                if (data.accessToken) {
                    localStorage.setItem("accessToken", data.accessToken);
                }
            });
    }
    // Dashboard Create All User
    const AllUser = (user) => {
        const AddUser = async () => {
            await fetch(`https://doctor-portal-server-seven-brown.vercel.app/alluser`, {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(user)
            })
                .then(res => {
                    if (res.status === 409) {
                        toast.info("User already Added")
                        res.json();
                    }
                })
                .then(result => {
                    if (result) {
                        toast.success("User Created Successfully")
                    }
                    console.log(result)
                });
        }
        AddUser();
    }

    // Email Create User
    const CreateUser = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                if (result.user) {
                    CreateJwtToken(result.user.email);
                    toast("Sign-Up Successful");
                    navigate(from, { replace: true });
                }
            })
            .catch(err => {
                console.log(err)
                toast(err.message)
            })
    };

    // Email Login
    const UserSignIn = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                if (result.user) {
                    CreateJwtToken(result.user.email);
                    AllUser({ email: result.user.email })
                    toast("Login Successful");
                    navigate(from, { replace: true });
                }
            })
            .catch(err => {
                console.log(err)
                toast(err.message)
            })
    };
    // Email User Update 
    const UserUpdate = async (User) => {
        await updateProfile(auth.currentUser, {
            displayName: User.displayName, photoURL: User.photoURL
        })
            .then(res => {
                if (res?.user?.uid) {
                    AllUser({ displayName: user.displayName, photoURL: user.photoURL, email: user.email })
                    toast.success("User Updated Successful")
                    navigate(from, { replace: true });
                }
            })
            .catch(err => {
                console.log(err)
                toast(err.message)
            })
    };
    // Google SignUp-SignIn
    const signInGoogle = () => {
        const GoogleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, GoogleProvider)
            .then((res) => {
                if (res.user.uid) {
                    AllUser({ displayName: res.user.displayName, photoURL: res.user.photoURL, email: res.user.email });
                    CreateJwtToken(res.user.email);
                    toast("Login Successful");
                    navigate(from, { replace: true });
                }
            })
            .catch((error) => {
                toast(error?.message);
                console.log(error)
            })
    };
    // Email User Setup
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        });
        return () => unSubscribe()
    }, []);

    const AuthInfo = {
        CreateUser,
        UserSignIn,
        user,
        UserUpdate,
        signInGoogle,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;