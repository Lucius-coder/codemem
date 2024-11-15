import IconButton from "../../components/IconButton.jsx";
import Navbar from "../../components/Navbar.jsx";
import CodeEditor from "./CodeEditor.jsx";
import {DeleteIcon, PlayIcon} from "lucide-react";

// Study component
const Study = () => {
    return (
        <div>
            <div className="flex h-screen">
                {/* Left-hand navigation bar */}
                <Navbar/>

                <div className="w-screen p-8 overflow-y-auto">
                    <div className="flex">
                        {/* Main content area */}
                        <div className="flex lg:w-md p-2 gap-2 flex-[90%] rounded-md transition duration-200">
                            <div className="flex gap-5 flex-wrap">
                                <h1 className="text-xl font-bold">How do you rate this question?</h1>
                                {/* Buttons for rating the question */}
                                <button className="active:scale-75 transition duration-200 text-red-500">hard</button>
                                <button className="active:scale-75 transition duration-200 text-yellow-500">normal</button>
                                <button className="active:scale-75 transition duration-200 text-green-500">Easy</button>
                            </div>
                        </div>

                        {/* Section for action buttons */}
                        <div className="inline-flex flex-[10%] justify-between items-center gap-4">
                            {/* Icon buttons */}
                            <IconButton Component={PlayIcon}/>
                            <IconButton Component={DeleteIcon}/>
                        </div>
                    </div>

                    {/* Title in the center */}
                    <div className="m-3">
                        <p className="font-bold text-2xl text-center">what is this</p>
                    </div>

                    {/* Layout for code editors */}
                    <div className="md:grid grid-cols-5 gap-4 w-full h-screen">
                        <div className="col-span-3 lg:h-3/4">
                            {/* Left code editor */}
                            <CodeEditor/>
                        </div>
                        <div className="col-span-2 h-3/4 w-full">
                            {/* Right code editor */}
                            <CodeEditor/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Study;

