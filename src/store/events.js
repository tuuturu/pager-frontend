import Axios from 'axios/dist/axios'

import config from '../app.config'

const axios = Axios.create({
  baseURL: config.VITE_EVENTS_URL,
  withCredentials: true,
})

const state = () => ({
  events: [],
})

const actions = {
  async refresh({ commit }) {
    try {
      const { data } = await axios.request({
        url: '/events',
        method: 'GET'
      })

      commit('events', data)
    } catch (error) {
      console.error(error)
    }
  }
}

const mutations = {
  events(state, events) {
    state.events = events
  }
}

export default {
  namespaced: true,
  actions,
  mutations,
  state,
}
