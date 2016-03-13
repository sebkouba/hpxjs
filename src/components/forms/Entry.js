import React from 'react';
import $ from 'jquery';
import SessionExercise from './SessionExercise';

var divStyle = {
  border: "3px solid green",
  padding: "10px"
};

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      comment: ""
      //exercises: [
      //  {id: Date.now(), name: "Deprecated" }
      //]
    }
  }

  handleTitleChange = e => {
    this.setState({title: e.target.value});
  };
  handleCommentChange = e => {
    this.setState({comment: e.target.value});
  };
  handleSubmit = e => {
    e.preventDefault();
    var title = this.state.title.trim();
    var comment = this.state.comment.trim();
    if (!title || !comment) {
      console.log("fields not filled");
      return;
    }
    this.onEntrySubmit({title: title, comment: comment});
    this.setState({title: '', comment: ''});
  };

  onEntrySubmit = (entry) => {
    var entries = this.state.data || "";
    // Optimistically set an id on the new comment. It will be replaced by an
    // id generated by the server. In a production application you would likely
    // not use Date.now() for this and would have a more robust system in place.
    entry.id = Date.now();
    var newEntries = entries.concat([entry]);
    this.setState({data: newEntries});
    $.ajax({
      url: '/data2/entries', //this.props.url,
      dataType: 'json',
      type: 'POST',
      data: entry,
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, err) {
        this.setState({data: entries});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  };


  render() {
    var exercises = this.props.exercises.map( (ex, exIndex) => {
      console.log("id: " + ex.exId);
      return <SessionExercise key={ex.exId} exerciseName={ex.name}
                              deleteExercise={this.props.deleteExercise}
                              valuex={exIndex}
                              exIndex={exIndex}
                              efforts={ex.efforts}
                              updateWeight={this.props.updateWeight}
                              updateReps={this.props.updateReps}
                              copyEffort={this.props.copyEffort}
      />
    });
    return (
      <div id="entryform" style={divStyle}>
        <i>Entry</i>
        <h2>New Entry</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <input
            type="text"
            placeholder="Comment"
            value={this.state.comment}
            onChange={this.handleCommentChange}
          />

          {exercises}

          <input type="submit" value="Post"/>
        </form>
      </div>
    );
  }
}

export default Entry;