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
  mounted() {
    const s = document.createElement('script')
    s.src = '/js/reveal/reveal.js'
    s.onload = () => {
      const deck = new window.Reveal({
        plugins: [],
      })
      deck.initialize()
    }
    document.body.append(s)
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
