import {createBrowserRouter} from "react-router-dom";
import Signup from "../../pages/auth/Signup.jsx";
import App from "../../App.jsx";
import Study from "../../pages/study area/Study.jsx";
import CreateCode from "../../pages/study area/CreateCode.jsx";
import Profile from "../../pages/profile/profile.jsx";
import Login from "../../pages/auth/Login.jsx";
import CreateDeck from "../../pages/study area/CreateDeck.jsx";

export const routes = createBrowserRouter([{
    path: "/", element: <Signup/>
}, {path: "/dashboard", element: <App/>},
    {path:"/study/:subject",element: <Study/>},{
    path:"/create",element: <CreateCode/>

    },{path:"/profile",element:<Profile/>},{path:"/login",element:<Login/>},{path:"/create-deck",element:<CreateDeck/>}])