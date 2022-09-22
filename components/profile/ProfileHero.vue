<template>
  <section id="hero" class="jumbotron">
    <div class="container">
      <h1 class="hero-title load-hidden hero-title-name">
        我是<span class="name-container"><Name /></span>
      </h1>
      <h1 class="hero-title load-hidden hero-title-desc">
        一名在不停学习的普通设计师
      </h1>
      <p class="hero-cta load-hidden">
        <a
          rel="noreferrer"
          class="cta-btn cta-btn--hero"
          href="javascript:;"
          @click="viewDetails"
          >查看详情</a
        >
      </p>
    </div>
  </section>
</template>

<script>
import jump from 'jump.js'

export default {
  name: 'NuxtProfileHero',
  methods: {
    viewDetails(e) {
      jump('#about')
    },
  },
}
</script>

<style lang="scss">
#hero {
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  border-bottom: 0px;
  background: $white-color;
  font-weight: 400;
  color: $dark-blue-text;
  padding: 0rem 5.6rem;
  margin-bottom: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;

  // Set position sticky so the jumbotron stays fixed while you scroll.
  // position: sticky;

  // If you want to set a background image on the hero section, uncomment these with your custom image

  /* background: url("/src/assets/[your-image].png");
  background-position: center;
  background-size: cover; */

  @include respond(phone) {
    padding: 0rem $default-font-size;
  }

  .hero-title {
    font-size: 5.6rem;
    font-weight: 700;
    margin-bottom: 3.2rem;
    text-align: left;

    .name-container {
      display: inline-block;
      margin-left: 2rem;
      transform: translateY(-4px);
    }

    @include respond(tab-land) {
      font-size: 4rem;
    }
    @include respond(tab-port) {
      font-size: 3.6rem;
      text-align: center;
    }
    @include respond(phone) {
      font-size: 3.5rem;
      line-height: 1.5;
    }
    @include respond(phone-xs) {
      font-size: 2.8rem;
    }
  }

  .hero-title-name {
    margin-bottom: 1rem;
  }

  .hero-cta {
    display: flex;

    @include respond(tab-port) {
      justify-content: center;
    }

    & a {
      font-size: 2.4rem;

      @include respond(phone) {
        font-size: 2rem;
      }
    }
  }
}
</style>
