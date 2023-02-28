import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {updatePost} from '../redux/services';
//ICONS
import { GiCancel } from "react-icons/gi";
import { BsPencilSquare } from "react-icons/bs";
const Updated = ({id}) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const updatedSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePost({title, body, id}));
        navigate("/")
    }
    return (
        <div className="updated">
            <h1 className="updatedText">Edit Post</h1>
            <form onSubmit={updatedSubmit} className="updatedForm">
                <input value={title} onChange={(e) => setTitle(e.target.value)} className="globalInput" type="text" placeholder="title ..."/>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} cols={40} className="updatedTextarea" rows={10} placeholder="body ..."/>
                <div className="updatedButtons">
                    <button className="iconButton bg-green-600"><BsPencilSquare/>Edit</button>
                    <button className="iconButton bg-red-600"><GiCancel/>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default Updated;
