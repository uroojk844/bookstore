<script setup lang="ts">
import type { IBook } from "~/interfaces/books";
const { results = [], showTitle = true } = defineProps<{
  results?: IBook[];
  showTitle?: boolean;
}>();

const searchHints = ["Harry potter", "Steave Jobs", "Prophet Muhammad"];
const currentHint = ref(0);

onMounted(() => {
  setInterval(() => {
    currentHint.value = (currentHint.value + 1) % searchHints.length;
  }, 5000);
});
</script>

<template>
  <section class="app-container mb-8">
    <div
      v-if="showTitle"
      class="flex mb-6 w-full font-garamond text-2xl font-semibold h-12 border-b-2 border-border"
    >
      Search Results
    </div>

    <section
      v-if="results.length"
      class="grid gap-8 sm:grid-cols-2 md:grid-cols-4"
    >
      <BookCard v-for="book in results" :book :key="book.id" />
    </section>
    <div v-else class="text-center text-subtitle py-4">
      Search <q>{{ searchHints[currentHint] }}</q>
    </div>
  </section>
</template>
