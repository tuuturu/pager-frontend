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
        const haystack = event.title + event.description

        return haystack.includes(this.filter)
      })
    },
  },
  data: () => ({
    filter: '',
  }),
  created() {
    this.$store.dispatch('events/refresh')
  }
}
</script>

<style scoped>
.Events {
}

.EventSearch {
  margin-top: 1em;

  width: 95%;
}
</style>
