import React from 'react';
import Comment from './Comment';
/**
 * maps props.data from CommentList into individual Comment components
 * and renders them
 * */
class CommentList extends React.Component {
  render() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}

export default CommentList;
