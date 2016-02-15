import React from 'react';
import Effort from './Effort'

var divStyle = {
  border: "3px solid blue",
  padding: "10px",
  margin: "4px 0px 4px 0px" // T R B L
};

class SessionExercise extends React.Component {
  render() {
    return (
      <div className="sessionExercise" style={divStyle}>
        <i>SessionExercise  </i>

        <button
                onClick={this.props.deleteExercise}
                value={this.props.value}>DEL
        </button>

        <h4>Exercise Component: {this.props.exerciseName}</h4>
        { <Effort /> }
      </div>
    )
  }
}

export default SessionExercise;
