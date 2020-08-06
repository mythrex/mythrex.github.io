<template>
  <section id="projects">
    <b-container>
      <b-row>
        <h1>Projects</h1>
      </b-row>
      <b-row>
        <div id="projects-container">
          <ProjectCard
            v-for="project in projects"
            :key="project.text"
            :title="project.title"
            :text="project.text"
            :githubLink="project.githubLink"
            :colabLink="project.colabLink"
            :demoLink="project.demoLink"
            :mediaType="project.mediaType"
            :mediaLink="project.mediaLink"
          />
        </div>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import ProjectCard from "@/components/project_card";
import projects from "@/data/projects.js";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects,
    };
  },
};
</script>
