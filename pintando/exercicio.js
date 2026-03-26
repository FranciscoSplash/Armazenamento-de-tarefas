const botao=document.getElementById('botaotema');
const caixa=document.getElementById('caixa');
const titulo = document.getElementById('titulo');
const texto=document.getElementById('texto')
const corpoPagina=document.body;


let modoEscuroAtivo=false;


botao.addEventListener('click',()=>{
     if(modoEscuroAtivo ==false){
          corpoPagina.style.backgroundColor="#1e1e1e";
          corpoPagina.style.color="#eeeeee";
          caixa.style.backgroundColor="#333333"
          caixa.style.border="1px solid #ffffff";
          caixa.style.borderRadius="10px";
          botao.style.backgroundColor="#FFFFFFF";
          botao.style.color="#0000000";
          botao.style.border="none";

          titulo.style.color="#00FFFF";
          texto.style.color="#DDDDDD";


          botao.innerText="Ativar Modo Claro";


          modoEscuroAtivo = true;
     }
     else{
                 corpoPagina.style.backgroundColor="#ffffff";
                  corpoPagina.style.color="#0000000";
                 caixa.style.backgroundColor="#f4f4f4"
               caixa.style.border="1px solid #cccccc";
               caixa.style.borderRadius="10px";
               botao.style.backgroundColor="#000000";

               botao.style.color="#ffffff";
          botao.style.border="none";

          titulo.style.color="#222222";
          texto.style.color="#333333";
          botao.innerText="Ativar modo escuro";


          modoEscuroAtivo=false




          }
     
})