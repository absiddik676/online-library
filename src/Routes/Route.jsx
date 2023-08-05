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
        element:<Dashboard/>,
        children:[
            {
                path:'/dashboard/addbook',
                element:<AddBook/>
            },
            {
                path:'/dashboard/alluser',
                element:<AllUser/>
            }
        ]
    }
]);

export default router