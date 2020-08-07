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
    Card
  },
  data() {
    return {
      items: [
        {
          title: "Deep Learning",
          icon: "fas fa-robot",
          text:
            "I love deep learning and math behind it. I love making projects with deeplearning. I have done many projects involving deeplearning. One of which was at ISRO for automatic model generation using DARTS."
        },
        {
          title: "Visualization",
          icon: "fas fa-chart-pie",
          text:
            "I can make visualizations for explaining intuition behind the concepts. I love explaining hard things in simplest manner possible."
        },
        {
          title: "Javascript",
          icon: "fab fa-js-square",
          text:
            "I have been working with JS for quite a while. I use JS to showcase the research I do."
        }
      ]
    };
  }
};
</script>
