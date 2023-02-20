<template>
  <section id="about">
    <div class="container">
      <h2 class="section-title load-hidden">关于我</h2>
      <div class="row about-wrapper">
        <div class="col-md-6 col-sm-12">
          <div class="about-wrapper__image load-hidden">
            <img
              class="img-fluid rounded shadow-lg"
              height="auto"
              width="300px"
              src="~/assets/profile.jpg"
              alt="Profile Image"
            />
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="about-wrapper__info load-hidden">
            <p class="about-wrapper__info-text">
              大学毕业后，我在一家检测机构从事基因检测的工作。
              由于学过一段时间绘画，有一定的绘画基础并且对 UI
              设计有着浓厚的兴趣。 工作一年后，决定离职学习 UI 设计。
            </p>
            <p class="about-wrapper__info-text">
              我一直在为成为一个优秀的 UI 设计师而努力。
            </p>
            <span class="d-flex mt-3">
              <a
                rel="noreferrer"
                target="_blank"
                class="cta-btn cta-btn--resume"
                href="/resume.pdf"
              >
                我的简历
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                class="cta-btn cta-btn--resume"
                href="/portfolio/pic.html"
              >
                我的作品集
              </a>
              <!-- <NuxtLink
                class="cta-btn cta-btn--resume"
                to="/portfolio"
                >我的作品集</NuxtLink> -->
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NuxtProfileAbout',
}
</script>

<style lang="scss">
#about {
  background-color: $primary-color;
  background-image: linear-gradient(
    135deg,
    $primary-color 0%,
    $secondary-color 100%
  );
  color: $white-color;
  height: 100%;
  border-top: 0px;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  padding-bottom: 10%;

  @include respond(tab-land) {
    height: 100%;
    -webkit-clip-path: none;
    clip-path: none;
  }

  .about-wrapper {
    @include respond(phone) {
      padding-bottom: 5rem;
    }

    &__image {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;

      @include respond(tab-land) {
        height: 100%;
      }
      @include respond(tab-port-sm) {
        padding-bottom: 6.4rem;
      }
    }

    &__info {
      display: flex;
      height: 100%;
      justify-content: center;
      flex-direction: column;

      @include respond(tab-port-sm) {
        align-items: center;
      }

      .cta-btn--resume {
        margin-right: 2rem;
      }

      &-text {
        text-align: left;

        @include respond(tab-port) {
          text-align: left;
        }
        @include respond(tab-port-sm) {
          text-align: center;
        }

        &--important {
          background: darken($secondary-color, 1%);
          display: inline-block;
          font-style: italic;
          padding: 0 0.3rem;
          margin: 0.3rem 0;
          line-height: 1.6;

          @include respond(phone) {
            display: inline;
            margin: 0;
            padding: 0;
            background: transparent;
            font-style: normal;
          }
        }
      }
    }
  }
}
</style>
