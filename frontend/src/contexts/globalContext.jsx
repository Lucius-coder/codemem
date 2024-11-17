import {createContext, useState} from "react";
import PropTypes from 'prop-types';

export const GlobalContext = createContext();
const GlobalProvider = ({children}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("");
    return <GlobalContext.Provider
        value={{
            username, setUsername, password,
            setPassword, email, setEmail,confirmPassword, setConfirmPassword
        ,error,setError}}>
        {children}</GlobalContext.Provider>;
}
GlobalProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalProvider;