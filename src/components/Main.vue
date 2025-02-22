<script setup lang="ts">
import Card from "./Card.vue";
</script>

<template>
  <main class="px-7 md:px-14">
    <div class="mt-10 space-y-4 md:flex md:gap-6 md:space-y-0">
      <Card type="Developers">
        <h1 class="text-3xl font-bold">For Developers</h1>
        <p>Browse our Vue jobs and start your career today</p>
        <button
          class="text-bold mt-4 cursor-pointer rounded-lg bg-black px-4 py-2 font-sans text-sm text-white"
        >
          Browse Jobs
        </button>
      </Card>

      <Card type="Employers">
        <h1 class="text-3xl font-bold">For Employers</h1>
        <p>List your job to find the perfect developer for the role</p>
        <button
          class="text-bold mt-4 cursor-pointer rounded-lg bg-emerald-500 px-4 py-2 font-sans text-sm text-white"
        >
          Add Job
        </button>
      </Card>
    </div>
  </main>
</template>
