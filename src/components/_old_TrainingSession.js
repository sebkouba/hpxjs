import React from 'react';
import SessionExercise from './forms/SessionExercise'

class TrainingSession extends React.Component
{
  constructor (props){
    super(props);
    this.state = {
      instances: [<SessionExercise exerciseName="Class Exx"/>]
    }
  }

  addExerciseClass(){
    console.log("add Class Ex");
    // should this not be data rather than state? No - it changes
    this.setState(
      {instances: this.state.instances.concat(<SessionExercise exerciseName="Added Class Ex"/>)}
    )
  }

  render(){
    let rows = this.state.instances.map( (ex, i) => {
      return <SessionExercise key={i} exerciseName={ex.exerciseName} />
    });

    return (
      <div className="panel panel-default">
        <div className="panel-body" id="training-session">
          <h2>
            This is a training Session
          </h2>
          <div className="panel panel-default">
            <div className="panel-body">
              <button onClick={this.addExerciseClass.bind(this)}>Add v Class</button>
              // foreach this.params.exercises -> add exercise
              {/*//<SessionExercise exerciseName="Squat"/>
              //<SessionExercise exerciseName="Deadlift"/>*/}
              <h3>Instances</h3>
              { rows }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrainingSession;
