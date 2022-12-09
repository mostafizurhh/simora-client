import { createBrowserRouter } from "react-router-dom";
import Main from '../../layout/Main/Main';
import Appoinment from "../../pages/Appoinment/Appoinment";
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import PrivateRoute from "./PrivateRoute";
import DashBoardLayout from '../../layout/DashBoardLayout/DashBoardLayout';
import MyAppoinment from "../../pages/DashBoard/MyAppoinment";
import AllUsers from '../../pages/DashBoard/AllUsers'
import AdminRoute from "./AdminRoute";
import AddADoctor from "../../pages/DashBoard/AddADoctor";
import ManageDoctors from "../../pages/DashBoard/ManageDoctors";
import Payment from "../../pages/Payment/Payment";
import ErrorPage from "../../pages/Shared/ErrorPage/Error";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appoinment',
                element: <Appoinment></Appoinment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppoinment></MyAppoinment>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
            ,
            {
                path: '/dashboard/addadoctor',
                element: <AdminRoute><AddADoctor></AddADoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: async ({ params }) => fetch(`http://localhost:5000/booking/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])