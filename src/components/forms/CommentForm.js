import React from 'react';

/**
 * renders Form with two inputs
 * handles input changes by changing state
 * */
class CommentForm extends React.Component{
  //getInitialState() {
  //  return {author: '', text: ''};
  //}
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      text: ""
    }
  }
  // arrow function binds to the this where invoked (?)
  handleAuthorChange = (e) => {
    this.setState({author: e.target.value});
  };
  handleTextChange = (e) => {
    this.setState({text: e.target.value});
  };
  handleSubmit = (e) => {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    /** onCommentSubmit function is passed down from CommentBox */
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  };
  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export default CommentForm;
