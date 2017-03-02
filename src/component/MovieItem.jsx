import React, { Component } from 'react'
import moment from 'moment'

class MovieItem extends Component {
  render() {
    const actorListDom = this.props.movie.actors.map((actor) => {
      return <li key={actor}>{actor.toUpperCase()}</li>
    })
    const movie = this.props.movie
    let rating = ['red', 'red', 'blue', 'blue', 'green']
    let borderLeft = '30px solid ' + movie.theme
    return (
      <li key={movie.id} style={{borderLeft: borderLeft}} className="movie-item">
        <h3 className="movie-name">{movie.name.toUpperCase()}</h3>
        <p className="movie-description">{movie.description}</p>
        <ul className="actor-name-list">
          {actorListDom}
        </ul>
        <p className="movie-release-date">Release Date : {moment(movie.releaseDate).format('Do MMMM YYYY')}</p>
        <span className={"movie-rating " + rating[movie.rating - 1]}> {movie.rating} / 5</span>
      </li>
    )
  }
}

export default MovieItem