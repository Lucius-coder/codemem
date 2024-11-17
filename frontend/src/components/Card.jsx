import {useRef} from "react"; // Importing useRef from React library
import PropTypes from 'prop-types'; // Importing prop-types library for prop validation
import IconButton from "./IconButton.jsx"; // Importing IconButton component
import {EllipsisVerticalIcon} from "lucide-react";
import {useNavigate} from "react-router-dom"; // Importing EllipsisVerticalIcon from lucide-react package

const Card = ({cardName, due, learnt, New}) => {
    // Declaring a variable for CSS classes
    let classes = "";
const Link=useNavigate()
    // Creating a ref for the card element
    const card = useRef();

    // Checking the length of the cardName to determine the classes
    let length = cardName.length;
    if (length >= 20 && length <= 30) {
        classes = `col-span-2 max-h-sm row-span-2 h-full`;
        console.log(card.current); // Logging the ref (currently unused, should be removed if unnecessary)
    } else if(length>=30 && length<=40) {
        classes = " col-span-3 row-span-3";
    }else if(length>=40) {
        classes = " col-span-4 row-span-4";
    }else{
        classes = " col-span-1 row-span-1";
    }
const handleRoute=(cardName)=>{
return Link("/study/"+cardName)
}
    // Returning the JSX for the Card component
    return (
        <div className={ `${classes} w-full justify-center  dark:bg-[rgba(0,0,0,0.2)] m-4 bg-white rounded-md active:scale-90 active:rounded-2xl transition duration-200 h-full`} ref={card} onClick={()=>handleRoute(cardName)}>
            <div
                className={`flex flex-col justify-center h-full `}>
                {/* Displaying the card name */}
                <div className="font-bold text-2xl m-2 p-4 mx-auto">{cardName}</div>
                <div className="flex justify-between px-3 py-5 ">
                    <div className="flex flex-col items-center">
                        {/* Displaying the number of new items */}
                        <span>New</span> <span className="text-blue-500">{New}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        {/* Displaying the number of learnt items */}
                        <span>Learn</span> <span className="text-green-500">{learnt}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        {/* Displaying the number of due items */}
                        <span>Due</span> <span className="text-red-500">{due}</span>
                    </div>
                    <div>
                        {/* Displaying an IconButton with EllipsisVerticalIcon */}
                        <IconButton Component={EllipsisVerticalIcon}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    cardName: PropTypes.string.isRequired,
    due: PropTypes.number.isRequired,
    learnt: PropTypes.number.isRequired,
    New: PropTypes.number.isRequired,
};

export default Card; // Exporting the Card component as default
