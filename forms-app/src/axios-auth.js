import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://forms-app-6620f.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
