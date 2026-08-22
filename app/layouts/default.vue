<template>
  <NavBar />
  <NuxtPage />
  <AppFooter />
</template>

<style>
#__nuxt {
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  height: 100vh;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease-in-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
