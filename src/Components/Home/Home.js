import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);

    const loadData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }
    
    useEffect(loadData ,[]);

    return (
        <div>
            <h1>Home......</h1>
            <h3>I Have Got {posts.length} Posts </h3>
            {
                posts.map( post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;