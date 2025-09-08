// 8.- Escribe un programa que pida un número y diga si es divisible por 2
// Ejemplo: 

// input: 10
// input: 15
// Output: El 10 es divisible por 2.
// Output: El 15 no es divisible por 2.

const numero = parseInt(prompt('Ingrese un número:'))

if (!isNaN(numero)){
    if (numero%2===0){
        document.writeln('El número ',numero,' es divisible por 2.')
    }else{
        document.writeln('El número ',numero,' NO es divisible por 2.')
    }
}else{
    document.writeln('ingrese un valor numérico')
}