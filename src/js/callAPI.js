import axios from 'axios'

function getMoviesApiCall(apiUrl) {
  return axios(apiUrl)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return 'Error'
    })
}

module.exports = {
  getMoviesApiCall
}