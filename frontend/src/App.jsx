import {SearchIcon} from "lucide-react"; // Importing the SearchIcon component from the lucide-react library
import IconButton from "./components/IconButton.jsx"; // Importing the IconButton component from a local file
import Card from "./components/Card.jsx"; // Importing the Card component from a local file
import Navbar from "./components/Navbar.jsx";

// The main App component
const App = () => {

    // Rendering the main layout
    return (
        <div className="inline-flex h-screen w-full">
            {/* Navbar component will be displayed here */}
            <Navbar/>
            <div className="overflow-y-auto mx-auto dark:bg-[#212121] p-3 justify-center w-screen">
                <div className="flex justify-center p-2 w-md items-center">
                    {/* Input field for searching subjects */}
                    <input
                        type="text"
                        placeholder="search subjects"
                        className="lg:w-1/2 w-3/4 pl-5 py-2 rounded-3xl border-none m-3.5"
                    />
                    {/* IconButton component containing the SearchIcon */}
                    <IconButton Component={SearchIcon} />
                </div>

                <div className="md:grid grid-cols-4 grid-flow-dense w-full gap-2 p-5">
                    {/* Multiple Card components with different subjects */}
                    <Card cardName={"Mathematics and  biology"} New={1} learnt={2} due={3}/>
                    <Card cardName={"Mathematics and physics"} New={1} learnt={2} due={3}/>
                    <Card cardName={"Mathematics and physics"} New={1} learnt={2} due={3}/>
                    <Card cardName={"Science"} New={1} learnt={2} due={3}/>
                    <Card cardName={"Mathematics and physics"} New={1} learnt={2} due={3}/>
                    <Card cardName={"English"} New={1} learnt={2} due={3}/>
                    <Card cardName={"English"} New={1} learnt={2} due={3}/>
                    <Card cardName={"English"} New={1} learnt={2} due={3}/>

                </div>
            </div>
        </div>
    );
};

export default App; // Exporting the App component as the default export

