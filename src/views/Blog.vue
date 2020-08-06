<template>
  <div id="blog">
    <Navbar />
    <b-container>
      <b-row>
        <b-col sm="12" md="4" class="filter">
          <b-card title="Filters">
            <b-card-text>
              Click to remove.
            </b-card-text>
            <b-badge
              pill
              v-for="(tag, index) in filterArray"
              :key="index"
              :class="tag"
              @click="removeFromFilterArray"
              >{{ tag }}</b-badge
            >
          </b-card>
          <b-card>
            <b-card-text>
              Click to filter
            </b-card-text>
            <b-badge
              pill
              v-for="(tag, index) in tags"
              :key="index"
              :class="tag"
              @click="addToFilterArray"
              >{{ tag }}</b-badge
            >
          </b-card>
        </b-col>
        <b-col sm="12" md="8">
          <h1>My Blogs</h1>
          <hr />

          <BlogCard
            v-for="(article, index) in filterArticles"
            :key="index"
            :date="article.date"
            :read="article.read"
            :title="article.title"
            :text="article.text"
            :tags="article.tags"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import BlogCard from "@/components/blog_card";
import blogData from "@/data/blog";
export default {
  components: { BlogCard, Navbar },
  data() {
    return {
      blogData,
      tags: [],
      filterArray: [],
    };
  },
  methods: {
    getTags() {
      let tags = [];
      this.blogData.forEach((article) => {
        article.tags.forEach((tag) => {
          if (!tags.includes(tag)) {
            tags.push(tag);
          }
        });
      });
      return tags;
    },
    addToFilterArray(evt) {
      const text = evt.target.textContent;
      const index = this.tags.indexOf(text);
      if (index > -1) {
        this.tags.splice(index, 1);
        this.filterArray.push(text);
      }
    },
    removeFromFilterArray(evt) {
      evt.preventDefault();
      const text = evt.target.textContent;
      const index = this.filterArray.indexOf(text);
      if (index > -1) {
        this.filterArray.splice(index, 1);
        this.tags.push(text);
      }
    },
  },
  computed: {
    filterArticles() {
      let res;
      if (this.filterArray.length) {
        let filterArray = this.filterArray;
        res = this.blogData.filter(function(el) {
          return el.tags.some(function(r) {
            return filterArray.indexOf(r) >= 0;
          });
        });
      } else {
        res = this.blogData;
      }
      // console.log(res);
      return res;
    },
  },
  mounted() {
    this.tags = this.getTags();
  },
};
</script>
