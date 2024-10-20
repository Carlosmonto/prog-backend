//                    Taller Completo de TypeScript
//1. Declara variables utilizando todos los tipos primitivos mencionados
let nombre: string = "Carlos";
let edad: number = 30;
let activo: boolean = true;
let indefinido: undefined = undefined;
let nulo: null = null;

console.log(`Nombre: ${nombre}, Edad: ${edad}, Activo: ${activo}, Indefinido: ${indefinido}, Nulo: ${nulo}`);


//2. Crea una función que calcule el área de un rectángulo, tomando la base y la altura como parámetros
function calcularAreaRectangulo(base: number, altura: number): number {
    return base * altura;
}
const area : number = calcularAreaRectangulo(10, 20);
console.log(area,'areaRectangulo'); 


//3. Crea una clase Car que tenga propiedades como make, model, y un método para mostrar su información

class Car {
    make: string;
    model: string;

    constructor(make: 'toyota', model: 'Corolla') {
        this.make = make;
        this.model = model;
    }

    mostrarInfo(): void {
        console.log(`Car make: ${this.make}, model: ${this.model}`);
    }
}


//4. Define una interfaz Shape que tenga propiedades para calcular el área y una clase Rectangle que implemente esta interfaz
interface Shape {
    calcularArea(): number;
}

class Rectangle implements Shape {
    constructor(public base: number, public altura: number) {}

    calcularArea(): number {
        return this.base * this.altura;
    }
}



//5. Crea un arreglo de objetos que representen libros, cada uno con propiedades como title, author, y usa filter para obtener solo los libros de un autor específico.

const libros = [
    { title: "Cien años de soledad", author: "Gabriel García Márquez" },
    { title: "1984", author: "George Orwell" },
    { title: "El amor en los tiempos del cólera", author: "Gabriel García Márquez" }
    
];

const librosDeAutorA = libros.filter(libro => libro.author === "Autor A");

//6. Crea un pequeño programa que utilice todos los conceptos anteriores:
	//Define una interfaz Book que tenga title, author, y year.
     //Crea una clase Library que tenga un arreglo de libros y métodos para agregar y buscar libros por autor.
	//Usa métodos de clase y arreglos para interactuar con la biblioteca.

    interface Book {
        title: string;
        author: string;
        year: number;
    }
    
    class Library {
        private books: Book[] = [];
    
        agregarLibro(libro: Book): void {
            this.books.push(libro);
        }
    
        buscarLibrosPorAutor(author: string): Book[] {
            return this.books.filter(libro => libro.author === author);
        }
    }
    
    const biblioteca = new Library();
    biblioteca.agregarLibro({ title: "Libro 1", author: "Autor A", year: 2020 });
    biblioteca.agregarLibro({ title: "Libro 2", author: "Autor B", year: 2021 });
    const librosDeAutorA = biblioteca.buscarLibrosPorAutor("Autor A");
    

//8. Uso de ciclos
	//	1. Escribe un programa que sume todos los números pares del1 al 100
    let sumaPares = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            sumaPares += i;
        }
    }
    console.log(sumaPares);
    

//		2. Contar números impares con while, que hay entre 1 y 30.
let contador = 1;
let impares = 0;
while (contador <= 30) {
    if (contador % 2 !== 0) {
        impares++;
    }
    contador++;
}
console.log(impares);


//		3. Imprimir números primos con for y if 
for (let i = 2; i <= 30; i++) {
    let esPrimo = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log(i);
    }
}
