<script setup lang="ts">
import { ref, defineProps } from "vue";
import jobsData from "../jobs.json";
import JobList from "./JobList.vue";

defineProps<{ limit: number }>();

const jobs = ref(jobsData.jobs);
const limit = ref(4);

const loadJobs = () => {
  if (limit.value >= jobs.value.length) {
    return;
  } else {
    limit.value = limit.value + 4;
  }
};
</script>

<template>
  <main class="mt-6 bg-blue-50 px-3 pb-6 md:px-14">
    <h1 class="py-8 text-center text-4xl font-black text-emerald-500 md:p-16">
      Browse Jobs
    </h1>
    <article
      class="grid gap-4 md:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]"
    >
      <JobList
        v-for="job in jobs.slice(0, limit)"
        :key="job.id"
        :job="job"
        class="rounded-lg bg-white px-2 py-6 shadow-md"
      />
    </article>
    <div class="grid place-content-center py-6">
      <button
        @click="loadJobs"
        class="text-md cursor-pointer rounded-md bg-emerald-500 px-6 py-2 font-bold text-white"
      >
        Load More Jobs
      </button>
    </div>
  </main>
</template>
