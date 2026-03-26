const botaoadicionar=document.getElementById('botao-adicionar')
const lista=document.getElementById('lista');



botaoadicionar.addEventListener('click',()=>{
     const li = document.createElement('li')
     const texto =document.createElement('p');
     texto.innerText ="novo item";


     //criar botao de lixeira

     const botaoLixeia= document.createElement('button');
     botaoLixeia.innerText="🗑️"
     botaoLixeia.style.border="none";
     botaoLixeia.style.cursor="pointer";
     botaoLixeia.style.backgroundColor="none"


     //remover
     botaoLixeia.addEventListener("click", ()=>{
          li.remove();
     })

     li.appendChild(texto);
     li.appendChild(botaoLixeia);
     lista.appendChild(li);
})