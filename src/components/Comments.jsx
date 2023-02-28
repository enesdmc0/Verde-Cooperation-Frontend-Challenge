import React from 'react';

const Comments = ({props}) => {
    return (
            <div className="comments">
                <div className="commentsContainer">
                    <span className="commentsName">{props.name}</span>
                    <span className="commentsEmail">{props.email}</span>
                </div>
                <span className="commentsBody">{props.body}</span>
            </div>
    );
};

export default Comments;
