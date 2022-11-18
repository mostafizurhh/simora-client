import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';
import { useAdmin } from '../../hooks/useAdmin';
import Spinner from '../../pages/Shared/Spinner/Spinner';


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <div className='text-center'>
            <Spinner></Spinner>
        </div>
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login'
        state={{ from: location }} replace>
    </Navigate>
};

export default AdminRoute;