import {Home, Plus, SearchIcon, Settings} from "lucide-react";
import IconButton from "./components/IconButton.jsx";
import Card from "./components/Card.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {

    return (
        <div className=" inline-flex h-screen w-full ">
            <Navbar/>
            <div className="overflow-y-auto mx-auto dark:bg-[#212121] p-3 justify-center">

                <div className=" flex justify-center p-2 w-md items-center">

                    <input type="text" placeholder="search subjects "
                           className=" lg:w-1/2 w-3/4 pl-5 py-2 rounded-3xl border-none bg-none"/>
                    <IconButton Component={SearchIcon}/>
                </div>
                <div className="md:grid grid-cols-5 grid-flow-dense w-full gap-3  p-5">
                    <Card cardName={"Mathematics and physics"} New={1} learnt={2} due={3}/>
                    <Card cardName={"Science"} New={1} learnt={2} due={3}/>
                    <Card cardName={"English"} New={1} learnt={2} due={3}/>
                    <Card cardName={"Computer Hardware fundamentals"} New={1} learnt={2} due={3}/>
                    <Card cardName={"Digital design and circuits"} New={1} learnt={2} due={3}/>
                    <Card cardName={"Card 1"} New={1} learnt={2} due={3}/>
                    <Card cardName={"social studies and math and explanation and fantaliss"} New={1} learnt={2}
                          due={3}/>
                    <Card cardName={"social studies"} New={1} learnt={2} due={3}/>

                </div>

            </div>
        </div>
    );
};

export default App;
