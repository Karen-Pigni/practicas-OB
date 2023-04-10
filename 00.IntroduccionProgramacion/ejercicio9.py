class Persona:
    def __init__(self, edad, nombre, telefono):
        self.edad = edad
        self.nombre = nombre
        self.telefono = telefono

class Cliente(Persona):
    def __init__(self, edad, nombre, telefono, credito):
        super().__init__(edad, nombre, telefono)
        self.credito = credito

class Trabajador(Persona):
    def __init__(self, edad, nombre, telefono, salario):
        super().__init__(edad, nombre, telefono)
        self.salario = salario

cliente = Cliente(25, "Juan", "123456789", 5000)
print("Edad:", cliente.edad)
print("Nombre:", cliente.nombre)
print("Teléfono:", cliente.telefono)
print("Crédito:", cliente.credito)

trabajador = Trabajador(30, "María", "987654321", 30000)
print("Edad:", trabajador.edad)
print("Nombre:", trabajador.nombre)
print("Teléfono:", trabajador.telefono)
print("Salario:", trabajador.salario)
