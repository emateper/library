const myLibrary = [];

function Book(titulo, autor, descripción) {
    this.titulo = titulo;
    this.autor = autor;
    this.descripción = descripción;
    this.info = function(){
        console.log(this.name, this.autor, this.descripción);
    }

}

const book1 = new Book(1984, "Orwell", "Distopia, Ciencia Ficcion")

function addBookToLibrary () {
    
}


const btmNewBook = document.querySelector('#btnnewbook');

btmNewBook.addEventListener("click", function() {
   window.open("/formulario/formulario.html", "_blank");
});
