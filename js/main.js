/*Parte 1: Clase Libro
Debes crear una clase Libro que represente un libro dentro de la biblioteca.

Esta clase debe tener:
Propiedades:

titulo: nombre del libro
autor: autor del libro
isbn: identificador único del libro
_prestado: estado del libro (encapsulado con _ para indicar que es privado)
Métodos:

prestar(): cambia el estado del libro a prestado
devolver(): cambia el estado del libro a disponible
getEstado(): retorna si el libro está prestado o disponible
Ejemplo de uso:

const libro = new Libro("Cien años de soledad", "Gabriel García Márquez", "11111");
libro.getEstado(); // "Disponible"
libro.prestar();

*/
class Libro{
     
    constructor(titulo,autor,isbn){
        this.titulo=titulo;
        this.autor=autor;
        this.isbn=isbn;
        this._isPrestado=false;
    }

    prestar(){
        this._isPrestado=true;
    }

    devolver(){
        this._isPrestado=false;
    }

    getEstado(){
        if(this._isPrestado){
            return "Prestado"
        }else{
            return "Disponible)";
        }
    }
}

const libro1= new Libro("Cien años de soledad", "Gabriel García Márquez", "11111");

libro1.getEstado()
libro1.prestar()
console.log(libro1.getEstado())

/**Parte 2: Clase Biblioteca
Esta clase debe representar a la colección de libros y permitir gestionarlos.

Esta clase debe tener:
Propiedades:

nombre: nombre de la biblioteca
libros: un array para guardar los libros (instancias de Libro)
Métodos:

agregarLibro(libro): añade un libro a la colección
buscarPorISBN(isbn): busca un libro específico en la colección
prestarLibro(isbn): presta un libro según su ISBN
devolverLibro(isbn): devuelve un libro según su ISBN
mostrarLibros(): muestra todos los libros con su estado
Ejemplo de uso:

const biblio = new Biblioteca("Biblioteca Central");
const libro1 = new Libro("1984", "George Orwell", "12345");

biblio.agregarLibro(libro1);
biblio.prestarLibro("12345");
biblio.mostrarLibros(); // muestra el libro como "Prestado" */

class Biblioteca {

    constructor(nombreBiblioteca){
        this.nombreBiblioteca=nombreBiblioteca;
        this.colleccionLibros=[];
    };

    agregarLibro(libro){
        this.colleccionLibros.push(libro)
    }

    buscarPorISBN(isbn){
        const libroEncontrado=this.colleccionLibros.filter((element)=>{
            return element.isbn==isbn;
        })
        return libroEncontrado[0];
    }

    prestarLibro(isbn){
        const libroAprestar=this.buscarPorISBN(isbn)
        libroAprestar.prestar();
         //console.log(libroAprestar);
    }

    devolverLibro(isbn){
        const libroADevolver=(this.buscarPorISBN(isbn));
        return libroADevolver;
    }

    mostrarLibros(){

        this.colleccionLibros.forEach(element => {

            //console.log(element.titulo+element.autor+element.isbn+element.getEstado());
            console.log("titulo: "+element.titulo+", autor: "+element.autor+", isbn: "+element.isbn+", estado: "+element.getEstado());

        });
    }
    
}

const biblio= new Biblioteca("Biblioteca Central");
const libro2= new Libro("1984", "George Orwell", "12345");
const libro3= new Libro("all about HTML", "Steve Jobs", "654321");
const libro4= new Libro("Facebook", "MArck Zuckerberg", "65433434");

biblio.agregarLibro(libro1)
biblio.agregarLibro(libro2);
biblio.agregarLibro(libro3);
biblio.agregarLibro(libro4);

console.log("Buscando libro con ISBN 654321 ...")
console.log(biblio.buscarPorISBN("654321"));

console.log("Prestando Libro con ISBN 654321")
biblio.prestarLibro("654321");

console.log("Devolviendo Libro con ISBN 654321")
console.log(biblio.devolverLibro("654321"));


console.log("Mostrando todos los libros")
biblio.mostrarLibros();

