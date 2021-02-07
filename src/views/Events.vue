<template>
  <EventSearch @input="filter = $event.target.value"/>
  <EventList :events="filteredEvents"/>
</template>

<script>
import { mapState } from 'vuex'

import EventSearch from '../components/EventSearch.vue'
import EventList from '../components/EventList.vue'

export default {
  name: 'Events',
  components: { EventList, EventSearch },
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
    this.$store.dispatch('events/refresh')
  }
}
</script>

<style scoped>
.EventSearch {
  margin-top: 1em;

  width: 95%;
}
</style>
