import {createBrowserRouter} from "react-router-dom";
import Signup from "../../pages/auth/Signup.jsx";
import App from "../../App.jsx";

export const routes = createBrowserRouter([{
    path: "/", element: <Signup/>
}, {path: "/dashboard", element: <App/>}])