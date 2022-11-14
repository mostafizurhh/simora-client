
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext/AuthProvider';
import logo from './logo.png'

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(e => console.error(e))
    }
    const menuItems =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/appoinment'>Appoinment</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact Us</NavLink></li>

            {
                user?.uid ?
                    <>
                        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </>
                    :
                    <>
                        <li><NavLink to='/login'>Login</NavLink></li>
                        <li><NavLink to='/register'>Register</NavLink></li>
                    </>
            }
            {
                user?.photoURL ?
                    <div className="btn btn-circle btn-outline tooltip tooltip-bottom mr-2 w-12" data-tip={user?.displayName}>
                        <img src={user?.photoURL} alt="" />
                    </div>
                    :
                    <></>
            }

        </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img style={{ width: 35, height: 35 }} className='rounded-2xl' src={logo} alt="" />
                <NavLink to='/' className="btn btn-ghost normal-case text-xl">SIMORA</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;