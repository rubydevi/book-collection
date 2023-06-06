class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class AwesomeBooks {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.bookList = document.getElementById('bookList');
    this.addBookForm = document.getElementById('bookContent');
    this.addBookForm.addEventListener('submit', this.submitBookForm.bind(this));
    this.displayBooks();
  }

  addBook(title, author) {
    const newBook = new Book(title, author);
    this.books.push(newBook);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  submitBookForm(event) {
    event.preventDefault();
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    this.addBook(titleInput.value, authorInput.value);
    titleInput.value = '';
    authorInput.value = '';
  }  

}

// Instantiate AwesomeBooks
const bookCollection = new AwesomeBooks();