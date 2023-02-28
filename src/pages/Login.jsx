import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getUser} from '../redux/services';
import {useNavigate} from 'react-router-dom';
import {loginControl, loginValue} from '../redux/postsSlice';


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = useSelector(loginValue);

    useEffect(() => {
        dispatch(getUser())
    }, [])

    const handleSubmit =  (e) => {
        e.preventDefault();
       dispatch(loginControl({username, password}))
        if (login) {
            navigate("/")
        }
    }
    return (
        <div className="login">
            <form onSubmit={handleSubmit} className="loginForm">
                <h1 className="font-bold text-xl">Login</h1>
                <input value={username} onChange={(e) => setUsername(e.target.value)} className="globalInput w-3/4" type="text" placeholder="username"/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="globalInput w-3/4" type="password" placeholder="password"/>
                <div className="flex gap-5">
                    <button className="iconButton bg-green-600">Login</button>
                    <button className="iconButton bg-red-600">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
