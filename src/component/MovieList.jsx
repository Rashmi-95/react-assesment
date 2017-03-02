import React, { Component } from 'react'
import MovieItem from './MovieItem.jsx'
import helperFunction from '../js/helperFunction.js'

class MovieList extends Component {
  render() {
    console.log('in movie list',this.props.movies);
    const movieList = this.props.movies
    const actor = this.props.selectedActor
    const FilteredMovieList = ( actor === 'all') ? movieList : helperFunction.filterMovieList(movieList, actor)

    const FilteredMovieListDom = FilteredMovieList.map((element) => {
      return <MovieItem key={element.id} movie={element} />
    })
    return (
      <ul className="movie-list">
        {FilteredMovieListDom}
      </ul>
    );
  }
}

export default MovieList