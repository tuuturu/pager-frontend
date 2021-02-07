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
  },
  async markAsRead({ commit }, id) {
    try {
      await axios.request({
        url: `/events/${id}`,
        method: 'PATCH',
        data: {
          read: true,
        },
      })

      commit('markAsRead', id)
    } catch (error) {
      console.error(error)
    }
  },
}

const mutations = {
  events(state, events) {
    state.events = events
  },
  markAsRead(state, id) {
    const results = state.events.filter(event => event.id === id)
    
    results[0].read = true
  }
}

export default {
  namespaced: true,
  actions,
  mutations,
  state,
}
