import React, { Component } from 'react'

class MovieItem extends Component {
  render() {
    return (
      <li className="movie-item">
         <h2>{this.props.movie.name}</h2>
      </li>
    );
  }
}

export default MovieItem