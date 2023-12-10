type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
    id: number;
    nombre: string;
    apellidos: string;
    sexo: string;
    temperatura: number;
    frecuenciaCardiaca: number;
    especialidad: Especialidad;
    edad: number;
}

const pacientes: Pacientes[] = [
    {
        id: 1,
        nombre: "John",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 80,
        especialidad: "Medico de familia",
        edad: 44,
    },
    {
        id: 2,
        nombre: "Jane",
        apellidos: "Doe",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 70,
        especialidad: "Medico de familia",
        edad: 43,
    },
    {
        id: 3,
        nombre: "Junior",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 90,
        especialidad: "Pediatra",
        edad: 8,
    },
    {
        id: 4,
        nombre: "Mary",
        apellidos: "Wien",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 120,
        especialidad: "Medico de familia",
        edad: 20,
    },
    {
        id: 5,
        nombre: "Scarlett",
        apellidos: "Somez",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 110,
        especialidad: "Cardiólogo",
        edad: 30,
    },
    {
        id: 6,
        nombre: "Brian",
        apellidos: "Kid",
        sexo: "Male",
        temperatura: 39.8,
        frecuenciaCardiaca: 80,
        especialidad: "Pediatra",
        edad: 11,
    },
];

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
    // Tu implementación aquí :)
    let nuevoPacientes: Pacientes[] = [];
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") nuevoPacientes = [...nuevoPacientes, pacientes[i]];
    }
    return nuevoPacientes;
};
console.log(obtenPacientesAsignadosAPediatria(pacientes));

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
    // Tu implementación aquí :)
    let nuevoPacientes: Pacientes[] = [];
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) nuevoPacientes = [...nuevoPacientes, pacientes[i]];
    }
    return nuevoPacientes;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));


// TIPOS GENÉRICOS II

// const peliculasOriginal = ["El señor de los anillos", "El padrino", "Matrix"];

// const insertaElemento = <T>(
//     arrayEntrada: T[], 
//     nuevoElemento: T, 
//     cabeza: boolean
//     ): T[] => (cabeza) ? [nuevoElemento, ...arrayEntrada] : [...arrayEntrada, nuevoElemento];

// const peliculasNuevo = insertaElemento(
//     peliculasOriginal,
//     "El caballero oscuro",
//     true
// );

// console.log(peliculasNuevo);

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numerosNuevo = insertaElemento(
//     numeros,
//     0,
//     true 
// );

// console.log(numerosNuevo);

// const borrarElemento = <T>(coleccionEntrada: T[], indice: number): T[] => [
//     ...coleccionEntrada.slice(0, indice),
//     ...coleccionEntrada.slice(indice + 1)
// ]

// const pelisNuevas = borrarElemento(peliculasOriginal, 1);
// console.log(pelisNuevas);

// const numeros = [1,2,3,4,5,6];

// const nuevoNumero = borrarElemento(numeros, 3);
// console.log(nuevoNumero);


// interface Cliente {
//     id: number,
//     nombre: string
// }
// const clientes: Cliente[] = [
//     { id: 1, nombre: 'Ana'},
//     { id: 2, nombre: 'Juan'},
//     { id: 3, nombre: 'Maribel'},

// ];
// console.log(clientes);

// const clientesNuevo = borrarElemento(clientes, 1);
// console.log(clientesNuevo);

// TIPOS GENÉRICOS I

// const nombres: string[] = ['Juan', 'Pedro', 'María', 'Lucía'];
// const numeros: number[] = [1, 2, 3, 4, 5, 6];

// const cabezaDeLista = <T>(miArray: T[]): T => {
//     return miArray[0];
// }
// console.log(cabezaDeLista(nombres));
// console.log(cabezaDeLista(numeros));

// interface Persona {
//     nombre: string,
//     edad: number
// }

// const ana: Persona = {nombre: "Ana", edad: 24};
// const personas: Persona[] = [
//     ana,
//     {nombre: "Juan", edad: 30},
//     {nombre: "Laura", edad: 40}
// ];

// personas[0] = {nombre: "Ana", edad: 32}; // modificación mutable

// personas[0] = {
//     ...personas[0],
//     edad: 45
// } // modificación inmutable

// console.log(personas);


// Tipar arrays TS

// const devuelvePeliculas = () : string[] => {
//     return ["Matrix", "Gladiator", "Dirty Dancing"];
// }

// const numeros: number[] = [18, 29, 32, 46, 53];

// const peliculas: string[] = ["Matrix", "Gladiator", "Dirty Dancing"];

// interface Cliente {
//     id: number,
//     nombre: string
// }

// const cliente: Cliente[] = [
//     { id: 1, nombre: "Pepe" },
//     { id: 2, nombre: "David" }
// ];

// const pintaEdades = (edadColeccion: number[]) => {
//     console.log(edadColeccion);
// };

// pintaEdades(numeros);
// pintaEdades(peliculas);
