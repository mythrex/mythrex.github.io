<template>
  <div class="project-card card col col-sm-12">
    <b-row>
      <b-col sm="12" md="8">
        <div class="body">
          <h3>{{ title }}</h3>
          <p>{{ text }}</p>
          <div class="links">
            <a target="_vblank" :href="demoLink" v-if="demoLink" class="btn btn-demo">Demo</a>
            <a target="_vblank" :href="colabLink" v-if="colabLink" class="btn btn-colab">
              <span class="fab fa-python"></span> Colab notebook
            </a>
            <a target="_vblank" :href="githubLink" v-if="githubLink" class="btn btn-github">
              <span class="fab fa-github"></span> Github
            </a>
          </div>
        </div>
      </b-col>
      <b-col sm="12" md="4">
        <b-img
          v-if="mediaType.toLowerCase() === 'image'"
          :src="mediaLink"
          alt="img"
          class="card-media"
        ></b-img>
        <div class="card-media" v-html="mediaLink" v-if="mediaType.toLowerCase() === 'video'"></div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    title: String,
    githubLink: String,
    colabLink: String,
    demoLink: String,
    mediaType: String,
    mediaLink: String
  }
};
</script>
