<template>
  <section id="work">
    <b-container>
      <b-row align="center">
        <h1>What I do?</h1>
      </b-row>
      <b-row id="work-container">
        <b-col sm="12" md="4" v-for="item in items" :key="item.text">
          <Card :title="item.title" :text="item.text" :icon="item.icon" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Card from "@/components/work_card";

export default {
  components: {
    Card,
  },
  data() {
    return {
      items: [
        {
          title: "Deep Learning",
          icon: "fas fa-robot",
          text: "lorem ipsum dolsaor idor",
        },
        {
          title: "Visualization",
          icon: "fas fa-chart-pie",
          text: "lorem ipsum doldsor idor",
        },
        {
          title: "Javascript",
          icon: "fab fa-js-square",
          text: "lorem ipsum doloasr idor",
        },
      ],
    };
  },
};
</script>
