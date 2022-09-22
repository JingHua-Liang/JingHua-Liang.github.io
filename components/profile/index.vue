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
import initScrollReveal from './scrollReveal'
import { targetElements, defaultProps } from './scrollRevealConfig'

export default {
  name: 'NuxtProfile',
  head: {
    script: [{ src: '/js/scrollReveal.min.js' }],
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
