import IconButton from "./IconButton.jsx";
import {Home, Plus, UploadIcon, UserRoundCogIcon} from "lucide-react";

// The Navbar component definition
const Navbar = () => {
    return (
        <div className="flex ">
            {/* The container for the navigation bar */}
            <div
                className="bg-white border-r-2 dark:bg-[rgba(0,0,0,.2)] max-w-sm p-4 h-screen flex flex-col justify-start items-center gap-3">

                {/* Main section of the navigation bar */}
                <div className="flex flex-col flex-[90%] gap-[1.2rem] mt-[2rem] items-center">
                    {/* Navigation buttons */}
                    <IconButton Component={Home} title="dashboard" />
                    <IconButton Component={Plus} title="create" />
                    <IconButton Component={UploadIcon} />
                </div>

                {/* Bottom section of the navigation bar */}
                <div className="flex-[10%] ">
                    {/* Profile button */}
                    <IconButton Component={UserRoundCogIcon} title="profile" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

