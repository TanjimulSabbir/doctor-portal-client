import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const CheckOutForm = ({ bookingData }) => {
    const [clientSecret, setClientSecret] = useState("");
    const [PaidSucced, setPaidSucced] = useState('');
    const [payError, setPayError] = useState('');
    const [payLoading, setPayLoading] = useState(false);
    const [paidInfo, setPaidInfo] = useState(null);
    const stripe = useStripe();
    const elements = useElements();

    if (payError) {
        toast.error(payError.message)
        setPayError('')
        setPayLoading(false)
    }
    if (PaidSucced) {
        toast.success(PaidSucced)
        setPayLoading(false)
        setPaidSucced('')
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://doctor-portal-server-seven-brown.vercel.app/create-payment-intent`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ price: 99 })
            })
            console.log(res, 'res')
            const data = await res.json();
            console.log('clientSecret', data)
            if (data) {
                setClientSecret(data.clientSecret)
            }
        }
        fetchData()

    }, [bookingData?.price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setPayLoading(true);
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            console.log('stripe', stripe, elements)
            return;
        }
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('[error]', error);
            setPayError('');
            setPayError(error);
            return;
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: bookingData?.email
                },
            },
        })
        if (paymentError) {
            setPayError(paymentError);
            setPayLoading(true)
            return;
        }
        if (paymentIntent.status === 'succeeded') {

            const info = {
                price: bookingData.price,
                transactionId: paymentIntent.id, bookingId: bookingData._id, email: bookingData.email, treatmentName: bookingData.treatmentName
            }
            fetch('https://doctor-portal-server-seven-brown.vercel.app/paymentInfo', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(info)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setPaidSucced("Payment Successed");
                    setPaidInfo(paymentIntent);
                })
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='w-1/2 bg-teal-300 rounded p-4'>
                <CardElement className='input input-bordered p-2 bg-white shadow-lg  font-bold'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: 'green',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm my-6 w-full' type="submit" disabled={!stripe || !clientSecret || payLoading}>
                    Pay
                </button>

            </form>
            {
                paidInfo && <div className='mt-6 bg-purple-400 rounded-lg py-6 pl-4 font-serif w-1/2'>
                    <p className='text-green-600 text-xl pb-1'> Congrats! Your payment is successed</p>
                    <span className='text-black'>Payment Id: </span>
                    <small className='text-gray-800'> {paidInfo.id}</small>
                </div>
            }
        </div>
    );
};

export default CheckOutForm;