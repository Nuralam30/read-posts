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

    const post = allPosts.find( po => po.id === postId);
    console.log(post)
    return (
        <div>
            {/* <Post post={post}></Post>  */}
        </div>
    );
};

export default PostDetails;