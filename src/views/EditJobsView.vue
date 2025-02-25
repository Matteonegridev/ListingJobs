<script setup lang="ts">
import axios from "axios";
import { reactive, onMounted } from "vue";
import { router } from "../router/index.ts";
import { useToast } from "vue-toastification";
import { useRoute } from "vue-router";

const toast = useToast();
const route = useRoute();

const routePath = route.params.view;

const data = reactive({
  title: "",
  type: "Full-Time",
  location: "",
  description: "",
  salary: "Under $50K",
  company: {
    name: "",
    description: "",
    contactEmail: "",
    contactPhone: "",
  },
});

const state = reactive({
  job: {} as typeof data,
  isLoading: true,
});

// Let's create a call so the inputs will be populated by data. The data that will populate the page must be the one coming from the file we click "edit" from: that's why the call has the routePath: it will match the id with the path.
onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs/${routePath}`);
    state.job = response.data;
    //populate the inputs with the call we just made:
    data.title = state.job?.title;
    data.type = state.job?.type;
    data.location = state.job?.location;
    data.description = state.job?.description;
    data.salary = state.job?.salary;
    data.company.name = state.job?.company.name;
    data.company.description = state.job?.company.description;
    data.company.contactEmail = state.job?.company.contactEmail;
    data.company.contactPhone = state.job?.company.contactPhone;
  } catch (error) {
    throw new Error("Error");
  } finally {
    state.isLoading = false;
  }
});

const submitData = async () => {
  const payload = {
    ...data,
  };

  try {
    const response = await axios.post("/api/jobs", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Response data:", response.data);
    router.push(`/jobs/${response.data.id}`);
    toast.success("Job Added Successfully");
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    toast.error("Job Was Not Added");
  }
};
</script>

<template>
  <section class="bg-green-50">
    <div class="m-auto max-w-2xl py-24">
      <div class="m-4 mb-4 rounded-md bg-white px-6 py-8 shadow-md md:m-0">
        <form @submit.prevent="submitData">
          <h2 class="mb-6 text-center text-3xl font-semibold">Post a Job</h2>
          <div class="mb-4">
            <label for="type" class="mb-2 block font-bold text-gray-700"
              >Job Type</label
            >
            <select
              name="type"
              id="type"
              v-model="data.type"
              class="w-full rounded border border-emerald-900 px-3 py-2"
              required
            >
              <option value="Full-Time" default>Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="title" class="mb-2 block font-bold text-gray-700"
              >Job Position</label
            >
            <input
              type="text"
              id="title"
              name="title"
              required
              v-model="data.title"
              class="w-full rounded border border-emerald-900 px-3 py-2"
            />
          </div>
          <div class="mb-4">
            <label for="location" class="mb-2 block font-bold text-gray-700"
              >Job Location</label
            >
            <input
              type="text"
              id="location"
              name="location"
              required
              v-model="data.location"
              class="w-full rounded border border-emerald-900 px-3 py-2"
            />
          </div>
          <div class="mb-4">
            <label for="description" class="mb-2 block font-bold text-gray-700"
              >Description:</label
            >
            <input
              type="text"
              id="description"
              name="description"
              required
              v-model="data.description"
              class="w-full rounded border border-emerald-900 px-3 py-2"
            />
          </div>
          <div class="mb-4">
            <label for="type" class="mb-2 block font-bold text-gray-700"
              >Salary</label
            >
            <select
              name="salary"
              id="salary"
              v-model="data.salary"
              class="w-full rounded border border-emerald-900 px-3 py-2"
              required
            >
              <option value="Under $50K">Under $50K</option>
              <option value="$50K - $60K">$50 - $60K</option>
              <option value="$60K - $70K">$60 - $70K</option>
              <option value="$70K - $80K">$70 - $80K</option>
              <option value="$80K - $90K">$80 - $90K</option>
              <option value="$90K - $100K">$90 - $100K</option>
              <option value="$100K - $125K">$100 - $125K</option>
              <option value="$125K - $150K">$125 - $150K</option>
              <option value="$150K - $175K">$150 - $175K</option>
              <option value="$175K - $200K">$175 - $200K</option>
              <option value="Over $200K">Over $200K</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="companyName" class="mb-2 block font-bold text-gray-700"
              >Company Name:</label
            >
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              v-model="data.company.name"
              class="w-full rounded border border-emerald-900 px-3 py-2"
            />
          </div>
          <div class="mb-4">
            <label
              for="companyDescription"
              class="mb-2 block font-bold text-gray-700"
              >Company Description:</label
            >
            <input
              type="text"
              id="companyDescription"
              name="companyDescription"
              required
              v-model="data.company.description"
              class="w-full rounded border border-emerald-900 px-3 py-2"
            />
          </div>
          <div class="mb-4">
            <label for="companyEmail" class="mb-2 block font-bold text-gray-700"
              >Contact Email:</label
            >
            <input
              type="text"
              id="companyEmail"
              name="companyEmail"
              required
              v-model="data.company.contactEmail"
              class="w-full rounded border border-emerald-900 px-3 py-2"
            />
          </div>
          <div class="mb-4">
            <label for="companyPhone" class="mb-2 block font-bold text-gray-700"
              >Contact Phone:</label
            >
            <input
              type="text"
              id="companyPhone"
              name="companyPhone"
              required
              v-model="data.company.contactPhone"
              class="w-full rounded border border-emerald-900 px-3 py-2"
            />
          </div>
          <button
            type="submit"
            class="cursor-pointer rounded-lg bg-emerald-500 px-8 py-2 font-bold text-white"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
