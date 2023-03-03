import * as axios from 'axios'
// import { create } from 'axios'

// import { setError } from './slice/appSlice'


const createAPI = (dispatch) => {
  const api = axios.create({
  // const api = create({
    baseURL: `https://test-6d8f2.firebaseio.com`,
    timeout: 1000 * 5,
    origin: 'http://localhost:3000',
  })

  // const onSuccess = (response) => response

  // const onFail = (err) => {
  //   dispatch(setError(err.statusText))
  //   throw new Error(err.statusText)
  // }

  // api.interceptors.response.use(onSuccess, onFail)

  return api
}

export default createAPI