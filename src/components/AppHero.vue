<!-- AppHero (Header) component -->

<template>
  <!-- Display heading, image, and game information -->
  <h1 class="sr-only">Peek-a-Vue</h1>
  <img
    srcset="/images/peek-a-vue-title@2x.png 2x, /images/peek-a-vue-title.png 1x"
    src="/images/peek-a-vue-title.png"
    alt="Peek-a-Vue"
    class="title"
  />
  <section :class="$style.description">
    <p>Welcome to Peek-a-Vue, a Halloween themed card matching game!</p>
    <p :class="$style['powered-wrapper']">
      Powered by
      <a :class="$style['powered-link']" href="https://v3.vuejs.org/">
        <img
          :class="$style['powered-logo']"
          src="/images/vue-logo.svg"
          alt="Vue.js logo"
        />
        Vue.js 3
      </a>
      <span> & </span>
<<<<<<< HEAD
      <a :class="$style['powered-link']" href="https://www.netlify.com/">
=======
      <a
        :class="$style['powered-link']"
        href="https://www.netlify.com/"
      >
>>>>>>> 0b11a33931fb44319564670bb893f885eec1a868
        <img
          :class="$style['powered-logo']"
          src="/images/netliheart.svg"
          alt="Netlify Heart Logo"
        />
        Netlify
      </a>
    </p>
  </section>
</template>

<!-- Add Styling -->

<style module>
.description {
  font-family: "Titillium Web", sans-serif;
}

.description p {
  margin: 0;
  font-size: 1rem;
}

.description p:last-child {
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 0.9rem;
}

.powered-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
}

.powered-link {
  padding: 0 5px;
}

.powered-link:first-child,
.powered-link:last-child {
  padding-right: 0;
}

.powered-logo {
  width: 18px;
}

.title {
  padding-bottom: 30px;
}
</style>
