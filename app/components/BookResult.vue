<script setup lang="ts">
import type { IBook } from "~/interfaces/books";
const { results = [], showTitle = true } = defineProps<{
  results?: IBook[];
  showTitle?: boolean;
}>();
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
    <div v-else class="text-center text-gray-600 py-12">
      Nothing to show here.
    </div>
  </section>
</template>
