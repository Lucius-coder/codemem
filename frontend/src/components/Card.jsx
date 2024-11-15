import { useRef} from "react";

import IconButton from "./IconButton.jsx";
import {Edit, EllipsisIcon, EllipsisVerticalIcon, MenuIcon, MinusIcon} from "lucide-react";
import {shelljs} from "globals";
const Card = ({cardName,due,learnt,New}) => {
    let classes=""
const card=useRef()
    if (cardName.toString().length>=20){
classes=`col-span-2 max-h-sm `
        console.log(card.current)
    }else{
        classes=" col-span-1"
    }
    return (
        <div className={classes} ref={card}>
            <div
                className={`w-full  justify-center  dark:bg-[rgba(0,0,0,0.2)] m-4 bg-white rounded-md  active:scale-90 active:rounded-2xl transition duration-200  `}>
                <div className=" font-bold text-2xl m-2 p-4 max-h-screen mx-auto" >{cardName}</div>
                <div className="flex  justify-between px-3 py-5">
                    <div className="flex flex-col items-center">
                        <span>New</span> <span className="text-blue-500">{New}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>Learn</span> <span className="text-green-500">{learnt}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>Due</span> <span className="text-red-500">{due}</span>
                    </div>
                    <div>
                        <IconButton Component={EllipsisVerticalIcon}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;