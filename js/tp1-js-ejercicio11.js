// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
// Ejemplo: 

// input: 20
// input: 210




// Output: El 20 es divisible por 2 y por 5.
// Output: El 210 es divisible por 2, por 3, por 5 y por 7.




const numero = parseInt(prompt('Ingrese un número:'))
let resultado = ""

if (!isNaN(numero)) {
    if (numero % 2 === 0) {
        resultado = "2"
    }
    if(numero % 3 === 0){
        if (resultado==="2"){
            resultado = "2, 3"
        }else{
        resultado = "3"
        }
    }
    if(numero % 5 === 0){
        if (resultado!==""){
            resultado += ", 5"
        }else{
            resultado = "5"
        }
    }
    if(numero % 7 === 0){
        if (resultado!==""){
            resultado += ", 7"
        }else{
            resultado = "7"
        }
    }

    if (resultado!==""){
        document.writeln('El número ',numero,' es divisible por ',resultado)
    }
} else {
    document.writeln('Ingrese valores numéricos')
}

