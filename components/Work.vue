<template>
  <div class="reveal">
    <div class="slides">
      <section>
        <h3>梁静华的作品集</h3>
      </section>
      <section>
        <h3>谢谢观看</h3>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtWork',
  head: {
    script: [{ src: '/js/reveal/reveal.js' }],
    link: [
      { rel: 'stylesheet', href: '/js/reveal/reveal.css' },
      { rel: 'stylesheet', href: '/js/reveal/theme/sky.css' },
    ],
  },
  beforeMount() {
    const deck = new window.Reveal({
      plugins: [],
    })
    deck.initialize()
  },
}
</script>

<style>
.reveal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>
