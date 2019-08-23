import url from './url'
import axios from './axios'

const apiUrl = url.dev
export const test = params => {
  return axios
    .get(`${apiUrl}/query`, { params })
    .then(res => {
      return res.data.data
    })
    .catch(err => {
      throw err
    })
}
