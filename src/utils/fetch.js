import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 30 * 1000
})

service.interceptors.request.use(
  config => {
    return config
  },

  err => {
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  res => {
    return res
  },

  err => {
    return Promise.reject(err)
  }
)