import React from 'react';
import login from '../../assets/images/login.png'
import { Link } from 'react-router-dom';
import line from '../../assets/images/line.png'
import icon1 from '../../assets/social-icons/Facebook.png'
import icon2 from '../../assets/social-icons/Google.png'
import icon3 from '../../assets/social-icons/Github.png'

const Login = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center font-bold">Login now!</h1>
                    <form className="card-body">
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
                            <label className="label">
                                <button href="#" className="  label-text-alt link link-hover">Forgot password?</button>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
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
                            <button>
                                <img className='ml-3' style={{ height: 45, width: 45 }} src={icon1} alt="" />
                            </button>
                            <button>
                                <img className='ml-3' style={{ height: 45, width: 45 }} src={icon2} alt="" />
                            </button>
                            <button>
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