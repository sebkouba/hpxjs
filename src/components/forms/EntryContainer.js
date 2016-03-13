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
        {
          exId: Date.now(), name:"From Container Constructor",
          efforts: [
            {weight: "Con", reps: "tainer", id: Date.now() }
          ]
        }
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
                    .concat([{exId: Date.now(), name: exName,
                      efforts: [{
                        weight: "", reps: "", id: Date.now()
                      }]
                    }]);
    this.setState({exercises: exercises});
  };

  updateWeight = (value, effortIndex, exIndex) => {
    console.log("update weight");
    var stateCopy = {...this.state};
    stateCopy.exercises[exIndex].efforts[effortIndex].weight = value;
    this.setState(stateCopy);

    //var myState = {...this.state.exercises[exIndex].efforts[effortIndex], weight: value };
    //console.log(myState);
  };

  // how do I know that these params come in? Is that just given?
  // -> they are passed via the handle RepChange in Effort.js
  updateReps = (value, effortIndex, exIndex) => {
    console.log("update reps");
    var stateCopy = {...this.state};
    stateCopy.exercises[exIndex].efforts[effortIndex].reps = value;
    this.setState(stateCopy);
  };

  copyEffort = (e,b,c) => {
    e.preventDefault();
    console.log(e);
    console.log(b);
    console.log(c);

    /**
     * This is where I have to add the equivalent of the handleWeightChange in Effort.js
     * to make sure the parameters arrive here so I know which part of the
     * state to change
     * All I've done is prove that HPx is fucking complicated!!!
     *  */
    //var newState = {...this.state};
    //newState.exercises[exIndex].id = Date.now();
    //var newState = this.state.efforts.concat([newState]);
    //this.setState({efforts: newState});
  };

  render() {
    return (
      <div id="entrycontainer" style={divStyle}>
        <i>EntryContainer</i>
        <Sidebar addExercise={this.addExercise}/>
        <Entry exercises={this.state.exercises}
               deleteExercise={this.deleteExercise}
               updateWeight={this.updateWeight}
               updateReps={this.updateReps}
               copyEffort={this.copyEffort}
        />
      </div>
    )
  }
}

export default EntryContainer;