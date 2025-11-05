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


    /**
     * Inicializacion del objeto libreo segun los valores recibidos
     * @param {String} titulo del objeto libro
     * @param {String} autor del objeto libro
     * @param {String} isbn del objeto libr0
     */ 
    constructor(titulo,autor,isbn){
        this.titulo=titulo;
        this.autor=autor;
        this.isbn=isbn;
        this._isPrestado=false;
    }

    /**
     * Setea el valor booleano privado isPrestado a true;
     */
    prestar(){
        this._isPrestado=true;
    }

     /**
     * Setea el valor booleano privado isPrestado a false;
     */
    devolver(){
        this._isPrestado=false;
    }

    /**
     * Devuelve el estado actual (Prestado o Disponible) del libro
     * @returns mensaje en String dependiendo del valor de isPrestado;
     */
    getEstado(){
        if(this._isPrestado){
            return "Prestado"
        }else{
            return "Disponible";
        }
    }
}

const libro1= new Libro("Cien años de soledad", "Gabriel García Márquez", "11111");
//console.log(libro1)
libro1.getEstado()
libro1.prestar()
//console.log(libro1.getEstado())

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

    /**
     * Inicializa el objeto Biblioteca con el nombre pasado por parametro
     * @param {String} nombreBiblioteca 
     */
    constructor(nombreBiblioteca){
        this.nombreBiblioteca=nombreBiblioteca;
        this.colleccionLibros=[];
    };

    /**
     * Este metodo agrega un libro al array de libros de este mismo objeto (colleccionLibros)
     * @param {Libro} libro es el objeto a agregar 
     */
    agregarLibro(libro){
        this.colleccionLibros.push(libro)
    }

    /**
     * Este Metodo recibe un ISBN y busca en el array de libros(colleccionLibros)
     * @param {string} isbn es el libro a buscar
     * @returns el libro encontrado
     */
    buscarPorISBN(isbn){
        const libroEncontrado=this.colleccionLibros.find(libro => libro.isbn === isbn) 
        return libroEncontrado;
    }

    /**
     * Metodo que recibe por parametro el ISBN del libro a setear como prestado
     * @param {String} isbn del libro a marcar como prestado
     */
    prestarLibro(isbn){

        //Si buscar devuelve el objeto es que el libro existe. Si existe se guarda en variable
        const libroAprestar=this.buscarPorISBN(isbn)

        //Se busca en la collecion el libreo encontrado por isbn
        this.colleccionLibros.forEach(element => {

            //se busca el libro en el array por ISBN, cuando coincida, se invoca prestar para que lo actualize en el array
            if(element.isbn==libroAprestar.isbn){
                
                element.prestar();
            }
        });
        

    }

    /**
     * MEtodo que recibe por parametro un ISB del libro a setear como LIBRE/NO PRESTADO
     * @param {String} isbn del libro a marcar como LIBRE
     * @returns el libro encontrado
     */
    devolverLibro(isbn){
        const libroADevolver=this.buscarPorISBN(isbn);
        //console.log(libroADevolver)

        //Se busca en la collecion el libreo encontrado por isbn
        this.colleccionLibros.forEach(element => {

            //se busca el libro en el array por ISBN, cuando coincida, se invoca devolver para que lo actualize en el array
            if(element.isbn==libroADevolver.isbn){
                element.devolver();
            }
        });
        
    }

    /**
     * Recorre todos los objetos del array e imprime todos sus atributos
     */
    mostrarLibros(){

        this.colleccionLibros.forEach(element => {

            console.log("titulo: "+element.titulo+", autor: "+element.autor+", isbn: "+element.isbn+", estado: "+element.getEstado());

        });
    }
    
}

//CREACION LIBROS
const biblio= new Biblioteca("Biblioteca Central");
const libro2= new Libro("1984", "George Orwell", "12345");
const libro3= new Libro("all about HTML", "Steve Jobs", "654321");
const libro4= new Libro("Facebook", "MArck Zuckerberg", "65433434");
console.log(biblio)

//AGREGAR LIBROS A LA BILBLIOTECA
biblio.agregarLibro(libro1)
biblio.agregarLibro(libro2);
biblio.agregarLibro(libro3);
biblio.agregarLibro(libro4);

//PRUEBA DE METODO BUSCAR
console.log("Buscando libro con ISBN 654321 ...")
console.log(biblio.buscarPorISBN("654321"));

//PRUEBA DE METODO PRESTAR
console.log("Prestando Libro con ISBN 654321")
console.log("Prestando Libro con ISBN 65433434")
biblio.prestarLibro("654321");
biblio.prestarLibro("65433434");

//VERIFICACION DE LIBROS PRESTADOS ANTERIORMENTE
console.log(biblio.buscarPorISBN("654321"))
console.log(biblio.buscarPorISBN("65433434"))

//PRUEBA METODO DEVOLVER
console.log("Devolviendo Libro con ISBN 654321")
biblio.devolverLibro("654321")
console.log(biblio.buscarPorISBN("654321"))

//IMPRIME TODOS LOS LIBROS EN BILBIOTECA
console.log("Mostrando todos los libros")
biblio.mostrarLibros();

