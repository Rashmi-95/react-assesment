const axiosCall = require('./callAPI.js')

function getMovieSet() {
  console.log('in helper function');
  return axiosCall.getMoviesApiCall()
    .then((data) => {
      return data
    })
}

function filterMovieList(movies, selectedActor) {
  return movies.filter((element) => {
    let isActorPresent = false
    element.actors.forEach((element) => {
      if (element === selectedActor)
        isActorPresent = true
    })
    return isActorPresent
  })
}
module.exports = {
  getMovieSet,
  filterMovieList
}