import {useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getComments, deletePost} from '../redux/services';
import {
    toggleEdit,
    toggleComment,
    allComments,
    singlePost,
    editOpen,
    commentOpen,
    loginValue
} from '../redux/postsSlice';
import Comments from '../components/Comments';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import Updated from '../components/Updated';
import AddComment from '../components/AddComment';

const Post = () => {
    const {id} = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const comments = useSelector(allComments);
    const post = useSelector(singlePost);
    const openEdit = useSelector(editOpen);
    const openComment = useSelector(commentOpen);
    const login = useSelector(loginValue)

    useEffect(() => {
        dispatch(getComments(id))
    }, [dispatch])

    const handleClick = () => {
        navigate("/")
    }
    const deleteClick = async (id) => {
       await dispatch(deletePost(id))
        navigate("/")
    }

    const openEditClick = () => {
        if (login) {
            dispatch(toggleEdit());
        }else {
            window.alert("Please login to update...")
            navigate("/login")
        }
    }
    const openCommentClick = () => {
        dispatch(toggleComment())
    }
    return (
        <div className="post">
            <div className="postLeft">
                <div className="arrowContainer">
                    <span onClick={handleClick} className="arrow">
                        <HiOutlineArrowNarrowLeft className="arrowIcon"/>
                        <span className="arrowText">Posts</span>
                    </span>
                </div>
                <div className="postDetail">
                    <span className="postTitle">{post.title}</span>
                    <span className="postBody">{post.body} ...</span>
                    <div className="postButtons">
                        <button onClick={() => deleteClick(post.id)} className="iconButton bg-red-600"><RiDeleteBin6Line/> Delete</button>
                        <button onClick={openEditClick} className="iconButton bg-green-600"><BsPencilSquare/> Update</button>
                        <button onClick={openCommentClick} className="iconButton bg-blue-600"><BsPencilSquare/> Add Comment</button>
                    </div>
                    {openEdit && <Updated id={post.id}/>}
                    {openComment && <AddComment id={post.id}/>}
                </div>
            </div>
            <div className="postRight">
                {comments && comments.map(comment => (
                    <Comments props={{...comment}} key={comment.id}/>
                ))}
            </div>
        </div>
    );
};

export default Post;
