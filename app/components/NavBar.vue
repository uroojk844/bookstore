<script setup lang="ts">
interface ILinks {
  id: number;
  path: string;
  label: string;
}
[];

const links: ILinks[] = [
  {
    id: 1,
    path: "/",
    label: "Discover",
  },
  {
    id: 2,
    path: "/saved",
    label: "Shortlist",
  },
];
</script>

<template>
  <nav class="bg-amber-50 p-4 flex gap-6 items-center border-b-2 border-border">
    <span class="mr-auto text-2xl sm:text-3xl font-garamond font-bold"> Bookstore </span>
    <NuxtLink
      v-for="link in links"
      :href="link.path"
      :key="link.id"
      class="uppercase font-medium"
    >
      {{ link.label }}
    </NuxtLink>
    <AppButton>Sign In</AppButton>
  </nav>
</template>
