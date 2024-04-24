const books = [];

const createNewBook = (event) => {
    event.preventDefault();

    const $title = document.querySelector('#title').value;
    const $author = document.querySelector('#author').value;
    const $description = document.querySelector('#description').value;

    const newBook = {
        id: new Date().getTime(),
        title: $title,
        author: $author,
        description: $description,


    };

    books.push(newBook);

    document.querySelector('#newtitle').value = '';
    document.querySelector('#newauthor').value = '';
    document.querySelector('#newdescription').value = '';

    createCardBook();

};

const createCardBook = () => {
    const booksHTML = books.map((book) => {
        return `
            <div class= "book-card">
                <h1>${book.title}</h1>
                <h2>${book.author}</h2>
                <p>${book.description}</p>
        
        
        `;
    }).join('');

    const booksContainer = document.querySelector(".grid-container");
    booksContainer.innerHTML = booksHTML;
};

document.addEventListener('DOMContentLoaded', createCardBook);
document.getElementById('#submit').addEventListener('submit', createNewBook);






