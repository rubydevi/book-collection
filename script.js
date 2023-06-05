const books = JSON.parse(localStorage.getItem('books')) || [];

// Add Book
const addBook = (title, author) => {
  const book = { title, author };
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  // display book
};