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

const isOpen = ref(false);
function toggleNav() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <nav class="bg-amber-50 p-4 flex gap-6 items-center border-b-2 border-border">
    <span
      @click="$router.push({ path: '/' })"
      class="mr-auto text-2xl sm:text-3xl font-garamond font-bold cursor-pointer"
    >
      Bookstore
    </span>
    <div class="max-sm:mobile-nav sm:contents" :class="{ open: isOpen }">
      <NuxtLink
        v-for="link in links"
        :href="link.path"
        :key="link.id"
        class="uppercase font-medium hover:text-maroon"
      >
        {{ link.label }}
      </NuxtLink>
      <AppButton class="mt-auto ml-auto">Sign In</AppButton>
    </div>
    <AppButton class="sm:hidden" @click="toggleNav">
      <Icon name="uil:bars" />
    </AppButton>
  </nav>
</template>
