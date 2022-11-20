import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';

const CheckOutForm = ({ booking }) => {
    const { price, customer, email, _id } = booking;
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState("");


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setError(error.message)
        } else {
            setError('');
        }

        setSuccess('');
        setLoading(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: customer,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setError(confirmError.message);
            return;
        }

        if (paymentIntent.status === "succeeded") {

            /* save user åayment info in DB */
            const payment = {
                name: customer,
                price,
                bookingId: _id,
                email,
                transactionId: paymentIntent.id
            }

            fetch("http://localhost:5000/userPayments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        setSuccess('Payment is Successful');
                        setTransactionId(paymentIntent.id);
                    }

                })
        }
        setLoading(false)
        console.log('payment-intent', paymentIntent)
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
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
                <button className='btn btn-sm btn-success mt-8 mb-5' type="submit"
                    disabled={!stripe || !clientSecret || loading}>
                    Pay
                </button>
            </form>
            <p className='text-red-600 font-normal'> {error}</p>
            {success &&
                <div>
                    <p className='text-green-600 font-bold text-xl'>{success}</p>
                    <p className='text-lg italic'>Your Transaction Id: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckOutForm;