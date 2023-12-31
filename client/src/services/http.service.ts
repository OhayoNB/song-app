import Axios from 'axios'

const BASE_URL =
   process.env.NODE_ENV === 'production'
      // Change this to your production server url
      ? 'http://localhost:3030/api/'
      : 'http://localhost:3030/api/'

var axios = Axios.create({
   withCredentials: true,
})

export const httpService = {
   get(endpoint: string, data?: {} | null | undefined) {
      return ajax(endpoint, 'GET', data)
   },
   post(endpoint: string, data?: {} | null) {
      return ajax(endpoint, 'POST', data)
   }
}

async function ajax(endpoint: string, method = 'GET', data: {} | null = null) {
   try {
      const res = await axios({
         url: `${BASE_URL}${endpoint}`,
         method,
         data,
         params: method === 'GET' ? data : null,
      })
      return res.data
   } catch (err: any) {
      if (err.response && err.response.status === 401) {
         sessionStorage.clear()
      }
      throw err
   }
}