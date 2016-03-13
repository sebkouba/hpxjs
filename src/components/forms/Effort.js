import React from 'react';

var divStyle = {
  border: "2px solid red",
  padding: "2px 2px 2px 6px",
  width: "100px"
};
var boxStyle = {
  width: "50px"
};

class Effort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: this.props.weight,
      reps: this.props.reps
    }
  }

  handleWeightChange = e => {
    // seems like a waste to have this as extra function but can't think of alternative
    //this.setState({weight: e.target.value});
    this.props.updateWeight(e.target.value, this.props.effortIndex, this.props.exIndex);
    this.state.weight = e.target.value; // this is super bad! use setState!
  };

  handleRepChange = e => {
    this.props.updateReps(e.target.value, this.props.effortIndex, this.props.exIndex);
    this.state.reps = e.target.value;
  };

  render(){
    return (
      <div className="effort" style={divStyle}>
        <i>Effort</i> <br />
        <input
          type="text"
          placeholder="weight"
          value={this.state.weight}
          style={boxStyle}
          onChange={this.handleWeightChange}
        /> <br />
        <input
          type="text"
          placeholder="reps"
          value={this.state.reps}
          style={boxStyle}
          onChange={this.handleRepChange}
        />
      </div>
      )
  }
}
export default Effort;
