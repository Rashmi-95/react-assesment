const axiosCall = require('./callAPI.js')

function getMovieSet(apiUrl) {
  return axiosCall.getMoviesApiCall(apiUrl)
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
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