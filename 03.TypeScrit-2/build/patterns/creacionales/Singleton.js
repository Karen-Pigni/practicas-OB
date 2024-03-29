"use strict";
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(); // se crea la única unstancia compartida a nivel de aplicación
        }
        return Singleton.instance;
    }
    mostrarPorConsola() {
        console.log("Método del Singleton");
    }
}
//# sourceMappingURL=Singleton.js.map