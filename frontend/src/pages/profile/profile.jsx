import Navbar from "../../components/Navbar.jsx";
import ToggleSwitch from "./ToggleSwitch.jsx";

const Profile = () => {
    return (
        <div className="flex ">
            <Navbar/>
            <div className=" flex-col w-full max-w-sm p-5">
                <div className="flex  justify-start p-8">
                    <h1 className="text-2xl">Profile</h1>
                </div>
<ToggleSwitch label={"Dark Mode"}/>
            </div>
        </div>
    );
};


export default Profile