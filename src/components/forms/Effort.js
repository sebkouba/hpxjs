import React from 'react';

var divStyle = {
  border: "2px solid red",
  padding: "2px 0px 2px 6px",
  width: "60px"
};
export default class Effort extends React.Component {
  render(){
    return (
      <div className="effort" style={divStyle}>
        <i>Effort</i>

      </div>
      )
  }
}

