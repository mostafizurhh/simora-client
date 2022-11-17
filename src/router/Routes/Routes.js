import { createBrowserRouter } from "react-router-dom";
import Main from '../../layout/Main/Main';
import Appoinment from "../../pages/Appoinment/Appoinment";
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import PrivateRoute from "./PrivateRoute";
import About from '../../pages/About/About';
import DashBoardLayout from '../../layout/DashBoardLayout/DashBoardLayout';
import MyAppoinment from "../../pages/DashBoard/MyAppoinment";



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
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <About></About>
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
            }
        ]
    }
])