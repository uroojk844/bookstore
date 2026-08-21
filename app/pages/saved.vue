<script setup="ts">
import { books } from "~/composables/use-shortlisted-books";
</script>

<template>
  <BookResult :result="books" :show-title="false" class="py-12" />
</template>
