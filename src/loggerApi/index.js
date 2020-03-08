import axios from 'axios'

// const baseURL = 'http://localhost:19999/api/v1/user';
const baseURL = 'http://oneexbit.com:88/api/v1/user'

class Api {
  constructor(options = {}) {
    this.client = axios.create({ baseURL })
    this.token = options.token

    this.client.interceptors.request.use(
      config => {
        if (!this.token) {
          return config
        }

        const newConfig = {
          headers: {},
          ...config
        }

        newConfig.headers.Authorization = `bearer ${this.token}`
        return newConfig
      },
      e => Promise.reject(e)
    )
  }

  setToken = token => {
    this.token = token
  }

  async signUp({ email, password, refCode }) {
    const { data = {} } = await this.client
      .post('/signUp', { email, password, refCode })
      .catch(error => error.response)
    return data
  }

  async login({ email, password }) {
    const { data = {} } = await this.client
      .post('/login', { email, password })
      .catch(error => error.response)
    this.token = data.token
    return data
  }

  async verifyEmail({ email, code }) {
    const { data = {} } = await this.client
      .get(`/verify/${email}&${code}`)
      .catch(error => error.response)
    return data
  }

  async logout() {
    await this.client.get('/logout').catch(error => error)
    this.token = null
  }

  async forgot(email) {
    const { data = {} } = await this.client
      .get(`/forgot/${email}`)
      .catch(error => error.response)
    return data
  }

  async verifyReset({ email, code }) {
    const { data = {} } = await this.client
      .get(`/verifyReset/${email}&${code}`)
      .catch(error => error.response)
    return data
  }

  async resetPassword({ email, code, password }) {
    const { data = {} } = await this.client
      .post('/resetPassword', { email, code, password })
      .catch(error => error.response)
    return data
  }

  async requestUserInfo() {
    const { data = {} } = await this.client
      .get('/me')
      .catch(error => error.response)
    return data
  }

  async requestPlans() {
    const { data = {} } = await this.client
      .get('http://oneexbit.com:88/api/v1/plan')
      .catch(error => error.response)
    return data
  }

  async subscribe() {
    const { data = {} } = await this.client
      .post('/subscribe', { id: 2 })
      .catch(error => error.response)
    return data
  }

  async unsubscribe() {
    const { data = {} } = await this.client
      .post('/unsubscribe')
      .catch(error => error.response)
    return data
  }

  async requestBalanceHistory() {
    const { data = {} } = await this.client.get('/balanceHistory')
    return data
  }

  async requestReferrals() {
    const { data = {} } = await this.client.get('/referrals')
    return data
  }
}

export const api = new Api()

window.loggerApi = api

export default Api
