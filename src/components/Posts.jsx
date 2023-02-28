import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getPost} from '../redux/postsSlice';

const Posts = ({props}) => {
    const dispatch = useDispatch();
    return (
        <Link onClick={() => dispatch(getPost(props.id)) } className="posts" to={`/post/${props.id}`}>
                <div className="postsContainer">
                    <span className="postsTitle">{props.title}</span>
                    <span className="postsBody">{props.body} ...</span>
                </div>
        </Link>
    );
};

export default Posts;
