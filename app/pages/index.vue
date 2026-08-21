<script setup lang="ts">
import type { ISearchResult } from "~/interfaces/books";

const query = ref<string>("");
const { pending, data, execute } = useFetch<ISearchResult>("/api/search", {
  query: {
    q: computed(() => query.value),
  },
  key: query.value,
  immediate: false,
  watch: false,
});

async function handleSearch(q: string) {
  query.value = q;
  await execute();
}
</script>

<template>
  <DiscoverCatalog @search="handleSearch" />
  <Loading v-if="pending" />
  <BookResult v-else :results="data?.items" />
</template>
