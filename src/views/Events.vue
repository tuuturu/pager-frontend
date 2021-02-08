<template>
  <EventSearch @input="filter = $event.target.value"/>
  <div class="switch-container">
    <span>Unread</span>
    <Switch @change="toggleRead"/>
    <span>All</span>
  </div>
  <EventList :events="filteredEvents"/>
</template>

<script>
import { mapState } from 'vuex'

import EventSearch from '../components/EventSearch.vue'
import EventList from '../components/EventList.vue'
import Switch from '../components/Switch.vue'

export default {
  name: 'Events',
  components: { Switch, EventList, EventSearch },
  computed: {
    ...mapState('events', ['events']),
    filteredEvents() {
      return this.events.filter(event => {
        if (!this.showRead && event.read) return false

        const haystack = event.title + event.description

        return haystack.toLowerCase().includes(this.filter.toLowerCase())
      })
    },
  },
  data: () => ({
    filter: '',
    showRead: false,
  }),
  created() {
    this.$store.dispatch('events/fetchUnread')
  },
  methods: {
    toggleRead(e) {
      if (e.target.checked) this.$store.dispatch('events/fetchAll')

      this.showRead = e.target.checked
    }
  },
}
</script>

<style lang="scss" scoped>
.EventSearch {
  margin-top: 1em;

  width: 95%;
}

.switch-container {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin-top: 1em;

  span {
    margin: 1em;
  }
}
</style>
