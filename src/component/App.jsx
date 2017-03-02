import React, { Component } from 'react'
import helperFunction from '../js/helperFunction.js'
import FilterByActor from './FilterByActor.jsx'
import MovieList from './MovieList.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      actor: 'all'
    }
    helperFunction.getMovieSet('https://movie-api-atlrumqzze.now.sh/movies-ref')
      .then((data) => {
        this.setState({ movies: data })
      })
  }
  selectActor(actorName) {
    this.setState({ actor: actorName })
  }
  render() {
    return (
      <div className="App">
        {this.state.actor}
        <FilterByActor movies={this.state.movies} getActor={this.selectActor.bind(this)} />
        <MovieList movies={this.state.movies} selectedActor={this.state.actor} />
      </div>
    );
  }
}

export default App;