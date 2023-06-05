const books = JSON.parse(localStorage.getItem('books')) || [];

// Add Book
const addBook = (title, author) => {
  const book = { title, author };
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  // display book
  displayBooks();
};

// Remove Book
const removeBook = (index) => {
  
};

// Function to display all books saved in the collection
function displayBooks() {
  
}

// Initial display of books
displayBooks();