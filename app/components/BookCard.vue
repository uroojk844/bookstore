<script setup lang="ts">
import type { IBookCard } from "~/interfaces/books";

defineProps<{
  book: IBookCard;
}>();
</script>

<template>
  <NuxtLink :href="'/book/' + book.id" class="grid book">
    <figure class="w-full h-75 overflow-hidden">
      <img
        :src="book.volumeInfo.imageLinks.thumbnail"
        alt=""
        class="border border-border w-full h-full object-cover object-center mb-4 hover:scale-110 transition-transform duration-200"
      />
    </figure>
    <small class="text-maroon uppercase">{{
      book.volumeInfo.categories?.at(0)
    }}</small>
    <p>{{ book.volumeInfo.title }}</p>
    <small class="flex items-center text-gray-500 gap-1">
      <span>{{ book.volumeInfo.authors?.join(",") }}</span>
      <Icon name="tabler:circle-filled" size="6" />
      <span>{{ book.volumeInfo.publishedDate }}</span>
    </small>
  </NuxtLink>
</template>

<style>
@keyframes slide {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.book {
  transform: translateY(32px);
  opacity: 0;
  animation: slide 250ms calc(100ms + (sibling-index() * 150ms)) forwards;
}
</style>
