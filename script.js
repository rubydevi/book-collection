const books = JSON.parse(localStorage.getItem('books')) || [];

// Remove Book
const removeBook = (index) => {
  books.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(books));
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';

  books.forEach((book, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'book-item';
    listItem.innerHTML = `
      <span>${book.title}</span>
      <span>by ${book.author}</span>
      <button class="remove-btn">Remove</button>
      <hr>
    `;
    const removeButton = listItem.querySelector('.remove-btn');
    removeButton.addEventListener('click', () => {
      removeBook(index);
    });
    bookList.appendChild(listItem);
  });
};

// Display all the books
const displayBooks = () => {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';

  books.forEach((book, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'book-item';
    listItem.innerHTML = `
      <span>${book.title}</span>
      <span>by ${book.author}</span>
      <button class="remove-btn">Remove</button>
      <hr>
    `;
    const removeButton = listItem.querySelector('.remove-btn');
    removeButton.addEventListener('click', () => {
      removeBook(index);
    });
    bookList.appendChild(listItem);
  });
};

// Add Book
const addBook = (title, author) => {
  const book = { title, author };
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  // display book
  displayBooks();
};

// Initial book list display
displayBooks();

document.getElementById('bookContent').addEventListener('submit', submitBookForm);