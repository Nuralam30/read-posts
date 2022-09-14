import { Button } from '@mui/material';
import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

const Post = (props) => {

    const {title, body, id} = props.post;
    return (
        <div className='post'>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link to={"/post-details/"+id}>
                <Button variant="contained" color="info" size="small"> see more </Button>
            </Link>
        </div>
    );
};

export default Post;