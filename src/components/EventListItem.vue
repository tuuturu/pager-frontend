<template>
  <li class="EventListItem" @mouseover="hover = true" @mouseout="hover = false">
    <img alt="" :src="DefaultIcon" />

    <div class="content-wrapper">
      <div class="event-data">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>

      <div class="event-actions">
        <span v-show="!hover" class="timestamp">{{ sanitizedTimestamp }}</span>
        <div v-show="hover">
          <button @click="markAsRead"><img alt="mark as read" :src="MarkAsReadIcon" /></button>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import DefaultIcon from '/src/assets/bell.svg'
import MarkAsReadIcon from '/src/assets/check.svg'

export default {
  name: 'EventListItem',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Number,
      required: true,
    }
  },
  computed: {
    sanitizedTimestamp() {
      return fromNanos(this.timestamp)
    }
  },
  data: () => ({
    DefaultIcon,
    MarkAsReadIcon,
    hover: false,
  }),
  methods: {
    markAsRead() {
      this.$store.dispatch('events/markAsRead', this.id)
    }
  }
}

const HOUR = 1000 * 60 * 60
const DAY = HOUR * 24

function fromNanos(nanos) {
  const millis = Math.round(nanos / 1000000)

  return fromMillis(millis)
}

function fromMillis(millis) {
  const now = Date.now()

  const diff = now - millis

  if (diff < HOUR)
    return "less than an hour"

  if (diff < DAY)
    return Math.round((diff / HOUR)) + " hours ago"

  return Math.round(diff / DAY) + " days ago"
}
</script>

<style lang="scss" scoped>
@import "src/assets/theme";

.EventListItem {
  margin: 0;
  padding: 1em;

  display: flex;
  align-items: center;

  background: $background;
  color: $primaryTextColor;
}

.EventListItem:hover {
  background: $backgroundAccent;

  color: $primaryTextAccentColor
}

.content-wrapper {
  display: flex;
  justify-content: space-between;

  width: 100%;

  text-align: left;

  margin-left: 1em;
}

.event-data {
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
}

.event-actions {
  display: flex;

  justify-content: flex-end;
  align-items: center;

  width: 114px;
}

h1 {
  margin: 0;
  padding: 0;

  font-size: 12pt;
}

.timestamp {
  white-space: nowrap;

  font-size: 8pt;
}

p {
  margin: 0;
  font-size: 10pt;
}

img {
  width: 36px;
  height: 36px;
}

button {
  display: inline-flex;
  align-content: center;

  padding: 0.5em;
  margin-left: 1em;

  border: 1px solid black;
  border-radius: 4px;
  background: $primaryColor;

  img {
    height: 18px;
    width: 18px;
  }
}

button:hover {
  background: $primaryAccent;
}

button:focus {
  background: $backgroundAccent;
}
</style>
