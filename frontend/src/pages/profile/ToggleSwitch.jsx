import React, {useState} from 'react';

const ToggleSwitch = ({ label }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex items-center">
      <span className="mr-2">{label}</span>
      <div
        className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${isToggled ? 'bg-blue-600' : ''
          }`}
        onClick={handleToggle}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${isToggled ? 'translate-x-6' : ''}`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;