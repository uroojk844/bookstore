<template>
  <section class="py-12 app-container grid justify-items-center gap-4">
    <h1 class="font-garamond text-3xl">Catalog Search</h1>
    <p class="text-gray-500 mb-4">
      Explore our extensive archives of rare, scholary, and classic literature.
    </p>

    <form @submit.prevent="" class="flex items-center gap-4 w-full max-w-xl">
      <input
        type="search"
        class="border border-border px-4 h-10 max-w-lg flex-1 outline-transparent"
        placeholder="Search books"
      />
      <AppButton>Search</AppButton>
    </form>
  </section>
</template>
