/**
 * I think I should have the data on the state and turn it into components on render
 * */


import React from 'react';
import SessionExercise from './SessionExercise'

export default class TrainingSession extends React.Component
{
  //getInitialState(){}

  constructor (props){
    super(props);
    this.state = {
      exercises: [
        {id:1, name:"Text Ex"}
      ],
      instances: [<SessionExercise exerciseName="Class Ex"/>]
    }
  }
  addExercise(e){
    console.log("add Ex");
    this.setState(
      {exercises: this.state.exercises.concat({name:"Added Text Ex"})}
    )

  }
  addExerciseClass(){
    console.log("add Class Ex");
    this.setState(
      {instances: this.state.instances.concat(<SessionExercise exerciseName="Added Class Ex"/>)}
    )

  }
  render(){
    let rows = this.state.exercises.map( ex => {
      return <SessionExercise key={ex.id} exerciseName={ex.name} />
    });

    return (
      <div className="panel panel-default">
        <div className="panel-body" id="training-session">
          <h2>
            This is a training Session
          </h2>
          <div className="panel panel-default">
            <div className="panel-body">
              <button onClick={this.addExercise.bind(this)}>Add v Text</button>
              <button onClick={this.addExerciseClass.bind(this)}>Add v Class</button>
              // foreach this.params.exercises -> add exercise
              {/*//<SessionExercise exerciseName="Squat"/>
              //<SessionExercise exerciseName="Deadlift"/>*/}
              <h3>Instances</h3>
              {this.state.instances}
              <h3>Rows</h3>
              {rows}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

