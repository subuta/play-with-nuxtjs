<template>
  <div>
    <h1>TV Show(ID: {{ show.id }})</h1>

    <h3>{{ show.name }}</h3>
    <div v-html="show.summary" />

    <img :src="show.image.medium">

    <p>
      <a href="/">Back to /</a>
    </p>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params, payload }) {
    if (payload && payload.shows) return { show }
    const show = await app.$axios.$get(
      `https://api.tvmaze.com/shows/${params.id}`
    )
    return { show }
  }
}
</script>

<style>
</style>
