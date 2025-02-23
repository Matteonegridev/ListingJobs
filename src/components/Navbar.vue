<script setup lang="ts">
const menuLinks = [
  { id: "/", name: "Home" },
  { id: "/jobs", name: "Jobs" },
  { id: "/jobs/add", name: "Add Job" },
];
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 z-50 bg-emerald-700 py-4.5 drop-shadow-md sm:py-4"
  >
    <div class="m-auto flex w-11/12 items-center">
      <h1 class="font-mono font-bold text-white max-sm:text-3xl sm:text-4xl">
        JobListing
      </h1>
      <nav class="ml-auto max-sm:hidden">
        <ul class="flex gap-10 font-sans font-semibold text-white">
          <li class="text-lg" v-for="links in menuLinks" :key="links.name">
            <routerLink
              exact-active-class="bg-emerald-800"
              :to="`${links.id}`"
              class="rounded-2xl px-6 py-1.5 hover:bg-emerald-800 hover:transition-all hover:duration-200 hover:ease-in"
            >
              {{ links.name }}
            </routerLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
