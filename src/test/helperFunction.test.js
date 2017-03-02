process.env.NODE_ENV = 'test'
const chai = require('chai')
const helperFunction = require('../js/helperFunction.js')
const movieList = require('../jsonData/moviesRef.js')

describe('Filter Movies by Actor Name', function () {
  it('should give a list of movie which has an actor derek', function () {
    const filteredMovieList = helperFunction.filterMovieList(movieList.derekMovies, movieList.actorList[1])
    expect(filteredMovieList).toBeInstanceOf(Object)
    expect(filteredMovieList).toHaveLength(5)
    expect(filteredMovieList).toEqual(movieList.derekMovies)
  })
  it('should give a list of movie which has an actor nathaniel', function () {
    const filteredMovieList = helperFunction.filterMovieList(movieList.nathanielMovies, movieList.actorList[3])
    expect(filteredMovieList).toBeInstanceOf(Object)
    expect(filteredMovieList).toHaveLength(1)
    expect(filteredMovieList).toEqual(movieList.nathanielMovies)
  })
  it('should give a list of movie which has an actor xyz', function () {
    const filteredMovieList = helperFunction.filterMovieList(movieList.movies, 'xyz')
    expect(filteredMovieList).toBeInstanceOf(Object)
    expect(filteredMovieList).toHaveLength(0)
    expect(filteredMovieList).toEqual([])
  })
  it('should give a no movie when movie is undefined', function () {
    const filteredMovieList = helperFunction.filterMovieList(undefined, movieList.actorList[3])
    expect(filteredMovieList).toEqual('No Movies present')
  })
  it('should give a movie not valid when movie is undefined', function () {
    const filteredMovieList = helperFunction.filterMovieList('movies', movieList.actorList[3])
    expect(filteredMovieList).toEqual('Movie not an Array')
  })
  it('should give a no actor when actor is undefined', function () {
    const filteredMovieList = helperFunction.filterMovieList(movieList.movies, undefined)
    expect(filteredMovieList).toEqual('No Actor present')
  })
  it('should give a actor not valid when actor is not string', function () {
    const filteredMovieList = helperFunction.filterMovieList(movieList.movies, 123)
    expect(filteredMovieList).toEqual('Actor not an string')
  })
})

describe('Get movie List', function () {
  it('should return a movie list when valid url is passed', function (done) {
    helperFunction.getMovieSet('https://movie-api-atlrumqzze.now.sh/movies-ref')
      .then((data) => {
        expect(data).toBeInstanceOf(Object)
        done()
      })
      .catch((error) => {
        console.log(error);
        done()
      })
  })
  it('should return a error list when invalid url is passed', function () {
    helperFunction.getMovieSet('https://movie-api-atlrumqzfze.now.sh/movies-ref')
      .then((data) => {
        expect(data).toEqual('Error')
      })
  })
})

describe('Get Actor List from Movie', function () {
  it('should give a list distinct actors for the movie list', function () {
    const getActorList = helperFunction.getActors(movieList.movies)
    expect(getActorList).toBeInstanceOf(Array)
    expect(getActorList).toHaveLength(4)
    expect(getActorList).toEqual(movieList.actorList)
  })
  it('should give a list of movie which has an actor nathaniel', function () {
    const getActorList = helperFunction.getActors([])
    expect(getActorList).toBeInstanceOf(Array)
    expect(getActorList).toHaveLength(0)
    expect(getActorList).toEqual([])
  })
  it('should give a list of movie which has an actor xyz', function () {
    const getActorList = helperFunction.getActors(undefined)
    expect(getActorList).toEqual('No Movies present')
  })
  it('should give a list of movie which has an actor xyz', function () {
    const getActorList = helperFunction.getActors('movies')
    expect(getActorList).toEqual('Movie not an Array')
  })
})