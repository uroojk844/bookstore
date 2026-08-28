<script setup lang="ts">
import type { IBook } from "~/interfaces/books";

const route = useRoute();
const id = computed(() => route.params.id as string);

const { shortlist, checkSaved, remove } = useSavedBooks();
const isSaved = computed(() => checkSaved(id.value));

const { pending, data: book } = useFetch<IBook>(() => "/api/book/" + id.value, {
  key: computed(() => "book-" + id.value),
  getCachedData(key, nuxtApp) {
    return (
      nuxtApp.payload.data[key] || nuxtApp.static.data[key] || isSaved.value
    );
  },
});

function toggleSave() {
  if (book.value && !isSaved.value) shortlist(book.value);
  else remove(id.value);
}
</script>

<template>
  <Loading v-if="pending" />
  <section v-else class="app-container py-12 flex flex-wrap items-start gap-8">
    <img
      :src="book?.volumeInfo.imageLinks.thumbnail"
      :alt="book?.volumeInfo.title"
      class="w-100 basis-100 object-center object-cover"
    />
    <div class="grid gap-4 basis-100 flex-1 justify-items-start">
      <ul class="flex gap-1 items-center flex-wrap">
        <li
          v-for="tag in book?.volumeInfo.categories?.at(0)?.split('/')"
          class="border border-border text-xs bg-amber-100 px-2 py-1"
        >
          {{ tag }}
        </li>
      </ul>

      <h1 class="text-4xl font-garamond">{{ book?.volumeInfo.title }}</h1>
      <p
        class="text-<span>add to shortlist</span>gray-600 text-xl font-garamond italic"
      >
        By {{ book?.volumeInfo.authors?.join(",") }}
      </p>

      <ClientOnly>
        <AppButton
          @click="toggleSave"
          :variant="isSaved ? 'filled' : 'outlined'"
        >
          <Icon
            :name="
              isSaved
                ? 'material-symbols:bookmark-heart-rounded'
                : 'material-symbols:bookmark-outline'
            "
            size="24"
          />
          <span v-if="isSaved"> remove shortlist</span>
          <span v-else> shortlist</span>
        </AppButton>
      </ClientOnly>

      <hr class="border-border" />

      <h3 class="uppercase">synopsis</h3>

      <p v-html="book?.volumeInfo.description" />

      <h3 class="uppercase">biliographic details</h3>

      <table class="w-full">
        <tbody>
          <tr>
            <td>publisher</td>
            <td>{{ book?.volumeInfo.publisher }}</td>
          </tr>
          <tr>
            <td>publisher year</td>
            <td>{{ book?.volumeInfo.publishedDate }}</td>
          </tr>
          <tr>
            <td>page count</td>
            <td>{{ book?.volumeInfo.pageCount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
@reference "~/css/main.css";

h3 {
  @apply font-semibold;
}

table {
  tr {
    @apply border-y border-border;
  }

  td {
    @apply py-4 text-sm;

    &:first-child {
      @apply uppercase;
    }

    &:last-child {
      @apply text-right;
    }
  }
}
</style>
