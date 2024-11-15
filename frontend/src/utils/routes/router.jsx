import {createBrowserRouter} from "react-router-dom";
import Signup from "../../pages/auth/Signup.jsx";
import App from "../../App.jsx";
import Study from "../../pages/study area/Study.jsx";

export const routes = createBrowserRouter([{
    path: "/", element: <Signup/>
}, {path: "/dashboard", element: <App/>},
    {path:"/note",element: <Study/>}])