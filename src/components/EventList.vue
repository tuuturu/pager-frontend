<template>
  <ul class="EventList">
    <EventListItem
        v-for="event in events"
        :key="event.title"
        :title="event.title"
        :description="event.description"
        :timestamp="parseInt(event.timestamp)"
    />
  </ul>
</template>

<script>
import EventListItem from './EventListItem.vue'
export default {
  name: 'EventList',
  components: { EventListItem },
  props: {
    events: {
      type: Array,
      required: true,
    }
  },
  data: () => ({
  })
}
</script>

<style scoped>
.EventList {
  margin-top: 1em;
  padding: 0;
}
</style>
