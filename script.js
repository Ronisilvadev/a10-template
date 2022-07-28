let arrayString = [ "arroz", "feijao", "banana"]
let arrayNumber = [ 7, 3, 4]
let arraySortido = [ "doce", 6, true]
let arrayNum = [2]
let arrayVazio = []
//
console.log(arrayString.length)
// verificando quantos itens tem dentro do array com length
//
console.log(arrayString[2]) // acessando array iten 2
console.log(arrayString) // mostrando array inteiro


console.log(arrayString.includes("arroz"))
console.log(arrayNumber.includes(2))
// verificando com booleano includes
console.log(arraySortido.includes("doce"))



console.log(arrayNum) //verificando lista
console.log(arrayNum.length)//verificando tamanho da lista

console.log(arrayVazio.length)

            //---------------//

 //let copiaArrayString = arrayString //copiando array
// console.log(copiaArrayString)// visualizando array copiado

// copiaArrayString.push("uva")// adicionando "uva" no final do lista do array

 
//console.log(copiaArrayString) // uva adicionado (4) ['arroz', 'feijao', 'banana', 'uva'

//console.log(arrayString)

//-----copiando corretamente-----//

let copiaArrayString = arrayString.slice()
console.log(copiaArrayString)

copiaArrayString.push("uva")
console.log(arrayString)

console.log(copiaArrayString)

//-------

// copiaArrayString.pop() // remove o ultimo iten
// console.log(copiaArrayString)

copiaArrayString.splice(2, 2)// apartir do indice 2 remova 2, // apartir do segundo iten da lista remova os 2 proximos 
console.log(copiaArrayString)
//

arrayString.sort() // ordenar array em ordem crescendo // ordenar lista em ordem
console.log(arrayString)

arrayNumber.sort()
console.log(arrayNumber)


//-------------//

let arrayNumeros = [2, 5, 6, 4, 8, 1]

console.log(arrayNumeros)
console.log(arrayNumeros.sort()) // ordenando em ordem crescente
console.log(arrayNumeros.reverse()) // ordem reversa


arrayNumeros.pop()// removendo o ultimo numero
console.log(arrayNumeros)

arrayNumeros.push(6) // adicionando 6
console.log(arrayNumeros)

arrayNumeros.splice(1 ,1), //removendo 
console.log(arrayNumeros)




