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
        :alt="book.volumeInfo.title"
        class="border border-border w-full h-75 object-cover object-center hover:scale-110 transition-transform duration-200"
      />
    </figure>

    <small class="text-maroon uppercase line-clamp-1 text-ellipsis">
      {{ book.volumeInfo.categories?.at(0) }}
    </small>

    <p class="line-clamp-1 text-ellipsis">{{ book.volumeInfo.title }}</p>

    <small class="flex items-center text-gray-500 gap-2">
      <span class="text-ellipsis line-clamp-1">
        {{ book.volumeInfo.authors?.join(",") }}
      </span>
      <Icon name="tabler:circle-filled" size="6" class="shrink-0" />
      <span class="whitespace-nowrap">{{ book.volumeInfo.publishedDate }}</span>
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
  grid-template-rows: 316px repeat(3, min-content);
  transform: translateY(32px);
  opacity: 0;
  animation: slide 250ms calc(100ms + (sibling-index() * 150ms)) forwards;
}
</style>
