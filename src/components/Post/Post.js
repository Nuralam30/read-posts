import { Button } from '@mui/material';
import React from 'react';
import './Post.css';
import { useNavigate } from 'react-router-dom';

const Post = (props) => {

    const {title, body, id} = props.post;

    let navigate = useNavigate(); 

    const routeChange = () =>{ 
        let path = `/post-details/`+id; 
        navigate(path);
    }
    return (
        <div className='post'>
            <h3>{title}</h3>
            <p>{body}</p>
            <Button variant="contained" color="info" size="small" 
                onClick={ () =>{routeChange()}}>
            see more </Button>
        </div>
    );
};

export default Post;