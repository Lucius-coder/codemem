import {Home, Plus, Settings} from "lucide-react";
import IconButton from "./components/IconButton.jsx";
import Card from "./components/Card.jsx";

const App = () => {

    return (
        <div className=" inline-flex h-screen w-screen ">
            <div className="flex">
                <div
                    className=" bg-white border-r-2 dark:bg-[rgba(0,0,0,.2)] max-w-sm  p-4 h-screen flex flex-col justify-start items-center gap-3">
                    <div className="flex flex-col gap-[1.2rem] mt-[2rem] items-center">
                        <IconButton Component={Home}/>
                        <IconButton Component={Plus}/>
                        <IconButton Component={Settings}/>
                    </div>
                </div>
            </div>
            <div className="overflow-y-auto w-screen  dark:bg-[#212121] ">
                <div className="md:grid grid-cols-8 grid-flow-row-dense w-full gap-4 p-4 ">
                    <Card cardName={"Card 1 aljfaljdflajfdflajslf"} New={1} learnt={2} due={3} classes={"col-span-5"}/>
                    <Card cardName={"Card 1"} New={1} learnt={2} due={3}/>
                    <Card cardName={"Card 1"} New={1} learnt={2} due={3}/>
                    <Card cardName={"Card 1"} New={1} learnt={2} due={3}/>
                    <Card cardName={"Card 1"} New={1} learnt={2} due={3}/>
                    <Card cardName={"Card 1"} New={1} learnt={2} due={3}/>
                    <Card cardName={"Card 1"} New={1} learnt={2} due={3}/>
                    <Card cardName={"Card 1"} New={1} learnt={2} due={3}/>
                    <Card cardName={"Card 1"} New={1} learnt={2} due={3}/>
                    <Card cardName={"Card 1"} New={1} learnt={2} due={3}/>
                    <Card cardName={"Card 1"} New={1} learnt={2} due={3}/>
                    <Card cardName={"Card 1"} New={1} learnt={2} due={3}/>
                </div>

            </div>
        </div>
    );
};

export default App;
