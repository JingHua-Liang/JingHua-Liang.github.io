<template>
  <div class="portfolio-page">
    <img v-for="img in imgs" :key="img" :src="`/portfolio/Slice ${img}.jpg`" alt="portfolio">
  </div>
</template>

<script>
export default {
  name: 'PortfolioPage',
  data() {
    return {
      imgs: Array.from({length: 31}).map((_, idx) => idx + 1)
    }
  }
}
</script>

<style lang="scss">
  .portfolio-page {
    width: 100%;
    img {
      width: 100%;
    }
  }
</style>