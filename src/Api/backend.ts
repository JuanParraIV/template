import axios from 'axios'

export const api = axios.create({
  // baseURL: 'https://localhost:5001/',
  // baseURL: 'variable entorno con la dirección del backend',
  /* withCredentials: true, */
})
