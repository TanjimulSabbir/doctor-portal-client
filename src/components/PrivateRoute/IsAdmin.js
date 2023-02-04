import { signOut } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import auth from '../Pages/Firebase/Firebase.config';

const IsAdmin = (User) => {
    const [admin, setAdmin] = useState('');
    const { user } = useContext(AuthContext);
    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://doctor-portal-server-seven-brown.vercel.app/alluser?email=${user?.email}`, {
                headers: { 'authorization': `bearer ${localStorage.getItem('accessToken')}` }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        return signOut(auth);
                    }
                    return res.json()
                })
                .then(data => {
                    console.log(data, "Admin Router")
                    const matchedUser = data?.find(User => User.email === user.email);
                    if (matchedUser) {
                        setAdmin(matchedUser.userType)
                    }
                });
        }
        fetchData()
    }, [user?.email]);
    return { admin };
};

export default IsAdmin;