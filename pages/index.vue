<template>
  <div>
    <h1>TV Shows</h1>

    <ul>
      <li
        v-for="show in shows"
        :key="show.id"
      >
        <a :href="`/shows/${show.id}`">{{ show.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const shows = await app.$axios.$get('https://api.tvmaze.com/shows?page=0')
    return { shows }
  }
}
</script>

<style>
</style>
