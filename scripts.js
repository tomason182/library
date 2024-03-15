const books = document.getElementById("add-book-button");
const table = document.getElementById("book-table");



function getBookInfo() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.getElementById("status").value;

    return {title, author, pages, status};
}

function insertBook() {

    //see how to insert rows in table with return of getBookInfo
    tableBody = table.getElementsByTagName("tbody");
    const newTd = document.createElement("td");
    
 
 }


books.addEventListener('click', () => {
    bookEntry.showModal();
    })