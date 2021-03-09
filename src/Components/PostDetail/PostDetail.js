import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const { id } = useParams();

    const [post,setPost] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])

    const [comments,setComments] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId:${id}`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])

    const postStyle ={
        border: '1px solid gray',
        margin: '10px',
        padding: '10px',
        width: '600px'
    }
    //console.log(post);
    return (
        <div style={postStyle}>
            <h1>Posts Details Here {id}</h1>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <br></br>
            <h5>Comments</h5>
            <hr/>
            {
                comments.map(comment=> <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;