# Usando un if
numeroIf = -5

if numeroIf > 0:
    print("El número es positivo")
elif numeroIf < 0:
    print("El número es negativo")
else:
    print("El número es cero")

# Bucle While
numeroWhile = 0

while numeroWhile < 3:
    numeroWhile += 1
    print(numeroWhile)

# Bucle Do While
numeroDoWhile = 0

while True:
    numeroDoWhile += 1
    print(numeroDoWhile)
    if numeroDoWhile >= 3:
        break

# Bucle For
for numeroFor in range(4):
    print(numeroFor)

# Switch
estacion = "otoño"

if estacion == "primavera":
    print("Estamos en primavera")
elif estacion == "verano":
    print("Estamos en verano")
elif estacion == "otoño":
    print("Estamos en otoño")
elif estacion == "invierno":
    print("Estamos en invierno")
else:
    print("No es una estación válida")
