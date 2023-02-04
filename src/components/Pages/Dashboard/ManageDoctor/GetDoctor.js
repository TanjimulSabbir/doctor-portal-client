import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';

const GetDoctor = (email) => {
    const [getDoctors, setGetDoctors] = useState(null);
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://doctor-portal-server-seven-brown.vercel.app/dashboard/adddoctor?email=${user?.email}`, {
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                setGetDoctors(data)
            })
    }, [user?.email])
    return { getDoctors }
};

export default GetDoctor;