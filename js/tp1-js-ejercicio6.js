// 6- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// Ejemplo: 

// input: 15 , 3


// Output: El 15 es el número más grande

const numero1 = parseInt(prompt('Ingrese primer: '))
const numero2 = parseInt(prompt('Ingrese segundo: '))

console.log(numero1)
console.log(numero2)
if ((!isNaN(numero1)) && (!isNaN(numero2))) {
    console.log('dentro if')
    if (numero1 > numero2) {
        document.writeln('El ', numero1, ' es el mayor.')
    } else if (numero1 < numero2) {
        document.writeln('El ', numero2, ' es el mayor.')
    } else {
        document.writeln('Ambos números son iguales')
    }
} else{
    document.writeln('Debe ingresar valores numéricos')
}
