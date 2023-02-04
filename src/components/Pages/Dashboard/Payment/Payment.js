import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';


const Payment = () => {
    const params = useParams();
    const Id = params.id;
    const { data: bookingData } = useQuery({
        queryKey: ['bookingData', Id],
        queryFn: async () => {
            const res = await fetch(`https://doctor-portal-server-seven-brown.vercel.app/dashboard/payment/${Id}`, {
                headers: {
                    "content-type": "application/json",
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            if (data) {
                return data;
            }
            console.log(data, 'bookingData')
        }
    })

    // Make sure to call `loadStripe` outside of a component’s render to avoid
    // recreating the `Stripe` object on every render.
    const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PK}`);
    console.log(stripePromise, 'stripePromise')
    return (
        <div className='bg-teal-100 rounded p-8'>
            <h3 className='text-4xl text-black font-bold'>Payment for {bookingData?.treatmentName}</h3>
            <h3 className="text-cyan-800 pt-3">Please, Pay <strong> {bookingData?.price}</strong> for your appointment on <strong>{bookingData?.date}</strong> at {bookingData?.slot}</h3>
            <div className='my-10'>
                <Elements stripe={stripePromise} >
                    <CheckOutForm bookingData={bookingData} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;