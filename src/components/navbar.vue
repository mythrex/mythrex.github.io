<template>
  <div>
    <b-navbar type="dark" variant="dark" fixed="top">
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="#work" @click="scrollIntoView">Work</b-nav-item>
        <b-nav-item href="#work" @click="scrollIntoView">Work</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/blog">Blog</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    // Convenience method to scroll a heading into view.
    // Not required for scrollspy to work
    scrollIntoView(evt) {
      evt.preventDefault();
      const href = evt.target.getAttribute("href");
      const el = href ? document.querySelector(href) : null;
      if (el) {
        el.scrollIntoView(el.offsetTop);
        // this.$refs.content.scrollTop = el.offsetTop;
      }
    },
  },
  mounted() {},
  data() {
    return {};
  },
};
</script>
