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

  
  // here
}

// Instantiate AwesomeBooks
const bookCollection = new AwesomeBooks();