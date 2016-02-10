import React from 'react';
import CommentBox from './CommentBox';

class FormPOC extends React.Component {

  render() {
    return (
      <div>
        <h4>My Form </h4>
        <CommentBox url="/data/entries" pollInterval={9000} />
      </div>
    )
  }
}

export default FormPOC