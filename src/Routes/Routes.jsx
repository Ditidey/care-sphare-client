import { createBrowserRouter } from "react-router-dom";
import MainLay from "../Layouts/MainLay";
import Home from "../Home/Home";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Login/Login";
import Register from "../Login/Register";
import SocialLogin from "../Login/SocialLogin";
import CreateCares from "../Admin/CreateCares";
import Signup from "../Login/Signup";
import VolunteerLists from "../Admin/VolunteerLists";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLay></MainLay>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/createCares',
                element: <CreateCares></CreateCares>
            },
            {
                path: '/volunteerLists',
                element:  <VolunteerLists></VolunteerLists>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register/:id',
                element: <ProtectedRoute><Register></Register>,</ProtectedRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/allEvents/${params.id}`)
                
            },
            {
                path: '/socialLogin',
                element: <SocialLogin></SocialLogin>
            }
        ]
    },
      
   
])

export default router;