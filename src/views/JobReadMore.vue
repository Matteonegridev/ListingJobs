<!-- TODO: creare le schede personalizzate utilizzando i dati del json, mentre la sidebar e bottoni rimangono uguali-->

<script setup lang="ts">
import { computed, ref } from "vue";
import jobsData from "../jobs.json";
import { useRoute } from "vue-router";

const router = useRoute();
const jobs = ref(jobsData.jobs);

const singleJob = computed(() => {
  const pathRoute = router.params.view;
  return jobs.value.find((job) => job.id === pathRoute);
});
</script>
<template>
  <h1 class="mt-16 ml-4">{{ $route.params.view }}</h1>
  <article class="max-w-[500px] p-4">
    <div class="flex flex-col rounded-lg bg-white px-2 py-6 shadow-md">
      <small class="font-mono text-gray-500">{{ singleJob?.type }}</small>
      <h4 class="py-1 text-2xl font-bold">{{ singleJob?.title }}</h4>
      <div class="grow py-4">
        <p class="text-pretty">
          {{ singleJob?.description }}
        </p>
      </div>
      <p class="border-b border-gray-300 pb-8 font-semibold text-emerald-500">
        {{ singleJob?.salary }} / year
      </p>
      <div class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          width="15"
          height="15"
          fill="var(--color-red-700)"
        >
          <path
            d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480l0-162.9c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9L192 480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
          />
        </svg>

        <p class="py-4 font-semibold text-red-700">
          {{ singleJob?.location }}
        </p>
      </div>
    </div>
  </article>
</template>
