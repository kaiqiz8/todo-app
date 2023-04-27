import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
    const [username, setUsername] =  module.useState('Kaiqi');
    const [password, setPassword] = module.useState('');
    const [showSuccessMessage, setShowSuccessMesage] = module.useState(false);
    const [showErrorMessage, setShowErrorMessage] = module.useState(false);
    const navigate = useNavigate();

    function handleUsernameChange(event) {
        // console.log(event.target.value);
        setUsername(event.target.value);
    }
    function handlePasswordChange(event) {
        // console.log(event.target.value);
        setPassword(event.target.value);
    }
    function handleSubmit() {
        if (username==='Kaiqi' && password === 'dummy'){
            console.log("success");
            setShowSuccessMesage(true);
            setShowErrorMessage(false);
            navigate(`/welcome/${username}`);
        } else {
            console.log("authentication failed");
            setShowErrorMessage(true);
            setShowSuccessMesage(false);
        }
    }

    return (
        <div className="Login"> 
            <h1>Time to login! </h1>
            {showSuccessMessage && <div className="successMessage">Authenticated successfully</div>}
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