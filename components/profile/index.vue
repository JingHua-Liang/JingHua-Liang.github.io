<template>
  <div>
    <ProfileHero />
    <ProfileAbout />
    <ProfileProjects />
    <ProfileContact />
  </div>
</template>

<script>
import VanillaTilt from 'vanilla-tilt'
import initScrollReveal from '@/assets/js/scrollReveal'
import { targetElements, defaultProps } from '@/assets/js/scrollRevealConfig'

export default {
  name: 'NuxtProfile',
  head: {
    script: [{ src: '/js/scrollreveal.min.js' }],
  },
  mounted() {
    initScrollReveal(targetElements(window), defaultProps)
    this.initTiltAnimation()
  },
  methods: {
    initTiltAnimation() {
      const elements = document.querySelectorAll('.js-tilt')
      VanillaTilt.init(elements)
    },
  },
}
</script>
