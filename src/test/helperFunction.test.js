process.env.NODE_ENV = 'test'
const chai = require('chai')
const helperFunction = require('../js/helperFunction.js')
const movieList = require('../jsonData/moviesRef.js')

describe('filter Movies', function () {
  it('should give a list of movie which has an actor derek', function () {
    const filteredMovieList = helperFunction.filterMovieList(movieList.derekMovie, 'Derek Day')
    expect(filteredMovieList).toBeInstanceOf(Object)
    expect(filteredMovieList).toHaveLength(5)
    expect(filteredMovieList).toEqual(movieList.derekMovie)
  })
  it('should give a list of movie which has an actor nathaniel', function () {
    const filteredMovieList = helperFunction.filterMovieList(movieList.nathanielMovie, 'Derek Day')
    expect(filteredMovieList).toBeInstanceOf(Object)
    expect(filteredMovieList).toHaveLength(1)
    expect(filteredMovieList).toEqual(movieList.nathanielMovie)
  })
  it('should give a list of movie which has an actor xyz', function () {
    const filteredMovieList = helperFunction.filterMovieList(movieList.nathanielMovie, 'xyz')
    expect(filteredMovieList).toBeInstanceOf(Object)
    expect(filteredMovieList).toHaveLength(0)
    expect(filteredMovieList).toEqual([])
  })
})

describe(' get movie List', function () {
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