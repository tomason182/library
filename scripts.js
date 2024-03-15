const books = document.getElementById("add-book-button");
const table = document.getElementById("book-table");
const bookForm = document.getElementById("book-form")

books.addEventListener('click', () => {
    bookEntry.showModal();
    })


bookForm.addEventListener('submit', function(event) {
    event.preventDefault(); //prevent default behavior of submit form

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const readStatus = document.getElementById("status").value;

    const newBook = new BookInfo(title, author, pages, readStatus);

    addBookToTable(newBook);
    bookEntry.close();
    bookForm.reset();

} )

function BookInfo (title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

}

function addBookToTable(book) {

    const tableBody = document.querySelector("#book-table tbody");    
    const newRow = tableBody.insertRow();

    const titleCell = newRow.insertCell();
    const authorCell = newRow.insertCell();
    const pagesCell = newRow.insertCell();
    const statusCell = newRow.insertCell();

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;
    statusCell.textContent = book.readStatus;
 }

document.getElementById("cancel").addEventListener('click', () => {
    bookEntry.close()
})

