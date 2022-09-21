<template>
  <footer class="footer navbar-static-bottom">
    <div class="container">
      <a rel="noreferrer" href="#top" class="back-to-top">
        <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
      </a>
      <div class="social-links">
        <a rel="noreferrer" href="#!" target="_blank">
          <i class="fa fa-twitter fa-inverse"></i>
        </a>
        <a rel="noreferrer" href="#!" target="_blank">
          <i class="fa fa-linkedin fa-inverse"></i>
        </a>
        <a rel="noreferrer" href="#!" target="_blank">
          <i class="fa fa-github fa-inverse"></i>
        </a>
      </div>

      <hr />

      <!-- Notice: if you want to give me some credit, it will be huge for me! if not, put your data on it -->
      <p class="footer__text">
        © 2021 - Template developed by
        <a rel="noreferrer" href="https://github.com/cobidev" target="_blank"
          >Jacobo Martínez</a
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'NuxtProfileFooter',
}
</script>

<style lang="scss">
.footer {
  background-color: $dark-grey;
  color: $white-color;
  padding: 4.8rem 0;

  @include respond(phone) {
    border: 0px;
  }

  &__text {
    color: darken($white-color, 50%);
    font-size: 1.3rem;

    a {
      color: darken($white-color, 50%);
      font-size: 1.3rem;
      transition: all 0.4s;
      display: inline-block;
      background-color: $dark-grey;

      &:hover,
      &:active {
        color: $primary-color;
        -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
        box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
      }
    }
  }

  & hr {
    margin: 1rem auto;
    border: 0;
    width: 50%;
    border-top: 2px solid grey;
  }
}

.social-links {
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: $white-color;
    font-size: 3rem;
    width: 5rem;
    height: 5rem;
    margin: $default-font-size $default-font-size;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-2px);
    }
  }
}

.back-to-top i {
  color: $white-color;
  margin: 1rem 0 $default-font-size;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-2px);
  }
}
</style>
