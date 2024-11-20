import toast from "react-hot-toast";
export const SubmitSignupCredentials = async (username, email, password, confirmPassword,navigate) => {

    try {
        const url = 'http://localhost:5000/api/auth/signup';
        const options = {
            method: 'POST',
            headers: {'content-type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams({username, password, email, confirmPassword})
        };
        const response = await fetch(url, options);

        const data = await response.json();
        if (!response.ok) {
            console.log(data);
            toast.error(data.message);

        } else {
            toast.success(data.message.toString());
            navigate('/dashboard');
        }
    } catch (error) {
        console.log(error);
    }
}
export const SubmitLoginCredentials = async (username, email, password,navigate) => {

    try {
    const url = 'http://localhost:5000/api/auth/login';
    const options = {
        method: 'POST',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({username, password, email})
    };
        const response = await fetch(url, options);

            const data = await response.json();
        if (!response.ok) {
            console.log(data);
            toast.error(data.message);

        }else {
            toast.success(data.message.toString());
            navigate('/dashboard');
        }
    } catch (error) {
        console.log(error);
    }
}


