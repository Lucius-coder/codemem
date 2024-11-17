import FormInput from "../../components/FormInput.jsx";
import {useContext} from "react";
import {GlobalContext} from "../../contexts/globalContext.jsx";
import {SubmitSignupCredentials} from "./submitCredentials.jsx";
import {Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const {
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        setConfirmPassword,
    } = useContext(GlobalContext)
    const navigate=useNavigate();
    console.log(username, password, email);
    return (
        <div className="flex justify-center items-center h-screen">
            <div className=" flex-col w-full max-w-sm p-5">
                <div className="flex  justify-center p-8">
                    <h1 className="text-2xl">Signup to codemem  </h1>
<Toaster/>
                </div>
                <FormInput id="username" placeholder="enter your username" type="text" state={setUsername}/>
                <FormInput id="email" placeholder="enter your email" type="email" state={setEmail}/>
                <FormInput id="password" placeholder="enter your password" type="password" state={setPassword}/>
                <FormInput id="confirm password" placeholder="confirm your password" type="password"
                           state={setConfirmPassword}/>

                <button
                    className="border px-2 py-3 rounded-lg w-full transition duration-300 ease-in-out transform bg-blue-400 text-white active:scale-90"
                    onClick={() => SubmitSignupCredentials(username, email, password, setConfirmPassword,navigate)}>Signup
                </button>
            </div>
        </div>
    );
};

export default Signup;