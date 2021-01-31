<template>
  <li class="EventListItem">
    <img alt="" src="https://via.placeholder.com/150" />

    <div class="content-wrapper">
      <div class="header">
        <h1>{{ title }}</h1>
        <span class="timestamp">{{ fromMillis(timestamp) }}</span>
      </div>
      <p>{{ description }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'EventListItem',
  props: {
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
  data: () => ({}),
  methods: {
    fromMillis(millis) {
      const now = Date.now()
      const diff = now - millis

      if (diff < HOUR)
        return "less than an hour"

      if (diff < DAY)
        return Math.round((diff / HOUR)) + " hours ago"

      return Math.round(diff / DAY) + " days ago"
    }
  }
}

const HOUR = 1000 * 60 * 60
const DAY = HOUR * 24
</script>

<style scoped>
.EventListItem {
  margin: 0;
  padding: 1em;

  display: flex;
  align-items: center;

  border: 1px solid black;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  text-align: left;

  margin-left: 1em;
}

.header {
  width: 100%;

  display: flex;

  justify-content: space-between;
  align-items: flex-start;
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
  font-size: 10pt;
}

img {
  width: 48px;
  height: 48px;
}
</style>
