import axios from 'axios'

function getMoviesApiCall() {
  return axios(`https://movie-api-atlrumqzze.now.sh/movies-ref`)
    .then((response) => {
      console.log('in api call',response.data);
      return response.data
    })
    .catch((error) => {
      return error
    })
}

module.exports = {
  getMoviesApiCall
}