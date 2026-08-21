import type { IBook } from "~/interfaces/books";

export const books = ref<IBook[]>([]);

// onMounted(() => {
//     let booksList = localStorage.getItem('shortlisted-books');

//     if (booksList) {
//         books.value = JSON.parse(booksList);
//     }
// });

export function shortlist(book: IBook) {
  books.value.push(book);
}

export function remove(id: string) {
  let bookIndex = books.value.findIndex((book) => book.id === id);

  if (bookIndex > -1) {
    books.value = books.value.filter((book) => book.id !== id);
  }
}
