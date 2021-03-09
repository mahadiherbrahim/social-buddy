import React from 'react';

const Comment = (props) => {
    const {name,email,body} = props.comment
    const commentStyle ={
        border: '1px solid gray',
        margin: '10px',
        padding: '10px',
        width: '400px'
    }
    return (
        <div style={commentStyle}>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comment;