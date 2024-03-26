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

class Library {
    constructor(){
        this.books = [];
    }
    
    updateTable(event) {
        const newBook = new Book();
        const info = newBook.handlerBookSubmit(event);
        bookEntry.close();
        bookForm.reset();
        
        newBook.bookInfo = info;
        this.books.push(newBook);
        console.log(this.books[0])
        const tableBody = document.querySelector('#book-table tbody');
        const newRow = tableBody.insertRow();
    
        const newBookInfo = newBook.bookInfo;
    
        for (let i = 0; i < newBookInfo.length; i++) {
            const newCell = newRow.insertCell(i);
            const newText = document.createTextNode(newBookInfo[i]);
            newCell.appendChild(newText);
        }
    
        const selectCell = newRow.insertCell(newBookInfo.length);
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.classList.add('checkbox');        
        selectCell.appendChild(checkbox);
    }

    removeBook() {
        const tableBody = document.querySelector('#book-table tbody');
        let anyChecked = false;

        for (let i = 0; i < tableBody.rows.length; i++) {
            const row = tableBody.rows[i];
            const checkbox = row.querySelector('input[type="checkbox"]');
            if (checkbox.checked){
                tableBody.deleteRow(i);
                this.books.splice(i, 1);
                anyChecked = true;
            }
        }
        if (!anyChecked) {
            alert("Must select at lease one book for deletion!");
        }
        
    }

    changeStatus(){
        const tableBody = document.querySelector('#book-table tbody');
        let anyChecked = false;

        for (let i = 0; i < tableBody.rows.length; i++){
            const row = tableBody.rows[i];
            const checkbox = row.querySelector('input[type="checkbox"]');
            if (checkbox.checked){
                let readStatus = row.cells[3].textContent;
                readStatus = readStatus === 'Not read' ? 'Read' : 'Not read';

                this.books[i].readStatus = readStatus;

                const readStatusCell = row.cells[3];
                readStatusCell.textContent = this.books[i].readStatus;
                anyChecked = true;
                console.log(this.books[i])
            }            
        }
        if(!anyChecked) {
            alert("Must select at lease one book to change status!")
        }

    }
}

const newLibrary = new Library();

const displayForm = document.querySelector('#add-book-button');
displayForm.addEventListener('click', () => {
    bookEntry.showModal();
});

const bookForm = document.querySelector('#book-form');
bookForm.addEventListener('submit', (event) => newLibrary.updateTable(event));

const cancelButton = document.querySelector('#cancel')
cancelButton.addEventListener('click', () => {
    bookEntry.close();
});

const removeBook = document.querySelector("#rmv-book");
removeBook.addEventListener('click', () => newLibrary.removeBook());

const changeStatus = document.querySelector("#change-status");
changeStatus.addEventListener('click', () => newLibrary.changeStatus());