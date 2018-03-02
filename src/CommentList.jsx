import React from 'react';
import Comment from "./Comment";

class CommentList extends React.Component {

    static propTypes = {
        comments: React.PropTypes.array,
        onDeleteComment: React.PropTypes.func
    }

    static defalutProps = {
        comments: []
    }


    handleDeleteComment (index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
    }
    render() {
        return (
            <div>
                {
                    this.props.comments.map((comment, i) =>
                        <Comment comment={comment}
                                 key={i}
                                 index={i}
                                 onDeleteComment={this.handleDeleteComment.bind(this)}
                        />)
                }

            </div>
        )
    }
}

export default CommentList;