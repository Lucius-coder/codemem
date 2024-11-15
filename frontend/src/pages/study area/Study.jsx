import IconButton from "../../components/IconButton.jsx";
import Navbar from "../../components/Navbar.jsx";
import CodeEditor from "./CodeEditor.jsx";
import {DeleteIcon, EditIcon, LucideTrash, PauseIcon, PlayIcon} from "lucide-react";


const Study = () => {
    return (
        <div>
            <div className="flex h-screen">
                <Navbar/>

                <div className=" w-screen p-8 overflow-y-auto ">
                    <div className="flex ">
                        <div
                            className=" flex  lg:w-md  p-2  gap-2 flex-[90%] rounded-md  transition duration-200">
                            <div className="flex gap-5 flex-wrap">
                                <h1 className="text-xl font-bold ">How do you rate this question?</h1>
                                <button className="active:scale-75 transition duration-200 text-red-500">hard</button>
                                <button className="active:scale-75 transition duration-200 text-yellow-500">normal
                                </button>
                                <button className="active:scale-75 transition duration-200 text-green-500">Easy</button>
                            </div>


                        </div>

                        <div className="inline-flex  flex-[10%] justify-between items-center gap-4">
                            <IconButton Component={PlayIcon}/>
                            <IconButton Component={DeleteIcon}/>

                        </div>


                    </div>
                    <div className="m-3">
                        <p className="font-bold text-2xl text-center">what is this </p>
                    </div>
                    <div className="md:grid grid-cols-5 gap-4 w-full  h-screen">
                        <div className="col-span-3 lg:h-3/4">

                            <CodeEditor/>

                        </div>
                        <div className="col-span-2 h-3/4 w-full">
                            <CodeEditor/>
                        </div>

                    </div>
                </div>

            </div>

        </div>);
};

export default Study;