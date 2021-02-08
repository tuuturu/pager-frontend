<template>
  <ul class="EventList">
    <EventListItem
        v-for="event in events"
        :id="event.id"
        :key="event.title"
        :title="event.title"
        :description="event.description"
        :timestamp="parseInt(event.timestamp)"
        :read-more-u-r-l="event.readMoreURL"
        :image-u-r-l="event.imageURL"
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
}
</script>

<style scoped>
.EventList {
  margin-top: 1em;
  padding: 0;
}
</style>
