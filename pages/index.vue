<template>
  <div>
    <h1>TV Shows</h1>

    <ul>
      <li
        v-for="show in shows"
        :key="show.id"
      >
        <nuxt-link :to="`shows/${show.id}`">{{ show.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ app, payload }) {
    if (payload && payload.shows) return { shows }
    const shows = await app.$axios.$get('https://api.tvmaze.com/shows?page=0')
    return { shows }
  }
}
</script>

<style>
</style>
