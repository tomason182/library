class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }

    //Getter    
    get bookInfo(){
        return(`${this.title} written by ${this.author}. Amount of pages: ${this.pages}`)
    }

    //Setter
    set bookInfo(info) {
        const {title, author, pages, readStatus} = info;

        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }

    static displayForm = () => {
        const addBook = document.getElementById("add-book-button");
        addBook.addEventListener('click', () => {
            bookEntry.showModal();
        })
    }

}

const getBookInfo = () => {
    const bookForm = document.getElementById("book-form");

    bookForm.addEventListener('submit', (e) =>{
        e.preventDefault(); // prevent default behavior of submit form

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const pages = document.getElementById("pages").value;
        const readStatus = document.getElementById("status").value;
    })
    return {title, author, pages, readStatus}
}




const books = document.getElementById("add-book-button");
const tableBody = document.querySelector("#book-table tbody");
const bookForm = document.getElementById("book-form");
const rmvBook = document.getElementById("rmv-book");

books.addEventListener('click', () => {
    bookEntry.showModal();
    })

document.getElementById("cancel").addEventListener('click', () => {
    bookEntry.close();
    })

rmvBook.addEventListener('click', removeBooks)

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

    const newRow = tableBody.insertRow();

    const checkCell = newRow.insertCell();
    const titleCell = newRow.insertCell();
    const authorCell = newRow.insertCell();
    const pagesCell = newRow.insertCell();
    const statusCell = newRow.insertCell();

    checkCell.innerHTML = "<input type='checkbox'>";
    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;
    statusCell.textContent = book.readStatus;
 }

 function removeBooks () {
    const rows = document.querySelectorAll("#book-table tbody tr");

    rows.forEach(row => {
        const checkbox = row.querySelector("td:first-child input[type='checkbox']");

        if (checkbox.checked === true) {

            tableBody.deleteRow(row.rowIndex -1); // start counting from one instead of zero

        };

    });
}