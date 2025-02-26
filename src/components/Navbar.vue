<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const menuLinks = [
  { id: "/", name: "Home" },
  { id: "/jobs", name: "Jobs" },
  { id: "/jobs/add", name: "Add Job" },
];

const showMenu = ref(false);
const route = useRoute();

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

watch(route, () => {
  showMenu.value = false;
});
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 z-50 bg-emerald-700 py-4.5 drop-shadow-md sm:py-4"
  >
    <div class="m-auto flex w-11/12 items-center justify-between">
      <h1 class="font-mono font-bold text-white max-sm:text-3xl sm:text-4xl">
        JobListing
      </h1>
      <nav class="max-sm:hidden">
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

      <button class="ml-auto cursor-pointer sm:hidden" @click="toggleMenu">
        <Transition name="rotate">
          <div class="space-y-2">
            <span
              :class="{
                'translate-y-2.5 rotate-45': showMenu,
              }"
              class="block h-[2px] w-8 bg-white transition-all duration-100 ease-in"
            ></span>
            <span
              :class="{
                'opacity-0': showMenu,
              }"
              class="block h-[2px] w-8 bg-white transition-all duration-100 ease-in"
            ></span>
            <span
              :class="{
                '-translate-y-2.5 -rotate-45': showMenu,
              }"
              class="block h-[2px] w-8 bg-white transition-all duration-100 ease-in"
            ></span>
          </div>
        </Transition>
      </button>
    </div>
    <Transition>
      <nav
        v-if="showMenu"
        class="absolute top-[100%] ml-0 w-full bg-emerald-800 p-10 shadow-lg sm:hidden"
        :class="showMenu ? '' : 'hidden'"
      >
        <ul
          class="m-auto flex flex-col items-center justify-center gap-10 font-sans font-semibold text-white"
        >
          <li
            class="w-full px-3 text-center text-2xl"
            v-for="links in menuLinks"
            :key="links.name"
          >
            <routerLink
              exact-active-class="bg-emerald-800"
              :to="`${links.id}`"
              class="rounded-2xl px-6 py-1.5 hover:bg-emerald-800 hover:transition-all hover:duration-200 hover:ease-in max-sm:block max-sm:w-full"
            >
              {{ links.name }}
            </routerLink>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>
