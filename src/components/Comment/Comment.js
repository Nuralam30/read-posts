import React from 'react';
import './Comment.css';

const Comment = (props) => {
    const {name, body} = props.comment;

    return (
        <div className='comment'>
            <h3>{name}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Comment;