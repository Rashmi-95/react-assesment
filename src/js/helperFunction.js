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
function getActors(movies) {
  const actorList = []
  movies.forEach((movie) => {
    movie.actors.forEach((actor) => {
      if (actorList.includes(actor));
      else
        actorList.push(actor)
    })
  })
  return actorList
}
module.exports = {
  getMovieSet,
  filterMovieList,
  getActors
}