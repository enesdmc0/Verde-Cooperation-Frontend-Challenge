import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {toggleComment} from '../redux/postsSlice';
import {addComments} from '../redux/services';
import {nanoid} from 'nanoid';
//ICONS
import {BsPencilSquare} from 'react-icons/bs';
import {GiCancel} from 'react-icons/gi';
const AddComment = ({id}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");
    const dispatch = useDispatch();

    const commentSubmit = (e) => {
        e.preventDefault();
        dispatch(addComments({
            name,
            email,
            body,
            id: nanoid(),
            postId: id
        }));
        setBody("");
        setEmail("");
        setName("");
        dispatch(toggleComment());
    };
    const cancelClick = () => {
        dispatch(toggleComment())
    }
    return (
        <div className="addComment">
            <h1 className="addCommentText">Add Comment</h1>
            <form onSubmit={commentSubmit} className="addCommentForm">
                <input value={name} onChange={(e) => setName(e.target.value)} className="globalInput w-3/4" type="text" placeholder="title ..."/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="globalInput w-3/4" type="text" placeholder="@gmail.com"/>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} cols={40} className="addCommentTextarea" rows={6}  placeholder="body ..."/>
                <div className="flex gap-5">
                    <button className="iconButton bg-green-600"><BsPencilSquare/>Add</button>
                    <button onClick={cancelClick} className="iconButton bg-red-600"><GiCancel/>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddComment;
