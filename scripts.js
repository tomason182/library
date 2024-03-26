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

    handlerBookSubmit(event) {

        event.preventDefault(); // prevent default behavior of submit form
    
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const pages = document.getElementById("pages").value;
        const readStatus = document.getElementById("status").value;
        return {title, author, pages, readStatus}
    }
}


class Library extends Book{
    constructor() {
        super();
        this.updateTable = this.updateTable.bind(this);
    }

    updateTable(event) {
        const info = this.handlerBookSubmit(event);
        bookEntry.close();
        bookForm.reset();
        const newBook = new Book();
        newBook.bookInfo = info;
    
        const tableBody = document.querySelector('#book-table tbody');
        const newRow = tableBody.insertRow();
    
        const newBookInfo = newBook.bookInfo;
    
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
}

const newLibrary = new Library();

const displayForm = document.querySelector('#add-book-button');
displayForm.addEventListener('click', () => {
    bookEntry.showModal();
});

const bookForm = document.querySelector('#book-form');
bookForm.addEventListener('submit', newLibrary.updateTable);

const cancelButton = document.querySelector('#cancel')
cancelButton.addEventListener('click', () => {
    bookEntry.close();
});