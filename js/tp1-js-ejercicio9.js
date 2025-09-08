// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// Ejemplo:



// input: Hola mundo
// Output: oauo

const frase = prompt('Ingrese una Frase:').trim().toUpperCase()

const indice = frase.length
let vocales = ""

for (let i=0;i<frase.length;i++){
    if(frase.charAt(i)==="A"){
        vocales += "A"
    }
    if(frase.charAt(i)==="E"){
        vocales += "E"
    }
    if(frase.charAt(i)==="I"){
        vocales += "I"
    }
    if(frase.charAt(i)==="O"){
        vocales += "O"
    }
    if(frase.charAt(i)==="U"){
        vocales += "U"
    }

}

document.writeln('las vocales de la frase son: ',vocales)


