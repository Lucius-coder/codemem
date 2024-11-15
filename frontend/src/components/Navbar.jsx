import IconButton from "./IconButton.jsx";
import {Home, Plus, Settings, UploadIcon} from "lucide-react";

const Navbar = () => {
    return (
        <div className="flex ">
            <div
                className="bg-white border-r-2 dark:bg-[rgba(0,0,0,.2)] max-w-sm  p-4 h-screen flex flex-col justify-start items-center gap-3">
                <div className="flex flex-col flex-[90%] gap-[1.2rem] mt-[2rem] items-center">
                    <IconButton Component={Home}/>
                    <IconButton Component={Plus}/>
                    <IconButton Component={UploadIcon}/>
                </div>
                <div className="flex-[10%] ">

                    <IconButton Component={Settings}/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;