<template>
  <section id="contact">
    <div class="container">
      <h2 class="section-title">联系方式</h2>
      <div class="contact-wrapper load-hidden">
        <p class="contact-wrapper__text">jinghua0626@foxmail.com</p>
        <a
          rel="noreferrer"
          target="_blank"
          class="cta-btn cta-btn--resume"
          href="mailto:jinghua0626@foxmail.com"
          >发送邮件</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NuxtProfileContact',
}
</script>

<style lang="scss">
#contact {
  background-image: linear-gradient(
    135deg,
    $primary-color 0%,
    $secondary-color 100%
  );
  -webkit-clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  padding: 15rem 0 10rem 0;
  margin-top: -10rem;
  margin-bottom: -1px;
  color: $white-color;

  @include respond(tab-land) {
    padding: 10rem 0;
    clip-path: none;
    margin-top: 0;
    -webkit-clip-path: none;
  }

  .contact-wrapper {
    margin-top: 3.2rem;
    padding: 0 2rem;
    backface-visibility: hidden;

    &__text {
      margin-bottom: 2.5rem;
    }

    &__text,
    a {
      font-size: 2.4rem;

      @include respond(phone) {
        font-size: 2rem;
      }
    }
  }
}
</style>
