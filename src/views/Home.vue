<template>
  <div id="home">
    <Navbar />

    <HomeSection />

    <WorkSection />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import HomeSection from "@/sections/home-section";
import WorkSection from "@/sections/work";

export default {
  components: {
    Navbar,
    HomeSection,
    WorkSection,
  },
};
</script>
