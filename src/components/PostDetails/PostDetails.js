import React from 'react';
import { useState, useEffect} from 'react';
import './PostDetails.css';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetails = () => {

    const { postId } = useParams();
    const [allPosts , setAllPosts] = useState([]);
    const [allComments, setAllComments] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then( res => res.json())
            .then( data => setAllPosts(data))
    }, []);


    // find the exact post
    let post = {}
    if(allPosts.length > 0){
        const post10 = allPosts.slice(0 , 10)
        post = post10.find(po => po.id === parseInt(postId))
    }

    // FIND COMMENTS FOR THE POST
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then( res => res.json())
            .then( data => setAllComments(data))
    }, []);

    const postComments = allComments.filter(comments => comments.postId === post.id)
    console.log(postComments)


    // console.log(post)
    return (
        <div className = 'post_and_comments'>
            <h2 className='post-title'>{post.title}</h2>
            <p className='post-body'>{post.body}</p>
            <p className='comments'>Comments</p>
            <div className="comment">
                {
                    postComments.map(com => <Comment comment = {com}> </Comment>)
                }
            </div>
        </div>
    );
};


export default PostDetails;