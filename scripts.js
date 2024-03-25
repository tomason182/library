class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }

    //Getter    
    get bookInfo(){
        return [this.title, this.author, this.pages, this.readStatus];
    }

    //Setter
    set bookInfo(info) {
        const {title, author, pages, readStatus} = info;

        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
}

function updateTable(e) {
    const info = handlerBookSubmit(e);
    bookEntry.close();
    bookForm.reset();
    const newBook = new Book();
    newBook.bookInfo = info;

    tableBody = document.querySelector('#book-table tbody');
    newRow = tableBody.insertRow();

    newBookInfo = newBook.bookInfo;

    for (let i = 0; i < newBookInfo.length; i++) {
        const newCell = newRow.insertCell(i);
        const newText = document.createTextNode(newBookInfo[i]);
        newCell.appendChild(newText);
    }

    const removeCell = newRow.insertCell(newBookInfo.length);
    const rmvButton = document.createElement('button');
    rmvButton.classList.add('remove-button');
    rmvButton.textContent = 'X';
    removeCell.appendChild(rmvButton);
}

function handlerBookSubmit(e) {

    e.preventDefault(); // prevent default behavior of submit form

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const readStatus = document.getElementById("status").value;
    return {title, author, pages, readStatus}
}

const displayForm = document.querySelector('#add-book-button');
const bookForm = document.querySelector('#book-form');
const cancelButton = document.querySelector('#cancel')

displayForm.addEventListener('click', () => {
    bookEntry.showModal();
});

bookForm.addEventListener('submit', updateTable);
cancelButton.addEventListener('click', () => {
    bookEntry.close();
});