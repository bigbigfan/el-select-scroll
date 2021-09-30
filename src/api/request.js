import axios from 'axios'
const request = {
  get: (url, params) => {
    url = url || ''
    params = params || {}
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      }).then(function (res) {
        resolve(res.data.data)
      }).catch(function (err) {
        reject(err)
      })
    })
  },
  post: (url, params) => {
    url = url || ''
    params = params || {}
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(function (res) {
        resolve(res.data.data)
      }).catch(function (err) {
        reject(err)
      })
    })
  }
}
export { request }
