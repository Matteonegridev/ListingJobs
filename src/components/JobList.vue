<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  job: Object,
});

const showDescription = ref(false);

const toggleFullDescription = () => {
  showDescription.value = !showDescription.value;
};

//Truncate Description with computed:
const truncateDescription = computed(() => {
  let description = props.job?.description;
  if (!showDescription.value) {
    description = description.substring(0, 90) + "...";
  }
  return description;
});
</script>

<template>
  <div class="flex flex-col">
    <small class="font-mono text-gray-500">{{ job?.type }}</small>
    <h4 class="py-1 text-2xl font-bold">{{ job?.title }}</h4>
    <div class="grow py-4">
      <p class="text-pretty">
        {{ truncateDescription }}
      </p>
      <button
        class="cursor-pointer self-start text-emerald-500 md:hover:text-emerald-700"
        @click="toggleFullDescription"
      >
        {{ showDescription ? "Show Less" : "Show More" }}
      </button>
    </div>
    <p class="border-b border-gray-300 pb-8 font-semibold text-emerald-500">
      {{ job?.salary }} / year
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
        {{ job?.location }}
      </p>
    </div>

    <RouterLink
      class="text-md mt-auto cursor-pointer rounded-md bg-emerald-500 px-6 py-2 font-bold text-white"
      :to="`/jobs/${job?.id}`"
    >
      Read More
    </RouterLink>
  </div>
</template>
