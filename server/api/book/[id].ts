export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const id = getRouterParam(event, "id");

  if (!id)
    return {
      error: "Id is required!",
    };

  const data = await $fetch(id, {
    baseURL: config.public.googleBooksApi,
    query: {
      key: config.googleBooksApiKey,
      fields:
        "id,volumeInfo(title,authors,description,publishedDate,publisher,pageCount,categories,imageLinks)",
    },
  });

  return data;
});
