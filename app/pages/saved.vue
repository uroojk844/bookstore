<script setup="ts">
const query = ref("");
const { pending, data, execute } = useFetch("/", {
  query: computed(() => query.value),
});
</script>

<template>
  <DiscoverCatalog @search="(q) => (query = q)" />
  <BookResult :result="data" />
</template>
