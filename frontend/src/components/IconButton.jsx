


const IconButton = ({Component}) => {
    return (
        <div>
            <button className=" rounded-full p-2  active:scale-75   hover:scale-125 duration-200"><Component/></button>

        </div>
    );
};

export default IconButton;