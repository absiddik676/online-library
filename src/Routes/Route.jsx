import {
    createBrowserRouter,
    
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../Layout/Dashboard";
import AddBook from "../pages/Dashboard/Admin/AddBook/AddBook";
import Books from "../pages/Books/Books";
import AllUser from "../pages/Dashboard/Admin/AllUser/AllUser";
import MyReqBook from "../pages/Dashboard/User/MyReqBook/MyReqBook";
import AllReqBook from "../pages/Dashboard/Admin/AllReqBook/AllReqBook";
import MyIssuedBook from "../pages/Dashboard/User/MyIssuedBook/MyIssuedBook";
import ManageIssuedBook from "../pages/Dashboard/Admin/ManageIssuedBook/ManageIssuedBook";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/books',
                element:<Books/>
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<Signup/>
    },
    {
        path:"/dashboard",
        element:<PrivateRoute><Dashboard/></PrivateRoute>,
        children:[
            {
                path:'/dashboard/addbook',
                element:<AddBook/>
            },
            {
                path:'/dashboard/alluser',
                element:<AllUser/>
            },
            {
                path:'/dashboard/reqBook',
                element:<MyReqBook/>
            },
            {
                path:'/dashboard/AllReqBook',
                element:<AllReqBook/>
            },
            {
                path:'/dashboard/MyIssuedBook',
                element:<MyIssuedBook/>
            },
            {
                path:'/dashboard/manageReqBook',
                element:<ManageIssuedBook/>
            },

        ]
    }
]);

export default router