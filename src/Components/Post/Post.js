import React from 'react';
import { Link, useHistory } from "react-router-dom";
const Post = (props) => {
    const { id, title, body } = props.post;
    const post ={
        border: '1px solid gray',
        margin: '10px',
        padding: '10px',
        width: '600px'
    }
    const history = useHistory();
    const handleShowMore = (id) => {
        history.push(`/posts/${id}`);
    }
    return (
        <div style={post}>
            <h3> {id} --- {title}</h3>
            <p>{body}</p>
            <button onClick={()=> handleShowMore(id)}>Show More</button>
        </div>
    );
};

export default Post;