import {useNavigate} from "react-router-dom";

const IconButton = ({Component,title}) => {

    const Link=useNavigate()
    return (


        <div>
            <button className=" rounded-full p-2  active:scale-75   hover:scale-125 duration-200" title={title} onClick={Link(title)}><Component/></button>

        </div>
    );
};

export default IconButton;