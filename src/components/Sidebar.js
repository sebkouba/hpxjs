import React from 'react';

var divStyle = {
  border: "3px solid pink",
  padding: "10px",
  margin: "4px 0px 4px 0px" // T R B L
};

class Sidebar extends React.Component {
  render() {
    var exName = "TestExName" + Date.now();
    return (
      <div id="sidebar" style={divStyle}>
        <i>Sidebar</i>
        <button onClick={this.props.addExercise.bind(null, exName)}>Add</button>
        <button onClick={this.props.addExercise.bind(null, "Squat")}>Squat</button>
        <button onClick={this.props.addExercise.bind(null, "Deadlift")}>Deadlift</button>
        <button onClick={this.props.addExercise.bind(null, "Benchpress")}>Benchpress</button>
      </div>
    )
  }
}

export default Sidebar;