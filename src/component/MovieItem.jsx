import React, { Component } from 'react'
import moment from 'moment'

class MovieItem extends Component {
  render() {
    const actorListDom = this.props.movie.actors.map((actor) => {
      return <li key={actor}>{actor.toUpperCase()}</li>
    })
    const movie = this.props.movie
    return (
      <li key={movie.id} className="movie-item">
        <h3 className="movie-name">{movie.name.toUpperCase()}</h3>
        <p className="movie-description">{movie.description}</p>
        <ul className="actor-name-list">
          {actorListDom}
        </ul>
        <p className="movie-release-date">Release Date : {moment(movie.releaseDate).format('Do MMMM YYYY')}</p>
        <span className="movie-rating">{movie.rating} / 5</span>
      </li>
    )
  }
}

export default MovieItem