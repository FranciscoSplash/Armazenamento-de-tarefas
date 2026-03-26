const inputTarefa =document.getElementById('input-tarefa');
const botaoadicionar=document.getElementById('adiccionar');
const listaTarefa =document.getElementById('lista-tarefas');


let tarefas=[];


function salvarTarefas(){
    /*
    localStorage-> armazena no local do navegador
    setItem -> salva o armazenamento  o conteudo recebido*/
    
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

//funcao para mostrar tarefas na tela



function mostrarTarefas(){
     listaTarefa.innerHTML="";

     for(let i=0; i<tarefas.length; i++){
        const li = document.createElement('li')

        li.innerText = tarefas[i]
     }
}