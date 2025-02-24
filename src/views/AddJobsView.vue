<script setup lang="ts">
import axios from "axios";
import { reactive } from "vue";
import { router } from "../router/index.ts";

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

    return response.data;
  } catch (error) {
    console.log("Error:", error);
  }
};
</script>

<template>
  <h1 class="mt-33">hellooo</h1>
  <main>
    <form @submit.prevent="submitData">
      <div>
        <select name="type" id="type" v-model="data.type" required>
          <option value="Full-Time" default>Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Remote">Remote</option>
          <option value="Internship">Internship</option>
        </select>
      </div>
      <div>
        <label for="title">Job Position</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          v-model="data.title"
        />
      </div>
      <div>
        <label for="location">Job Location</label>
        <input
          type="text"
          id="location"
          name="location"
          required
          v-model="data.location"
        />
      </div>
      <div>
        <label for="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          required
          v-model="data.description"
        />
      </div>
      <div>
        <select name="salary" id="salary" v-model="data.salary" required>
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
      <div>
        <label for="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          required
          v-model="data.company.name"
        />
      </div>
      <div>
        <label for="companyDescription">Company Description:</label>
        <input
          type="text"
          id="companyDescription"
          name="companyDescription"
          required
          v-model="data.company.description"
        />
      </div>
      <div>
        <label for="companyEmail">Contact Email:</label>
        <input
          type="text"
          id="companyEmail"
          name="companyEmail"
          required
          v-model="data.company.contactEmail"
        />
      </div>
      <div>
        <label for="companyPhone">Contact Phone:</label>
        <input
          type="text"
          id="companyPhone"
          name="companyPhone"
          required
          v-model="data.company.contactPhone"
        />
      </div>
      <button type="submit">Post Job</button>
    </form>
  </main>
</template>
