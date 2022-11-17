import React, { useContext, useState } from 'react';
import line from '../../assets/images/line.png'
import icon1 from '../../assets/social-icons/Facebook.png'
import icon2 from '../../assets/social-icons/Google.png'
import icon3 from '../../assets/social-icons/Github.png'
import login from '../../assets/images/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';
import toast from 'react-hot-toast';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useToken } from '../../hooks/useToken';

const Register = () => {
    const [error, setError] = useState();

    const { createUser, providerLogin, verifyEmail, updateUserInfo } = useContext(AuthContext)

    /*--------------
    navigate user 
    ---------------*/
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    /*-------------------------------------------------*/

    /* get JWT token for a registered user*/
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)

    if (token) {
        navigate(from, { replace: true })
    }


    const handleFormSubmit = event => {
        event.preventDefault()
        // const form = event.target;

        const userName = event.target.userName.value;
        const photoURL = event.target.photoURL.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (!/(?=.*[a-z])/.test(password)) {
            setError('Please provide at least 1 lowercase letter')
            return
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please provide at least 1 uppercase letter')
            return
        }
        if (!/(?=.*[0-9])/.test(password)) {
            setError('Please provide at least 1 number')
            return
        }
        if (!/(?=.*[!@#$&*%])/.test(password)) {
            setError('Please provide at least 1 special charecter')
            return
        }
        if (!/.{8}/.test(password)) {
            setError('Password length must be at least 8 charecters')
            return
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                event.target.reset()
                handleEmailVerification()
                handleUpdateUserInfo(userName, photoURL, email)
                toast.success('Please verify your email to register successfully!', { duration: 5000 })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(e => console.error(e))
    }

    const handleUpdateUserInfo = (userName, photoURL, email) => {
        const info = {
            displayName: userName,
            photoURL: photoURL,
            email: email
        }
        updateUserInfo(info)
            .then(() => {
                saveUserInfo(userName, email)
            })
            .catch(e => console.error(e))
    }

    /* request server side to create an API */
    const saveUserInfo = (userName, email) => {
        const dbUser = { name: userName, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dbUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCreatedUserEmail(email)
            })
    }

    /* get JWT api from server */
    // const getUserToken = email => {
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.accessToken) {
    //                 localStorage.setItem('accessToken', data.accessToken);
    //                 navigate(from, { replace: true })
    //             }
    //         })
    // }

    const facebookProvider = new FacebookAuthProvider()
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleFacebookSignin = () => {
        providerLogin(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })/* navigate user */
                setError('')
            })
            .catch(e => console.error(e))
    }
    const handleGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                saveUserInfo(user?.displayName, user?.email)
                navigate(from, { replace: true })/* navigate user */
                setError('')
            })
            .catch(e => console.error(e))
    }
    const handleGithubSignin = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })/* navigate user */
                setError('')
            })
            .catch(e => console.error(e))
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center font-bold">Register now!</h1>
                    <form onSubmit={handleFormSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='userName' placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Upload photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className='mt-3 text-red-700'>
                            {error}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Register</button>
                        </div>
                    </form>
                    <div className='card-body pt-0 text-center'>
                        <p>Already have an account? <Link to='/login' className='text-secondary'>Login now...</Link></p>
                        <div className='flex items-center justify-center'>
                            <img src={line} alt="" />
                            <p>OR</p>
                            <img src={line} alt="" />
                        </div>
                        <div className='flex justify-center items-center'>
                            <button onClick={handleFacebookSignin}>
                                <img className='ml-3' style={{ height: 45, width: 45 }} src={icon1} alt="" />
                            </button>
                            <button onClick={handleGoogleSignin}>
                                <img className='ml-3' style={{ height: 45, width: 45 }} src={icon2} alt="" />
                            </button>
                            <button onClick={handleGithubSignin}>
                                <img className='ml-3' style={{ height: 40, width: 40 }} src={icon3} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;