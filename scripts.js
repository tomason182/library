const addBook = document.getElementById("add-book-button");
const tableBody = document.querySelector("#book-table tbody");
const bookForm = document.getElementById("book-form");
const rmvBook = document.getElementById("cancel-request");


addBook.addEventListener('click', () => {
    bookDialog.showModal(); // bookDialog is Id of dialog box
    })

document.getElementById("cancel").addEventListener('click', () => {
    bookDialog.close();
    })

rmvBook.addEventListener('click', removeBooks)


bookForm.addEventListener('submit', function(event) {
    event.preventDefault(); //prevent default behavior of submit form

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const readStatus = document.getElementById("status").value;

    const newBook = new createBook(title, author, pages, readStatus);

    newBook.addBookToTable();  // Using the Prototype
    bookDialog.close();
    bookForm.reset();

} )

//Create book Object
function createBook (title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

}

// Book prototype method to add book to table

createBook.prototype.addBookToTable = function (){
    const newRow = tableBody.insertRow();

    const checkCell = newRow.insertCell();
    const titleCell = newRow.insertCell();
    const authorCell = newRow.insertCell();
    const pagesCell = newRow.insertCell();
    const statusCell = newRow.insertCell();

    checkCell.innerHTML = "<input type='checkbox'>";
    titleCell.textContent = this.title;
    authorCell.textContent = this.author;
    pagesCell.textContent = this.pages;
    statusCell.textContent = this.readStatus;

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


