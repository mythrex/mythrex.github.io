<template>
  <section>
    <b-container fluid>
      <b-row id="row-title">
        <b-col md="7" id="title">
          <div class="title-container">
            <p class="sub-heading">Hi, I am</p>
            <p class="heading">{{details.name}}</p>
            <p
              class="sub-heading"
              style="text-transform: uppercase;"
            >Web Developer and Data Scientist</p>

            <a href="#" class="btn btn-primary">
              Download Resume
              <span class="fa fa-download"></span>
            </a>
            <div class="container-fluid" id="link-container">
              <a href="#" target="_vblank" class="fa fa-github"></a>
              <a href="#" target="_vblank" class="fa fa-linkedin"></a>
            </div>
          </div>
        </b-col>

        <b-col md="5" class="d-none d-md-block" id="side-shape"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import details from "@/data/author_details.js";

export default {
  data() {
    return {
      details
    };
  }
};
</script>