<template>
  <section id="projects">
    <div class="container">
      <div class="project-wrapper">
        <h2 class="section-title dark-blue-text">项目经验</h2>
        <!-- Notice: each .row is a project -->
        <div v-for="project in projects" :key="project.title" class="row">
          <div class="col-lg-4 col-sm-12">
            <div class="project-wrapper__text load-hidden">
              <h3 class="project-wrapper__text-title">{{ project.title }}</h3>
              <div>
                <p class="mb-4">
                  <span
                    v-for="(text, index) in project.desc"
                    :key="index"
                    class="project-desc"
                  >
                    {{ text }}
                  </span>
                </p>
              </div>
              <!-- <a
                rel="noreferrer"
                target="_blank"
                class="cta-btn cta-btn--hero"
                href="#!"
              >
                See Live
              </a> -->
              <!-- <a
                rel="noreferrer"
                target="_blank"
                class="cta-btn text-color-main"
                href="#!"
              >
                Source Code
              </a> -->
            </div>
          </div>
          <div class="col-lg-8 col-sm-12">
            <div class="project-wrapper__image load-hidden">
              <a
                rel="noreferrer"
                :href="'javascript:;'"
                @click="() => viewThumbnail(project)"
              >
                <span
                  data-tilt
                  data-tilt-max="4"
                  data-tilt-glare="true"
                  data-tilt-max-glare="0.5"
                  class="thumbnail rounded js-tilt"
                >
                  <img
                    :alt="project.thumbnail.alt || 'Project Image'"
                    class="img-fluid"
                    :src="project.thumbnail.src"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
        <!-- /END Project -->
      </div>
    </div>
  </section>
</template>

<script>
import { projects } from './data.js'

export default {
  name: 'NuxtProfileProjects',
  data() {
    return { projects }
  },
  methods: {
    viewThumbnail(project) {
      project.link && window.open('project.link')
    },
  },
}
</script>

<style lang="scss">
#projects {
  background-color: $white-color;
  color: $dark-blue-text;
  margin-top: -10rem;
  padding-top: 15rem;

  @include respond(tab-land) {
    margin-top: 0;
    padding-top: 5rem;
  }

  .project-wrapper {
    margin-bottom: 15rem;

    @include respond(phone) {
      margin-bottom: 0rem;
    }

    .row {
      margin-bottom: 8rem;

      .project-desc,
      .thumbnail {
        display: block;
      }

      @include respond(phone) {
        margin-bottom: 4rem;
      }
    }

    &__text {
      text-align: left;

      @include respond(phone) {
        margin-bottom: 2.5rem !important;
      }
      @include respond(tab-land) {
        margin-bottom: 4.8rem;
      }

      &-title {
        font-weight: bold;
        margin-bottom: 1.8rem;
        font-size: $mid-font-size;

        @include respond(phone) {
          font-size: 2rem;
        }
      }

      & p > a {
        color: $secondary-color;
      }
    }

    &__image {
      width: 90%;
      margin: 0 auto;

      @include respond(tab-land) {
        width: 100%;
        margin: 0;
      }

      & .thumbnail {
        border: none;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        transition: all 0.2s ease-out;
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
        transition: 0.5s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
          0.5s box-shadow,
          0.5s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);

        @include respond(phone) {
          border: 1px solid $light-grey;
          box-shadow: none;
          margin-bottom: 3.2rem;
        }
      }
    }
  }
}
</style>
