<template>
  <a href="#" class="blog_card card">
    <div class="meta-data">
      <span>{{ date }}</span>
      <span>{{ read }}</span>
    </div>
    <div class="card-body">
      <h2>{{ title }}</h2>
      <p>
        {{ text }}
      </p>
    </div>
    <div class="tags">
      <b-badge v-for="(tag, index) in tags" :key="index" pill :class="tag"
        >tag</b-badge
      >
    </div>
  </a>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    date: String,
    read: String,
    tags: Array,
  },
  data() {
    return {};
  },
};
</script>
