const hoy = new Date()

const nacimiento = new Date(1991, 9, 23)

const comparacion = hoy > nacimiento

const diaNacimiento = nacimiento.getDate()
const mesNacimiento = nacimiento.getMonth() + 1
const anyoNacimiento = nacimiento.getFullYear()
