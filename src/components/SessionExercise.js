import React from 'react';
import Effort from './Effort'

class SessionExercise extends React.Component {
  render() {
    return (
      <div className="sessionExercise">
        <h4>Session Exercise Component {this.props.exerciseName}</h4>
        {/*<Effort /> */}
      </div>
    )
  }
}

export default SessionExercise;
