import {useNavigate} from "react-router-dom";

const IconButton = ({Component, title}) => {
    // Hook for navigation
    const Link = useNavigate();

    // Handle button click to navigate to a route based on the title
    function handleClick() {
        return title !== undefined ? Link("/" + title) : "";
    }

    // Rendering the button with the provided Component and title
    return (
        <div>
            <button
                className="rounded-full p-2 active:scale-75 hover:scale-125 duration-200"
                title={title}
                onClick={handleClick}
            >
                {/* Render the provided icon component */}
                <Component />
            </button>
        </div>
    );
};

export default IconButton;
