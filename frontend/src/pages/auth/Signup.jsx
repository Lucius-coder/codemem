import FormInput from "../../components/FormInput.jsx";

const Signup = () => {
    return (
        <div className="flex justify-center items-center h-screen">

            <div className=" flex-col w-full max-w-sm p-5">
                <div className="flex  justify-center p-8">
                    <h1 className="text-2xl">Signup to codemem</h1>
                </div>
                <FormInput id="username" placeholder="enter your username" type="text"/>
                <FormInput id="email" placeholder="enter your email" type="email"/>
                <FormInput id="password" placeholder="enter your password" type="password"/>
                <FormInput id="confirm password" placeholder="confirm your password" type="password"/>

                <button
                    className="border px-2 py-3 rounded-lg w-full transition duration-300 ease-in-out transform bg-blue-400 text-white active:scale-90">Signup
                </button>
            </div>
        </div>
    );
};

export default Signup;