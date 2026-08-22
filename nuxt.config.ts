import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  ssr: false,
  runtimeConfig: {
    public: {
      googleBooksApi: "https://www.googleapis.com/books/v1/volumes",
    },
    googleBooksApiKey: process.env.GOOGLE_BOOKS_API_KEY || "",
  },
  modules: ["@nuxt/fonts", "@nuxt/icon"],
});