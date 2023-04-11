const datos = {
    nombre: "Karen",
    apellido: "Pigni",
    edad: 31,
    altura: 156,
    eresDesarrollador: true
}

const edad = datos.edad
const lista = [
    {
        ...datos
    },{
        nombre: "Pedro",
        apellido: "Angulo",
        edad: 35,
        altura: 180,
        eresDesarrollador: true
    },{
        nombre: "Amaia",
        apellido: "Etxeberria",
        edad: 30,
        altura: 165,
        eresDesarrollador: false
    }
]

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad)

console.log(listaOrdenada)
