<template>
  <div class="work-card">
    <b-card :title="title">
      <span :class="getClass(icon)"> </span>
      <b-card-text>
        {{ text }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    title: String,
    icon: String,
  },
  methods: {
    getClass(icon) {
      return `card-icon ${icon}`;
    },
  },
};
</script>
