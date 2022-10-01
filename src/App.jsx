import React from 'react';

function App(){

    const title = "Blog Post";
    const body = "This is my blog post";
    const comments = [
        {id:1, text: "Comment one"},
        {id:2, text: "Comment two"},
        {id:666, text: "Comment three"}
    ]

    const loading = false
    const showComments = true
    const commentBlock = (
        <div className='comments'>
            <h3>Comments ({comments.length})</h3>
            <ul>
                {comments.map((comment, index) => {
                    return <li key={index}>{comment.text}</li>
                })}
            </ul>
        </div>
    )

    if (loading) return <h1>loading ...</h1>
    return (
        <div className='container'>
            <h1>{title}</h1>
            <p>{body}</p>

    
            {showComments &&  commentBlock}
        </div>
    );
}

export default App;