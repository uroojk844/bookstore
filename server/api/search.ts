export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);

  const data = await $fetch(config.public.googleBooksApi, {
    query: {
      q: query,
      key: config.googleBooksApiKey,
      maxResults: 7,
      fields:
        "totalItems,items(id,volumeInfo(title,authors,publishedDate,imageLinks))",
    },
  });

  return data;
});
