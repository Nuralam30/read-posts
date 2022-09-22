import React from 'react';
import { useState, useEffect} from 'react';
import './PostDetails.css';
import { useParams } from 'react-router-dom';
// import Post from '../Post/Post';

const PostDetails = () => {

    const { postId } = useParams();
    const [allPosts , setAllPosts] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then( res => res.json())
            .then( data => setAllPosts(data))
    }, []);

    const post = allPosts.find(po => po.id === parseInt(postId))
    console.log(typeof(post))
    // const {title, body} = post;
    return (
        <div>
            {/* <h3>{title}</h3>
            <p>{body}</p> */}
        </div>
    );
};


export default PostDetails;