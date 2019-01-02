/* eslint-disable */
import Api from '@/services/Api'

export default {
/**
 * Envia los datos por HTTP POST
 * @param {any} credentials
 */
  register (credentials) {
    return Api().post('/register', credentials)
  },

  findEmail (email) {
    return Api().post('/findEmail', email)
  }

}