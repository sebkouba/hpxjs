import React from 'react';
import Entry from './Entry';

var divStyle = {
  border: "3px solid black",
  padding: "15px"
};

class EntryContainer extends React.Component {
  render() {
    return (
      <div id="entrycontainer" style={divStyle}>
        <i>EntryContainer</i>

        <Entry />
      </div>
    )
  }
}

export default EntryContainer;