import FormInput from "../../components/FormInput.jsx";
import {useContext} from "react";
import {GlobalContext} from "../../contexts/globalContext.jsx";
import {Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {SubmitLoginCredentials} from "./submitCredentials.js";
const Login = () => {
    const {
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,

    } = useContext(GlobalContext)
    const navigate=useNavigate();
    console.log(username, password, email);
    return (
        <div className="flex justify-center items-center h-screen">
            <div className=" flex-col w-full max-w-sm p-5">
                <div className="flex  justify-center p-8">
                    <h1 className="text-2xl">Login to codemem  </h1>
                    <Toaster/>
                </div>
                <FormInput id="username" placeholder="enter your username" type="text" state={setUsername}/>
                <FormInput id="email" placeholder="enter your email" type="email" state={setEmail}/>
                <FormInput id="password" placeholder="enter your password" type="password" state={setPassword}/>


                <button onClick={()=>SubmitLoginCredentials(username,email,password,navigate)}
                    className="border px-2 py-3 rounded-lg w-full transition duration-300 ease-in-out transform bg-blue-400 text-white active:scale-90">Login
                </button>
            </div>
        </div>
    );
};

export default Login;