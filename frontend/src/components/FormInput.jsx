
import PropTypes from 'prop-types';

const FormInput = ({id,placeholder,type,state}) => {
    const handleChange = (e) => {
        const value = e.target.value;
        state(value);
        console.log(value);
    }
    return (
        <div className="flex flex-col ">
            <label htmlFor={id} className="mb-2">{id}</label>
            <input  className="px-2 py-3 rounded-lg mb-2 border outline-blue-400" type={type} id={id} name={id} placeholder={placeholder} required={true} onChange={handleChange} />
        </div>)
};

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    state: PropTypes.func.isRequired
};

export default FormInput;