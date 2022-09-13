import React, { useEffect, useState } from 'react';
import './Posts.css';
import Post from './../Post/Post';

const Posts = () => {

    const [posts , setPosts] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then( res => res.json())
            .then( data => setPosts(data))
    })
    return (
        <div className='all-posts'>
            {
                posts.map( po => <Post key={po.id} post={po}></Post>)
            }
        </div>
    );
};

export default Posts;