script
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import BackButton from "../components/BackButton.vue";
import { router } from "../router/index.ts";
import { useToast } from "vue-toastification";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const jobs = ref<any[]>([]);
const toast = useToast();
const pathRoute = route.params.view;

onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs`);
    if (Array.isArray(response.data)) {
      jobs.value = response.data;
    }
  } catch (error) {
    throw new Error("Error");
  }
});

//Find the id that matches with the route path to display the job card:
const singleJob = computed(() => {
  return jobs.value.find((job) => job.id === pathRoute);
});

// To remove the data we must call a promise that will actually delete the data from the backend. It's not only the matching id because we are not talking about an array or object we have stored into a variable.
const removeJob = async () => {
  if (!singleJob.value) return;

  try {
    const confirm = window.confirm("Are you sure you want to delete this job?");
    if (confirm) {
      const deletion = await axios.delete(`/api/jobs/${pathRoute}`);
      jobs.value = jobs.value.filter(
        (entry) => entry.id !== singleJob.value.id,
      );
      router.push("/jobs");
      toast.success("Job Deleted");
      return deletion.data;
    } else {
      return;
    }
  } catch (error) {
    toast.error("Job Not Deleted");
    throw new Error("Error deleting job");
  }
};
</script>
<template>
  <div class="px-4 pt-22 pb-4 text-emerald-500 md:px-14"><BackButton /></div>
  <main class="mobile-grid desktop-grid bg-blue-50 px-2 py-6 md:px-14">
    <article class="item-a rounded-lg bg-white px-4 py-8 shadow-md">
      <div class="flex flex-col gap-2">
        <small class="font-mono text-gray-500">{{ singleJob?.type }}</small>
        <h4 class="py-1 text-2xl font-bold">{{ singleJob?.title }}</h4>
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
          <p class="font-semibold text-red-700">
            {{ singleJob?.location }}
          </p>
        </div>
      </div>
    </article>
    <article class="item-b rounded-lg bg-white px-4 pt-4 pb-10 shadow-md">
      <div class="flex flex-col">
        <div class="mb-6">
          <h6 class="mb-6 text-xl font-bold text-emerald-600">
            Job Description
          </h6>
          <p class="text-pretty">{{ singleJob?.description }}</p>
        </div>
        <div>
          <h6 class="mb-1 text-xl font-bold text-emerald-600">Salary</h6>
          <p class="font-semibold">{{ singleJob?.salary }}</p>
        </div>
      </div>
    </article>
    <article class="item-c rounded-lg bg-white p-4 shadow-md">
      <div class="flex flex-col">
        <div class="border-b border-gray-300 pb-4">
          <h3 class="text-xl font-black">Company Info</h3>
          <p class="mt-6 text-2xl font-semibold">
            {{ singleJob?.company.name }}
          </p>
          <p class="mt-1 text-balance">{{ singleJob?.company.description }}</p>
        </div>
        <div class="py-4">
          <h5 class="font mb-1 text-xl">Contact Email:</h5>
          <p class="rounded-lg bg-emerald-400 px-4 py-2 font-bold">
            {{ singleJob?.company.contactEmail }}
          </p>
          <h5 class="font mt-3 mb-1 text-xl">Contact Phone:</h5>
          <p class="rounded-lg bg-emerald-400 px-4 py-2 font-bold">
            {{ singleJob?.company.contactPhone }}
          </p>
        </div>
      </div>
    </article>
    <article class="item-d rounded-lg bg-white p-4 shadow-md">
      <div class="flex flex-col gap-2 py-2">
        <h3 class="mb-4 text-xl font-bold">Manage Job</h3>
        <RouterLink
          :to="`/jobs/edit/${pathRoute}`"
          class="cursor-pointer rounded-3xl bg-emerald-500 py-2 text-center font-bold text-white"
        >
          Edit Job
        </RouterLink>
        <button
          @click="removeJob"
          class="cursor-pointer rounded-3xl bg-red-500 py-2 font-bold text-white"
        >
          Delete Job
        </button>
      </div>
    </article>
  </main>
</template>
