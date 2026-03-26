
/*const elementos=document.querySelectorAll(".texto");


elementos.forEach((item)=>{
     console.log(item.innerText);
})

//alterando os textos

const itens = document.querySelectorAll('.texto')


itens.forEach((item)=>{
     item.innerText="alterado";
})


itens.forEach((item)=>{
     item.innerHTML="<h2>Melhor curso de javaSprit</h2>"
})

itens.forEach((item)=>{
     item.style.color="#0000ff"
})*/

//Eventus


//Eventus Click


/*
const botao=document.getElementById('btn');

botao.addEventListener("click", ()=>{
     alert("Voce clicou no botão");
})
     */

//Eventus de Dgitação
/*

const campo= document.getElementById('campo');
const resultado= document.getElementById('resultado');
*/

/*
campo.addEventListener("input", ()=>{
     resultado.innerText=campo.value; // recebe o resultado do valor digitado em tempo real
})*/


//eventus keyup=> dispara ao soltar a tecla
/*
campo.addEventListener("keyup", ()=>{
     resultado.innerText=campo.value
     console.log("Tecla pressionado")
})*/


//Eventus de Mouse


const trocaCor=document.getElementById('troca-cor');


trocaCor.addEventListener("mouseover", ()=>{
     trocaCor.style.backgroundColor="#ff0000"
})

trocaCor.addEventListener("mouseout", ()=>{
     //trocaCor.style.backgroundColor="#0000ff";
     trocaCor.style.backgroundColor= "";
})
/*
document.addEventListener("mousemove", (evento)=>{
     console.log("posicao X", evento.clientX, "posicao Y", evento.clientY)
})*/

/*
const form =document.getElementById('form');


form.addEventListener('submit', (evento)=>{
     evento.preventDefault() //impede o recarregamento da pagina

     const nome = document.getElementById('nome').value
     console.log('Nome: ', nome);
})*/

const form =document.getElementById('form');
const botao =document.createElement('button');
const novoelemento = document.createElement('p');


botao.innerText="Apagar";
novoelemento.innerText= "elemento novo criado";


form.appendChild(botao)
form.appendChild(novoelemento)     //adicionando um novo elemento filho


botao.addEventListener("click", (e)=>{
     e.preventDefault();
     novoelemento.remove();


     //apagando direito do elemento pai
     //form.removeChild(novoelemento)
})

const input=document.getElementById('input');
const bt=document.getElementById('add')
const lista=document.getElementById('lista')

bt.addEventListener("click", ()=>{
     const valor=input.value       //pega o valor digitado na caixinha

     const li =document.createElement('li');
     li.innerText=valor;


     lista.appendChild(li);

     input.value="";
})


const inp=document.getElementById('plus');


inp.addEventListener("click", (e)=>{
    
     contador ++
     input.value=contador
     

     
     
})