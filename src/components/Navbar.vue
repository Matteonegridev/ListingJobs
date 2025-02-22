<script setup lang="ts">
const menuLinks = ["Home", "Jobs", "Add Jobs"];
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
          <li
            class="rounded-2xl px-6 py-1.5 text-lg hover:bg-emerald-800 hover:transition-all hover:duration-200 hover:ease-in"
            v-for="links in menuLinks"
            :key="links"
          >
            <a href="">{{ links }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
