<template>
  <div id="home">
    <Navbar />

    <HomeSection />

    <WorkSection />

    <AboutSection />

    <SkillsSection />

    <ProjectsSection />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import HomeSection from "@/sections/home-section";
import WorkSection from "@/sections/work";
import AboutSection from "@/sections/about";
import SkillsSection from "@/sections/skills";
import ProjectsSection from "@/sections/projects";

export default {
  components: {
    Navbar,
    HomeSection,
    WorkSection,
    AboutSection,
    SkillsSection,
    ProjectsSection,
  },
};
</script>
