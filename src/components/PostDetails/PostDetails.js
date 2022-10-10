import React from 'react';
import { useState, useEffect} from 'react';
import './PostDetails.css';
import { json, useParams } from 'react-router-dom';

const PostDetails = () => {

    const { postId } = useParams();
    const [allPosts , setAllPosts] = useState([]);

    const request = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        // const data = () => json.setAllPosts(data)
        console.log(json);
    }
    
    request();

    // useEffect( () => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then( res => res.json())
    //         .then( data => setAllPosts(data))
    // }, []);

    // if(allPosts !== []){
    //     const post = allPosts.find(po => po.id === parseInt(postId))
    //     console.log(post)
    // }

    // console.log(allPosts)

    return (
        <div>
            {/* <h3>{post.title}</h3>
            <p>{post.body}</p> */}
        </div>
    );
};


export default PostDetails;