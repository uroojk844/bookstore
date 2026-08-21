<script setup lang="ts">
import type { IBookCard } from "~/interfaces/books";

defineProps<{
  book: IBookCard;
}>();
</script>

<template>
  <NuxtLink :href="'/book/' + book.id" class="grid">
    <img
      :src="book.volumeInfo.imageLinks.thumbnail"
      alt=""
      class="border border-border w-full h-75 object-cover object-center mb-4"
    />
    <small class="text-maroon uppercase">{{
      book.volumeInfo.categories
    }}</small>
    <p>{{ book.volumeInfo.title }}</p>
    <small class="flex items-center text-gray-500 gap-1">
      <span>{{ book.volumeInfo.authors }}</span>
      <Icon name="tabler:circle-filled" size="6" />
      <span>{{ book.volumeInfo.publishedDate }}</span>
    </small>
  </NuxtLink>
</template>
