import {useState} from 'react';
import PropTypes from 'prop-types';

const ToggleSwitch = ({ label }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex items-center">
      <span className="mr-2">{label}</span>
      <div
        className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${isToggled ? 'bg-blue-500' : ''
          }`}
        onClick={handleToggle}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${isToggled ? 'translate-x-6 bg-blue-500' : ''}`}
        ></div>
      </div>
    </div>
  );
};

ToggleSwitch.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ToggleSwitch;