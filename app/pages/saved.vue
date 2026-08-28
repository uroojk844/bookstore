<script setup="ts">
const { getBooks } = useSavedBooks();
</script>

<template>
  <BookResult :results="getBooks" :show-title="false" class="py-12">
    <div class="grid justify-items-center gap-4 h-full content-center">
      <Icon name="uil:books" size="48" class="text-maroon" />
      <p class="text-lg text-subtitle">Save books to see here.</p>
    </div>
  </BookResult>
</template>
