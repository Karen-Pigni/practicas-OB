"use strict";
// Esto un comentario en TS
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from 'cookies-utils';
const cursos_mock_1 = require("./mock/cursos.mock");
const Curso_1 = require("./models/Curso");
const Estudiante_1 = require("./models/Estudiante");
const ITarea_1 = require("./models/interfaces/ITarea");
const Persona_1 = require("./models/Persona");
const Programar_1 = require("./models/Programar");
/**
 * Esto es un comentario
 * Multilínea
 */
console.log("Hola Karen");
console.log("Adiós Karen");
// Declaración de Variables:
var nombre = 'Karen';
console.log("Hola, " + nombre);
console.log("¿Qué tal", nombre, "?");
console.log(`¿Cómo han ido las vacaciones, ${nombre} ?`);
let email = "karen.pigni@gmail.com"; // Variable de ámbito local
console.log(`El Email de ${nombre} es ${email}`);
const PI = 3.1416;
var apellidos = "San José"; // Tipo any hace que la variable pueda cambiar de tipo
apellidos = 3;
var error;
error = false;
console.log(`¿Hay error?: ${error}`);
// Instanciación múltiple de variables
let a, b, c; // intancia 3 variables sin valor inicial
a = "TypeScript";
b = true;
c = 8.9;
// BuiltIn Types: number, string, boolean, void, null y undefined
// Tipos más complejos
// Lista de cadenas de texto
let listaTareas = ["Tarea 1", "Tarea 2"];
// Combinación de tipos en listas
let valores = [false, "Hola", true, 56];
// Enumerados
var Estados;
(function (Estados) {
    Estados["Completado"] = "C";
    Estados["Incompleto"] = "I";
    Estados["Pendiente"] = "P";
})(Estados || (Estados = {}));
var PuestoCarrera;
(function (PuestoCarrera) {
    PuestoCarrera[PuestoCarrera["Primero"] = 1] = "Primero";
    PuestoCarrera[PuestoCarrera["Segundo"] = 2] = "Segundo";
    PuestoCarrera[PuestoCarrera["Tercero"] = 3] = "Tercero";
})(PuestoCarrera || (PuestoCarrera = {}));
let estadoTarea = Estados.Completado;
let puestoMaraton = PuestoCarrera.Segundo;
// podemos crear variables que sigan la interface Tarea
let tarea1 = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10
};
console.log(`Tarea: ${tarea1.nombre}`);
// Asignación múltiple de variables
let miTarea = {
    titulo: 'Mi tarea',
    estado: Estados.Completado,
    urgencia: 1
};
// Declaración 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;
// ** Factor Spread (Propagación)
// En asignación de variables
let { titulo, estado, urgencia } = miTarea;
// En listas
let listaCompraLunes = ["Leche", "Patatas"];
let listaCompraMartes = [...listaCompraLunes, "Pan", "Huevos"];
let listaCompraMiercoles = ["Carne", "Pescado"];
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles];
// En Objetos
let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bearer1283612783"
};
// Cambiar un valor por propagación
let nuevoEstado = Object.assign(Object.assign({}, estadoApp), { session: 4 });
let edad = 4;
let estudiante = {
    nombre: "Martín",
    edad // edad: edad
};
let coche = {
    nombre: "Audi",
    precio: 45000,
    anio: 2010
};
// ** Condicionales:
// Operadores ternarios
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`);
// If - else
if (error) {
    console.log("Hay un error");
}
else {
    console.log("No hay un error");
}
// If - else if - else
if (coche.anio < 2010) {
    console.log(`Coche: ${coche.nombre} es viejo`);
}
else if (coche.anio === 2010) {
    console.log(`Coche: ${coche.nombre} es del 2010`);
}
else {
    `Coche: ${coche.nombre} es nuevo`;
}
// Switch
switch (tarea1.estado) {
    case Estados.Completado:
        console.log("La tarea está completada");
        break;
    case Estados.Incompleto:
        console.log("La tarea no está completada");
        break;
    case Estados.Pendiente:
        console.log("La tarea está pendiente de comprobarse");
        break;
    default:
        break;
}
// ** Bucles
let listaTareasNueva = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Completado,
        urgencia: 15
    }
];
// For Clásico
for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];
    console.log(`${index} - ${tarea.nombre}`);
}
// Foreach    
listaTareasNueva.forEach((tarea, index) => {
    console.log(`${index} - ${tarea.nombre}`);
});
// Bucles While
while (tarea1.estado !== Estados.Completado) {
    if (tarea1.urgencia == 20) {
        tarea1.estado = Estados.Completado;
        break;
    }
    else {
        tarea1.urgencia++;
    }
}
// DO While ( se ejecuta al menos una vez)
do {
    tarea1.urgencia++;
    tarea1.estado = Estados.Completado;
} while (tarea1.estado !== Estados.Completado);
// Funciones
/**
 * Función que muestra un saludo por consola
 */
function saludar() {
    let nombre = "Karen";
    console.log(`¡Hola, ${nombre}!`);
}
// Invocación de la función
saludar();
/**
 * Función que muestra un saludo por consola a una persona
 * @param nombre Nombre de la persona a saludar
 */
function saludarPersona(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
saludarPersona("Karen");
/**
 * Función que muestra un adiós por consola a una persona
 * @param nombre Nombre de la persona a despedir, por defecto será "Pepe"
 */
function despedirPersona(nombre = "Pepe") {
    console.log(`¡Adiós, ${nombre}!`);
}
despedirPersona(); // Adiós, Pepe
despedirPersona("Alba"); // Adiós, Alba
/**
 * Función que muestra un adiós por consola a una persona
 * @param nombre (Opcional) Nombre de la persona a despedir
 */
function despedidaOpcional(nombre) {
    if (nombre) {
        console.log(`¡Adiós, ${nombre}!`);
    }
    else {
        console.log(`¡Adiós!`);
    }
}
despedidaOpcional(); // ¡Adiós!
despedidaOpcional("Juanjo"); // ¡Adiós Juanjo!
function variosParams(nombre, apellidos, edad = 18) {
    if (apellidos) {
        console.log(`${nombre} ${apellidos} tiene ${edad} años`);
    }
    else {
        console.log(`${nombre} tiene ${edad} años`);
    }
}
variosParams("Martín"); // Martín tiene 18 años
variosParams("Martín", "San José"); // Martín San José tiene 18 años
variosParams("Martín", undefined, 30); // Martín tiene 30 años
variosParams("Martín", "San José", 30); // Martín San José tiene 30 años
variosParams(nombre = "Martín", apellidos = "San José", edad = 30); // Martín San José tiene 30 años
function ejemploVariosTipos(a) {
    if (typeof (a) === 'string') {
        console.log("A es un string");
    }
    else if (typeof (a) === 'number') {
        console.log("A es un number");
    }
    else {
        console.log("A no es un string ni tampoco un number");
        throw Error("A no es un string ni un number");
    }
}
ejemploVariosTipos("Hola");
ejemploVariosTipos(3);
/**
 *
 * @param nombre Nombre de la persona
 * @param apellidos Apellidos de la persona
 * @returns Nombre completo de la persona
 */
function ejemploReturn(nombre, apellidos) {
    return `${nombre} ${apellidos}`;
}
const nombreCompleto = ejemploReturn("Martín", "San José");
console.log(nombreCompleto); // Martín San José
console.log(ejemploReturn("Martín", "San José")); // Martín San José
/**
 *
 * @param nombres es una lista de nombres de string
 */
function ejemploMultipleParams(...nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
ejemploMultipleParams("Karen");
ejemploMultipleParams("Karen", "Pepe", "Juan", "Alba");
const lista = ["Alberto", "Sandra"];
ejemploMultipleParams(...lista);
function ejemploParamLista(nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
ejemploParamLista(lista);
let empleadoKaren = {
    nombre: "Karen",
    apellidos: "San José",
    edad: 30
};
const mostrarEmpleado = (empleado) => `${empleado.nombre} tiene ${empleado.edad} años`;
// Llamamos a la función
mostrarEmpleado(empleadoKaren);
const datosEmpleado = (empleado) => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} está en edad de jubilación`;
    }
    else {
        return `Empleado ${empleado.nombre} está en edad laboral`;
    }
};
datosEmpleado(empleadoKaren); // Empleado Karen está en edad laboral
const obtenerSalario = (empleado, cobrar) => {
    if (empleado.edad > 70) {
        return;
    }
    else {
        cobrar(); // callback a ejecutar
    }
};
const cobrarEmpleado = (empleado) => {
    console.log(`${empleado.nombre} cobra su salario`);
};
obtenerSalario(empleadoKaren, () => 'Cobrar Karen');
// Async Functions
function ejemploAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("Tarea a completar antes de seguir con la secuencia de instrucciones");
        console.log("Tarea completada");
        return "Completado";
    });
}
ejemploAsync()
    .then((respuesta) => {
    console.log("Respuesta", respuesta);
}).catch((error) => {
    console.log("Ha habido un error", error);
}).finally(() => "Todo ha terminado");
// Generators
function* ejemploGenerator() {
    // yield --> para emitir valores
    let index = 0;
    while (index < 5) {
        // Emitimos un valor incrementado
        yield index++;
    }
}
// Guardamos la función generadora en una variable
let generadora = ejemploGenerator();
// Accedemos a los valores emitidos
console.log(generadora.next().value); // 0
console.log(generadora.next().value); // 1
console.log(generadora.next().value); // 2
console.log(generadora.next().value); // 3
// Worker
function* watcher(valor) {
    yield valor; // emitimos el valor inicial
    yield* worker(valor); // Llamamos a las emisiones del woker para que emita otros valores
    yield valor + 4; // emitimos el valor final + 4
}
function* worker(valor) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}
let generatorSaga = watcher(0);
console.log(generatorSaga.next().value); // 0 (lo ha hecho el watcher)
console.log(generatorSaga.next().value); // 1 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 2 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 3 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 4 (lo ha hecho el watcher)
// Sobrecarga de funciones
function mostrarError(error) {
    console.log("Ha habido un error:", error);
}
// Persistencia de datos
// 1. LocalStorage --> Almacena los datos en el navegador (no se eliminan automáticamente)
// 2. SessionStorage --> La diferencia radica en la sesión de navegador. Es decir, los datos se persisten en la sesión de navegador
// 3. Cookies --> Tienen una fecha de caducidad y también tienen un ámbito de URL
// LocalStorage y SessionStorage
function guardar() {
    localStorage.set("nombre", "Martín");
    sessionStorage.set("nombre", "Martín");
}
function leer() {
    let nombre = localStorage.get("nombre");
    let nombreSession = sessionStorage.get("nombre");
}
function borrarItem(item) {
    localStorage.removeItem(item);
    sessionStorage.removeItem(item);
}
function borrarTodas() {
    localStorage.clear();
    sessionStorage.clear();
}
// Cookies
// const cookieOptions = {
//     name: "usuario", // string,
//     value: "Martín", // string,
//     maxAge: 10 * 60, // optional number (value in seconds),
//     expires: new Date(2099, 10, 1), // optional Date,
//     path: "/", // optional string,
//   };
// Seteamos la Cookie
// setCookie(cookieOptions);
// Leer una Cookie
// let cookieLeida = getCookieValue("usuario");
// Eliminar
// deleteCookie("usuario");
// Eliminar todas las Cookies
// deleteAllCookies();
// Clase Temporizador
class Temporizador {
    empezar() {
        setTimeout(() => {
            // Comprobamos que exista la función terminar como callback
            if (!this.terminar)
                return;
            // Cuando haya pasado el tiempo, se ejecutará la función terminar
            this.terminar(Date.now());
        }, 10000);
    }
}
const miTemporizador = new Temporizador();
// Definimos la función del callback a ejecutar cuando termine el tiempo
miTemporizador.terminar = (tiempo) => {
    console.log("Evento terminado en:", tiempo);
};
// Lanzamos el temporizador
miTemporizador.empezar(); // Se inicia el timeout y cuando termine, se ejecuta la función terminar()
// setInterval(() => console.log("Tic"), 1000) // Imprimir "tic" cada segundo por consola
// Eliminar la ejecución de la función
delete miTemporizador.terminar;
// ** CLASES
// Creamos un curso
// const cursoTS: Curso = new Curso("TypeScript", 15);
// const cursoJS: Curso = new Curso("JavaScript", 20);
// const listaCursos: Curso[] = [];
// listaCursos.push(cursoTS, cursoJS); // [Lista de cursos];
// Usamos el MOCK
const listaCursos = cursos_mock_1.LISTA_CURSOS;
// Creamos un estudiante
const martin = new Estudiante_1.Estudiante("Martín", listaCursos, "San José");
console.log(`${martin.nombre} estudia:`);
// Iteramos por cada uno de ellos
martin.cursos.forEach((curso) => {
    console.log(`- ${curso.nombre} (${curso.horas} horas)`); // - Typescript (15 horas)
});
const cursoAngular = new Curso_1.Curso("Angular", 40);
martin.cursos.push(cursoAngular); // Añadimos
// Conocer las horas Estudiadas
martin.horasEstudidas; // number
// Saber la instancia de un objeto/variable
// - TypeOf
// - InstanceOf
let fechaNacimiento = new Date(1991, 10, 10);
if (fechaNacimiento instanceof Date) {
    console.log("Es una instancia de Date");
}
if (martin instanceof Estudiante_1.Estudiante) {
    console.log("Martín es un Estudiante");
}
// Herencioa y Polimorfismo
let trabajador1 = new Persona_1.Trabajador("Martín", "San José", 30, 2000);
let trabajador2 = new Persona_1.Trabajador("Pepe", "García", 21, 1000);
let trabajador3 = new Persona_1.Trabajador("Juan", "González", 40, 3000);
let jefe = new Persona_1.Jefe("Pablo", "García", 50);
jefe.trabajadores.push(trabajador1, trabajador2, trabajador3);
jefe.saludar(); // herencia de Persona
jefe.trabajadores.forEach((trabajador) => {
    trabajador.saludar(); // especificado en Trabajador 
});
// * Uso de Interfaces
let programar = {
    titulo: 'Programar en TypeScript',
    descripcion: 'Practicar con Katas para aprender a desarrollar con TS',
    completada: false,
    urgencia: ITarea_1.Nivel.Urgente,
    resumen: function () {
        return `${this.titulo} - ${this.completada} - Nivel: ${this.urgencia}`;
    }
};
console.log(programar.resumen());
// Tarea de Programación (implementa ITarea)
let programarTS = new Programar_1.Programar("TypeScript", "Tarea de progración en TS", false, ITarea_1.Nivel.Bloqueante);
console.log(programarTS.resumen());
// Decoradores experimentales --> @
// - Clases
// - Parámetros
// - Métodos
// - Propiedades
function Override(label) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        });
    };
}
class PruebaDecorador {
    constructor() {
        this.nombre = "Martín";
    }
}
__decorate([
    Override('Prueba') // llamar a la función Override
    ,
    __metadata("design:type", String)
], PruebaDecorador.prototype, "nombre", void 0);
let prueba = new PruebaDecorador();
console.log(prueba.nombre); // "Prueba" siempre va a ser devuelto a través del get()
// Otra función para usarla como decorador
function SoloLectura(target, key) {
    Object.defineProperty(target, key, {
        writable: false
    });
}
class PruebaSoloLectura {
    constructor() {
        this.nombre = '';
    }
}
__decorate([
    SoloLectura,
    __metadata("design:type", String)
], PruebaSoloLectura.prototype, "nombre", void 0);
let pruebaLectura = new PruebaSoloLectura();
pruebaLectura.nombre = "Martín";
// console.log(pruebaLectura.nombre) // ==> Undefined, ya que no se le puede dar valor (es solo de lectura)
// Decorador para parámetros de un método
function mostrarPosicion(target, propertyKey, parameterIndex) {
    console.log("Posición", parameterIndex);
}
class PruebaMetodoDecorador {
    prueba(a, b) {
        console.log(b);
    }
}
__decorate([
    __param(1, mostrarPosicion),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], PruebaMetodoDecorador.prototype, "prueba", null);
// Usamos el método con el parámetro y su decorador
new PruebaMetodoDecorador().prueba('hola', false);
// * PATRONES CREACIONALES
const miPrimerSingleton = Singleton.getInstance();
const miSegundoSingleton = Singleton.getInstance();
// Comprueba si ambos son iguales
if (miPrimerSingleton === miSegundoSingleton) {
    console.log('Singleton funciona correctamente, ambas variables continenen la misma instancia.');
    miPrimerSingleton.mostrarPorConsola();
    miSegundoSingleton.mostrarPorConsola();
}
else {
    console.log('Error, las variables contienen distintas instancias');
}
//# sourceMappingURL=index.js.map