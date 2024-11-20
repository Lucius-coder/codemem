import CodeEditor from "./CodeEditor.jsx";
import IconButton from "../../components/IconButton.jsx";
import {SaveIcon} from "lucide-react";
import Navbar from "../../components/Navbar.jsx";


const CreateCode = () => {
    return (<div className="flex ">
            <Navbar/>
            <div className=" h-screen p-8 w-screen">

                <div className="flex items-center gap-3">
                    <div className="flex-[90%]">
                        <input type="text" placeholder="enter your deckname "
                               className=" w-full   pl-5 py-2 rounded-3xl border-none bg-none"/>
                    </div>
                    <div className="flex-[10%]">
                        <IconButton Component={SaveIcon}/>
                    </div>


                </div>
                <div className="m-3">

                </div>
                <div className="h-3/4 w-full">
                    <p>  </p>
                    <CodeEditor value="//you can add some javascript object  code here with the key value pair of question and answer
                   // [ {question:'your question',answer:'your answer'} ]"/>
                </div>
            </div>
        </div>

    );
};

export default CreateCode;