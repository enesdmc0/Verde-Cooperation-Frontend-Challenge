import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {nanoid} from 'nanoid';
import {useNavigate} from 'react-router-dom';
import {addPost} from '../redux/services';
//Icons
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import {BsPencilSquare} from 'react-icons/bs';
import {GiCancel} from 'react-icons/gi';

const NewPost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost({
            id : nanoid(),
            title,
            body,
            userId: 1
        }));
        navigate("/")
    }
    const handleClick = () => {
        navigate("/")
    }
    return (
        <div className="newPost">
            <span onClick={handleClick} className="arrow">
                  <HiOutlineArrowNarrowLeft className="arrowIcon"/>
                  <span className="arrowText">Posts</span>
            </span>
            <h1 className="newPostText">New Post</h1>
            <form onSubmit={handleSubmit} className="newPostForm">
                <input value={title} onChange={(e) => setTitle(e.target.value)} className="globalInput" type="text" placeholder="title ..."/>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} cols={40} className="newPostTextarea" rows={10} placeholder="body ..."/>
                <div className="newPostButtons">
                    <button className="iconButton bg-green-600"><BsPencilSquare/>Create</button>
                    <button className="iconButton bg-red-600"><GiCancel/>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default NewPost;
