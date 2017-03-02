import React, { Component } from 'react'

class FilterByActor extends Component {
  selectActor() {
    this.props.getActor('Bill Tyler')
  }
  render() {
    return (
      <div className="component">
        <button onClick={this.selectActor.bind(this)}>get movie of Bill Tyler</button>
      </div>
    );
  }
}

export default FilterByActor