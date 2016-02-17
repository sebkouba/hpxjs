import React from 'react';
import Effort from './Effort'

// Effort Data is kept here!

var divStyle = {
  border: "3px solid blue",
  padding: "10px",
  margin: "4px 0px 4px 0px" // T R B L
};

class SessionExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      efforts: [
        {weight: "", reps: "" }
      ]
    }
  }

  addEffort = (e) => {
    e.preventDefault();
    var newEfforts = this.state.efforts.concat([{weight: "", reps: ""}]);
    this.setState({efforts: newEfforts});
  };

  copyEffort = (e) => {
    e.preventDefault();
    /** determine the state.weight of last effort in state
     * or simply copy laste elemnt in array!
     * which copies the props, not the state!
     * */
    var lastElement = this.state.efforts[this.state.efforts.length - 1];
    var newEfforts = this.state.efforts.concat(lastElement);
    this.setState({efforts: newEfforts});
  };

  removeEffort = (e) => {
    e.preventDefault();
    console.log(this.state.efforts.length);
    this.setState( () => {
      this.state.efforts.splice(-1,1);
    });
  };

  updateWeight = (newWeight, effortIndex) => {
    var newEfforts = this.state.efforts;
    newEfforts[effortIndex].weight = newWeight;
    this.setState({efforts: newEfforts});
    console.log("effort index: " + effortIndex + "==>");
    console.log(this.state.efforts[effortIndex]);
  };

  updateReps = (newReps, effortIndex) => {
    var newEfforts = this.state.efforts;
    newEfforts[effortIndex].reps = newReps;
    this.setState({efforts: newEfforts});
    console.log("effort index: " + effortIndex + "==>");
    console.log(this.state.efforts[effortIndex]);
  };

  render() {
    var efforts = this.state.efforts.map( (effort, effIndex) => {
      return <Effort key={effIndex} effortIndex={effIndex}
                     updateWeight={this.updateWeight}
                     updateReps={this.updateReps}
                     weight={effort.weight} reps={effort.reps}/>
    });
    return (
      <div className="sessionExercise" style={divStyle}>
        <i>SessionExercise  </i>

        <button
                onClick={this.props.deleteExercise}
                value={this.props.valuex}>DEL SE
        </button>

        <button onClick={this.addEffort} > Add Set </button>
        <button onClick={this.removeEffort} > Rem Set </button>
        <button onClick={this.copyEffort} > Copy Set </button>

        <h4>Exercise Component: {this.props.exerciseName}</h4>
        { efforts }
      </div>
    )
  }
}

export default SessionExercise;
