<template>
  <section class="app-container mb-8">
    <div
      class="flex mb-6 w-full font-garamond text-2xl font-semibold h-12 border-b-2 border-border"
    >
      Search Results
    </div>

    <section class="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
      <BookCard v-for="value in 10" />
    </section>
  </section>
</template>
