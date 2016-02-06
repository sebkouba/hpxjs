import React from 'react';
import Effort from './Effort'

export default class SessionExercise extends React.Component {
  render() {
    return (
      <div className="sessionExercise">
        <h3>Session Exercise Component {this.props.exerciseName}</h3>
        <Effort />
      </div>
    )
  }
}
