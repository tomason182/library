const books = document.getElementById("add-book-button");
const table = document.getElementById("book-table");



function getBookInfo() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const readStatus = document.getElementById("status").value;

    return {title, author, pages, status};
}

function insertBook() {

    //see how to insert rows in table with return of getBookInfo
    const tableBody = document.getElementById("book-table").getElementsByTagName("tbody");
    const tableBodyElement = tableBody[0];
    const newRow = tableBodyElement.insertRow();
    const titleCell = newRow.insertCell(0);
    const authorCell = newRow.insertCell(1);
    const pagesCell = newRow.insertCell(2);
    const statusCell = newRow.insertCell(3);

    const addTitle = document.createTextNode(title);
    const addAuthor = document.createTextNode(author);
    const addPages = document.createTextNode(pages);
    const addStatus = document.createTextNode(readStatus);
    titleCell.appendChild(addTitle);
    authorCell.appendChild(addAuthor);
    pagesCell.appendChild(addPages);
    statusCell.appendChild(addStatus);
 }


books.addEventListener('click', () => {
    bookEntry.showModal();
    })