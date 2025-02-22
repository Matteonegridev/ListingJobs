<script setup lang="ts">
defineProps<{
  type: "Developers" | "Employers";
}>();
</script>

<template>
  <article
    class="mx-auto flex-grow rounded-lg px-4 py-8 shadow-lg md:px-6 md:py-10"
    :class="{
      'bg-gray-200 text-black': type === 'Developers',
      'bg-emerald-200 text-black': type === 'Employers',
    }"
  >
    <slot></slot>
  </article>
</template>
