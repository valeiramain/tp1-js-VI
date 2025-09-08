// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Ejemplo: 

// input: 15 , 3, 9


// Output: El 15 es el número más 

const numero1 = parseInt(prompt('Ingrese primer número: '))
const numero2 = parseInt(prompt('Ingrese segundo número: '))
const numero3 = parseInt(prompt('Ingrese tercer número: '))

if ((!isNaN(numero1)) && (!isNaN(numero2)) && (!isNaN(numero3))) {
    if(numero1 > numero2){
        if (numero1 > numero3){
            document.writeln('El número ',numero1,' es el mayor.')
        }else {
            document.writeln('El número ',numero3,' es el mayor.')
        }
    } else if (numero2 > numero3){
            document.writeln('El número ',numero2,' es el mayor.')
    } else{
        document.writeln('El número ',numero3,' es el mayor.')
    }
}else{
    document.writeln('Ingrese valores numéricos')
}
