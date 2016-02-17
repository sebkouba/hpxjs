import React from 'react';

var divStyle = {
  border: "2px solid red",
  padding: "2px 2px 2px 6px",
  width: "70px"
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
    this.setState({weight: e.target.value});
  };

  handleRepChange = e => {
    this.setState({reps: e.target.value})
  };

  render(){
    return (
      <div className="effort" style={divStyle}>
        <i>Effort</i>
        <input
          type="text"
          placeholder="weight"
          style={boxStyle}
          value={this.state.weight}
          onChange={this.handleWeightChange}
        />
        <input
          type="text"
          placeholder="reps"
          style={boxStyle}
          value={this.state.reps}
          onChange={this.handleRepChange}
        />
      </div>
      )
  }
}
export default Effort;
