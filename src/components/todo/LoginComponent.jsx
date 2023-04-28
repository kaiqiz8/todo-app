import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./security/AuthContext";

function LoginComponent() {
    const [username, setUsername] =  useState('Kaiqi');
    const [password, setPassword] = useState('');
    // const [showSuccessMessage, setShowSuccessMesage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const navigate = useNavigate();
    const authContext = useAuth();

    function handleUsernameChange(event) {
        // console.log(event.target.value);
        setUsername(event.target.value);
    }
    function handlePasswordChange(event) {
        // console.log(event.target.value);
        setPassword(event.target.value);
    }
    function handleSubmit() {
        if (authContext.login(username, password)){
            navigate(`/welcome/${username}`);       
        } else {
            setShowErrorMessage(true);
        }
    }

    return (
        <div className="Login"> 
            <h1>Time to login! </h1>
            {/* {showSuccessMessage && <div className="successMessage">Authenticated successfully</div>} */}
            {showErrorMessage && <div className="errorMessage">Authenticated failed. 
                                                            Please check your credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value= {username} onChange = {handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value= {password} onChange = {handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick = {handleSubmit}>Login </button>   
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;