<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Main from "./components/Main.vue";
import JobsListing from "./components/JobsListing.vue";
</script>

<template>
  <div>
    <Navbar />
    <Hero />
    <Main />
    <JobsListing :limit="4" />
  </div>
</template>
