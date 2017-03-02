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
  if (movies === undefined)
    return 'No Movies present'

  if (!(movies instanceof Array))
    return 'Movie not an Array'

  if (selectedActor === undefined)
    return 'No Actor present'

  if (typeof (selectedActor) !== 'string')
    return 'Actor not an string'

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
  if (movies === undefined)
    return 'No Movies present'

  if (!(movies instanceof Array))
    return 'Movie not an Array'

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