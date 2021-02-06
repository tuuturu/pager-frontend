import Axios from 'axios'

import config from '../app.config'

const axios = Axios.create({
  baseURL: config.VITE_GATEKEEPER_URL,
  withCredentials: true,
})

const state = () => ({
  userInfo: null,
})

const actions = {
  async refresh({ commit }) {
    try {
      const { data } = await axios.request({
        url: '/userinfo',
        method: 'GET'
      })

      commit('userInfo', data)
    } catch (error) {
      if (error.response && error.response.status === 401) commit('userInfo', null)
      else throw error
    }
  },
  async login(context, redirectTo = `${config.VITE_BASE_URL}`) {
    const encodedRedirect = encodeURIComponent(redirectTo)
    
    window.location.href = `${config.VITE_GATEKEEPER_URL}/login?redirect=${encodedRedirect}`
  }
}

const mutations = {
  userInfo(state, userinfo) {
    state.userInfo = userinfo
  }
}

const getters = {
  isAuthenticated: state => state.userInfo !== null
}

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
}
