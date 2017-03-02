import React, { Component } from 'react'

class FilterByActor extends Component {
  selectActor(e) {
    this.props.getActor(e.target.value)
  }
  render() {
    const actorListDom = this.props.actorList.map((actor) => {
      return <option key={actor} value={actor}>{actor.toUpperCase()}</option>
    })
    return (
      <div className="filter">
        <span>Filter By Actor</span>
        <select name="choose-actor" className="choose-actor" onChange={this.selectActor.bind(this)} >
          <option value='all'>ALL</option>
          {actorListDom}
        </select>
      </div>
    );
  }
}

export default FilterByActor