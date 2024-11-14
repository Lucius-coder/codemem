
const FormInput = ({id,placeholder,type}) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="mb-2">{id}</label>
            <input  className="px-2 py-3 rounded-lg mb-2 border" type={type} id={id} name={id} placeholder={placeholder} required={true}/>
        </div>)
};

export default FormInput;