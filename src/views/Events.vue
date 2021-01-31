<template>
  <EventSearch @input="filter = $event.target.value"/>
  <EventList :events="filteredEvents"/>
</template>

<script>
import EventSearch from '../components/EventSearch.vue'
import EventList from '../components/EventList.vue'
export default {
  name: 'Events',
  components: { EventList, EventSearch },
  computed: {
    filteredEvents() {
      return this.events.filter(event => {
        const haystack = event.title + event.description

        return haystack.includes(this.filter)
      })
    },
  },
  data: () => ({
    events: [
      { title: "dummy title", description: "dummy now", timestamp: 1612084461841 },
      { title: "2nd dummy title", description: "dummy 2 hours", timestamp: 1612077286109 },
      { title: "3nd dummy title", description: "dummy six days", timestamp: 1611558886109 },
    ],
    filter: '',
  })
}
</script>

<style lang="scss" scoped>
.Events {
}

.EventSearch {
  width: 95%;
}
</style>
