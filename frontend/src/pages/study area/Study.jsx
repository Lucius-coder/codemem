import Navbar from "../../components/Navbar.jsx";
import CodeEditor from "./CodeEditor.jsx";


const Study = () => {
    return (
        <div>
            <div className="flex">
                <Navbar/>

<div className=" w-screen p-8 overflow-y-auto">
<div className="m-3">
   <p className="font-bold text-2xl text-center">what is this </p>
</div>
    <div className="md:grid grid-cols-5 gap-4 w-full  h-3/4">
<div className="col-span-3 lg:h-3/4 ">

                <CodeEditor />
    <div className="flex justify-center">
        <button>show answer</button>
    </div>
</div>
        <div className="col-span-2 h-3/4 w-full">
            <CodeEditor />
        </div>
    </div>
</div>

            </div>

        </div>);
};

export default Study;