<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
    <b-navbar-brand href="/" @click="notBlog">Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item
          href="#work"
          @click="scrollIntoView"
          v-if="!this.$store.state.isBlog"
          >Work</b-nav-item
        >
        <b-nav-item
          href="#about"
          @click="scrollIntoView"
          v-if="!this.$store.state.isBlog"
          >About</b-nav-item
        >
        <b-nav-item
          href="#skills"
          @click="scrollIntoView"
          v-if="!this.$store.state.isBlog"
          >Skills</b-nav-item
        >
        <b-nav-item
          href="#projects"
          @click="scrollIntoView"
          v-if="!this.$store.state.isBlog"
          >Projects</b-nav-item
        >
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <li class="nav-item">
          <router-link
            tag="a"
            class="nav-link"
            to="/blog"
            @click.native="removeUnnecessaryLinks"
            >Blog</router-link
          >
        </li>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
    removeUnnecessaryLinks() {
      this.$store.state.isBlog = true;
    },
    notBlog() {
      this.$store.state.isBlog = false;
    },
  },
  mounted() {},
  data() {
    return {};
  },
};
</script>
