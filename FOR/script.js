
        //Reduce
/*
let numero =[1,2,3,4]

let soma =numero.reduce((num, total)=>num + total,0)

console.log(soma)*/


//FIND

/*let produto =[
    {id:1, nome:'teclado', preco:50},
    {id:2, nome:"mouse", preco:40}
]


let item= produto.find(produto => produto.id===1);

console.log(item)*/

//SPLIT

/*let frase="js é muito bom";


let palavras=frase.split(" ")

console.log(palavras)*/


//TRIM
/*
let frase ="                    Eu sou muit foda                      ";


console.log(frase.trim())*/


//INCLUDES


/*
let fruta=['maça', 'banana']

let incluir=fruta.includes('banana')

console.log(incluir)*/

//TolowerCase and ToUpperCase

/*let frase ="FRANCISCO"
let otrefrase="mauricio"


console.log(frase.toLowerCase());
console.log(otrefrase.toUpperCase());*/

//foreach
/*
let nome=["francisco", "joao"]

let n=nome.forEach(f=>console.log("seu nome é:",f))*/


//Some

/*let numero=[3,4,1,0]

let par=numero.some(n=> n % 2===0);

console.log(par)*/

//EVERY

/*let numero=[3,4,1,0]

let par=numero.every(n=> n % 2===0);

console.log(par)*/

//SORT

/*let frase=["andar", "pinar", "cuidar"]

console.log(frase.sort())

let numero=[2, 4, 1, 8, 6, 10, 500];

console.log(numero.sort((a, b)=> a-b))*/

//REVERSE

/*let numero=[1, 4, 2, 0]

console.log(numero.reverse())*/

//JOIN

/*
let palavras=["andar", "cansa","para", "cacete"];



console.log(palavras.join(" "))*/


//push
//pop
//unshet adiciona no inicio
//shift= remove no inicio da lista

/*
lista = ['a', 'b'];

// adicionar a lista
lista.push('c')

//eliminar o ultimo
lista.pop()

//adiciona no inicio
lista.unshift('A')

//remover no inicio

lista.shift()


console.log(lista)
*/

//SLICE(inicial, final)

/*

let lista = [1, 3, 4,2, 6,24]

console.log(lista.slice(0, 4))*/



//SPLICE---remova e adiciona elementos




//removendo elementos
/*
let palavras=[1, 2, 3, 4]

console.log(palavras.splice(1, 1))

//removendo e adicionando mais elementos

let frutas=['banana', 'laranja', 'maca', 'manga'];


frutas.splice(0, 1, 'limão', 'kiwi');

console.log(frutas)*/



//REPLACE

/*
let texto = "ola munod";


console.log(texto.replace("ola munod", "ola mundo"));*/


//SPOILER



let tetoP = document.getElementById('texto');

let saudacao = prompt("Digite a saudação").toLocaleLowerCase();


if (saudacao=='bom dia'){
    tetoP.textContent=saudacao
}
else{
    tetoP.textContent="SEXTOUUUUUUUU"
}