import React from 'react';
import Comment from "./Comment";

class CommentList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.comments.map((comment, i)=><Comment comment={comment} key={i}/>)
                }

            </div>
        )
    }
}

export default CommentList;