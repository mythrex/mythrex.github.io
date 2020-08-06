<template>
  <div id="blog">
    <b-container>
      <b-row>
        <b-col sm="12" md="4">
          <b-card> </b-card>
        </b-col>
        <b-col sm="12" md="8">
          <h1>My Blogs</h1>
          <hr />

          <BlogCard v-for="article in blog" :key="article.title" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BlogCard from "@/components/blog_card";
import blogData from "@/data/blog";

export default {
  components: { BlogCard },
  data() {
    blogData;
  },
};
</script>
