import type { IBook } from "~/interfaces/books";

const STORE_KEY = "shortlisted-books";

const books = ref<IBook[]>([]);
let initialized = false;

export const useSavedBooks = () => {
  const getBooks = computed(() => books.value);

  onMounted(() => {
    if (initialized) return;

    const booksList = localStorage.getItem(STORE_KEY);

    if (booksList) {
      books.value = JSON.parse(booksList);
      initialized = true;
    }
  });

  function persist() {
    localStorage.setItem(STORE_KEY, JSON.stringify(getBooks.value));
  }

  function shortlist(book: IBook) {
    if (!book?.id) return;

    books.value.push(book);
    persist();
  }

  function remove(id: string) {
    const idx = checkSaved(id);
    if (idx) {
      books.value = books.value.filter((book) => book.id !== id);
      persist();
    }
  }

  function checkSaved(id: string) {
    return books.value.find((book) => book.id == id);
  }

  return {
    getBooks,
    shortlist,
    remove,
    checkSaved,
  };
};
