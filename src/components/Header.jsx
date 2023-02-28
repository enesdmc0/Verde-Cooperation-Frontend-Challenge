import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {allPosts, loginToggle, loginValue} from '../redux/postsSlice';
//ICONS
import { FaBell } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { BsFillPlayCircleFill } from "react-icons/bs";
import {IoMdAdd} from 'react-icons/io';
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const postsLength = useSelector(allPosts).length;
    const login = useSelector(loginValue)

    const newProjectClick = () => {
        navigate("/newPost")
    }
    const handleClick = () => {
        if (!login){
            navigate("/login")
        }
        dispatch(loginToggle())
    }
    return (
        <div className="header">
            <div className="headerLeft">
                <BsFillPlayCircleFill className="headerLogo"/>
                <span className="headerText">Arbit Blog</span>
            </div>
            <button onClick={newProjectClick} className="iconButton bg-blue-600"><IoMdAdd className="w-6 h-6"/> New Post</button>
            <button onClick={handleClick} style={{backgroundColor: `${login ? "red" : "green"}` }} className="iconButton">{login ? "Logout" : "Login"}</button>
            <div className="headerRight">
                <div className="headerCounter">
                    <span className="counterText">Posts</span>
                    <span className="counterLength">{postsLength}</span>
                </div>
                <FaBell className="headerRightIcon"/>
                <AiFillAppstore className="headerRightIcon"/>
                <img className="headerImg" src="https://pbs.twimg.com/profile_images/1522265345779716096/x8ZnmfL-_400x400.jpg" alt=""/>
            </div>
        </div>
    );
};

export default Header;
