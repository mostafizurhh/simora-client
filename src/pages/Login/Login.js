import React, { useContext, useState } from 'react';
import login from '../../assets/images/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import line from '../../assets/images/line.png'
import icon1 from '../../assets/social-icons/Facebook.png'
import icon2 from '../../assets/social-icons/Google.png'
import icon3 from '../../assets/social-icons/Github.png'
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useToken } from '../../hooks/useToken';

const Login = () => {
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const { loginWithEmail, providerLogin, passwordReset, setLoading } = useContext(AuthContext)

    const [loggedinUserEmail, setLoggedinUserEmail] = useState('');
    const [token] = useToken(loggedinUserEmail)

    /*--------------
     navigate user 
     ---------------*/
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    /*-------------------------------------------------*/

    if (token) {
        navigate(from, { replace: true })/* navigate user */
    }
    const handleFormSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmail(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setLoggedinUserEmail(email)
                setError('')
                form.reset()
                /* restrict user to navigate unless email verification */
                /* if (user.emailVerified) {
                    navigate(from, { replace: true })}/* navigate user */
                /* else {
                    toast.error('Please verify your email first')
                } */
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

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

    const handleEmailBlur = (event) => {
        const email = event.target.value;
        setEmail(email)
    }
    const handlePassowrdReset = () => {
        if (!email) {
            alert('Please enter your email')
        }
        passwordReset(email)
            .then(() => {
                alert('Please check your email to reset password')
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
                    <h1 className="text-3xl text-center font-bold">Login now!</h1>
                    <form onSubmit={handleFormSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleEmailBlur} type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <button onClick={handlePassowrdReset} href="#" className="  label-text-alt link link-hover">Forgot password?</button>
                            </label>
                        </div>
                        <div className='mt-3 text-red-700'>
                            {error}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Login</button>
                        </div>
                    </form>
                    <div className='card-body pt-0 text-center'>
                        <p>New to SIMORA? <Link to='/register' className='text-secondary'>Create new account</Link></p>
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

export default Login;