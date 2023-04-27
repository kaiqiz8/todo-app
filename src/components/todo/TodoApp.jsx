import { useState } from 'react';
import './TodoApp.css';
import {BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom';

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <HeaderComponent />

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />} />
                    <Route path='/login' element={<LoginComponent />}/>
                    <Route path='/welcome/:username' element={<WelcomeComponent />} />
                    <Route path='/todos' element={<ListTodoComponent />} />
                    <Route path='/logout' element={<LogoutComponent />} />
                    <Route path='*' element={<ErrorComponent />} />
                </Routes>
            </BrowserRouter>

            <FooterComponent/>
        </div>
    )
}

function LoginComponent() {
    const [username, setUsername] =  useState('Kaiqi');
    const [password, setPassword] = useState('');
    const [showSuccessMessage, setShowSuccessMesage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
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


function WelcomeComponent({}) {
    const {username} = useParams();
    console.log(username);

    return (
        <div className='WelcomeComponent'>
            <h1>Welcome {username} </h1>
            <div>
                Manage your todos. <Link to='/todos' >Go here</Link>
            </div>
            
        </div>
        
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>Apologies for the 404. Reach out to our team at zhang.kaiq@northeastern.edu</div>

        </div>
    )
}


function ListTodoComponent() {
    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDate());
    const todos = [
        {id: 1, description: 'Learn aws', done: false, targetDate: targetDate}, 
        {id: 2, description: 'Learn full stack dev', done: false, targetDate: targetDate}, 
        {id: 3, description: 'Learn DevOps', done: false, targetDate: targetDate}];

    return (
        <div className="container">
            <h1>Things you want to do: </h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Is done?</td>
                            <td>Target Date</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(todo => (<tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
                            <td>{todo.done.toString()}</td>
                            <td>{todo.targetDate.toDateString()}</td>
                        </tr>))}
                        
                    </tbody>
                </table>
            </div>

        </div>
    )
}

function HeaderComponent() {
    return (
        <div className="header">
            Header <hr/>
        </div>
    )
}

function FooterComponent() {
    return (
        <div className="footer">
            <hr/> Header 
        </div>
    )
}

function LogoutComponent() {
    return (
        <div className="LogoutComponent">
            <h1>You are logged out!</h1>
            <div>Thank you for using our APP. Come back soon!</div>

        </div>
    )
}
