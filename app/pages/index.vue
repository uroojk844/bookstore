<script setup lang="ts">
import type { ISearchResult } from "~/interfaces/books";

const query = ref<string>("");

const { pending, data, execute } = useFetch<ISearchResult>("/api/search", {
  query: {
    q: computed(() => query.value),
  },
  key: computed(() => "search-result-" + query.value),
  immediate: false,
  watch: false,
  getCachedData(key, nuxtApp) {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
  },
});

async function handleSearch(q: string) {
  query.value = q;
  await execute();
}
</script>

<template>
  <main class="grid place-items-center">
    <DiscoverCatalog
      @search="handleSearch"
      :class="{ '-mt-20': !data?.items.length }"
    />
    <Loading v-if="pending" />
    <BookResult v-else-if="data?.items.length" :results="data?.items" />
  </main>
</template>
