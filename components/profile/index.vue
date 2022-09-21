<template>
  <div>
    <ProfileHero />
    <ProfileAbout />
    <ProfileProjects />
    <ProfileContact />
  </div>
</template>

<script>
import initScrollReveal from './scrollReveal'
import { targetElements, defaultProps } from './scrollRevealConfig'

export default {
  name: 'NuxtProfile',
  head: {
    script: [{ src: '/js/scrollReveal.min.js' }],
  },
  mounted() {
    initScrollReveal(targetElements(window), defaultProps)
  },
}
</script>
