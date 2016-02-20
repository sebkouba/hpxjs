import React from 'react';
import Entry from './Entry';
import Sidebar from '../Sidebar.js';

var divStyle = {
  border: "3px solid black",
  padding: "15px"
};

class EntryContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      exercises: [
        {exId: Date.now(), name:"From Container Constructor"}
      ]
    }
  }

  deleteExercise = (e) => { // event is the parameter
    e.preventDefault();
    var exerciseIndex = parseInt(e.target.value, 10);
    console.log("ex Index: " + exerciseIndex);
    this.setState( state => {
      state.exercises.splice(exerciseIndex, 1);
      return {exercises: state.exercises};
    });
  };

  /**
   * This is the function that is passed to the Sidebar which sends data back
   * and changes the props of Entry
   * */
  addExercise = (exName,event) => {
    console.log("add Exercise");
    var exercises = this.state.exercises
                    .concat([{exId: Date.now(), name: exName}]);
    this.setState({exercises: exercises});
  };

  render() {
    return (
      <div id="entrycontainer" style={divStyle}>
        <i>EntryContainer</i>
        <Sidebar addExercise={this.addExercise}/>
        <Entry exercises={this.state.exercises}
               deleteExercise={this.deleteExercise}/>
      </div>
    )
  }
}

export default EntryContainer;