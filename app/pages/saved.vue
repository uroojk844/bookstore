<script setup="ts">
const { getBooks } = useSavedBooks();
</script>

<template>
  <BookResult :results="getBooks" :show-title="false" class="py-12" />
</template>
