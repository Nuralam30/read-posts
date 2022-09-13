import React from 'react';
import './Post.css';

const Post = (props) => {

    const {title, body} = props.post;
    return (
        <div className='post' gridColumn="span 4">
            <h3>{title}</h3>
            <p>{body}</p>
            <button> see more</button>
        </div>
    );
};

export default Post;