import { createStore } from 'vuex'

import auth from './auth'
import events from './events'

const store = createStore({
  modules: {
    auth,
    events,
  }
})

store.dispatch("auth/refresh")

export default store
