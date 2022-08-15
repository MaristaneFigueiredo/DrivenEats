
document.querySelector(".botao-pedido").disabled = true; 


let qtdeComida = 0;
let qtdeBebida = 0;
let qtdeSobremesa = 0;
let elemento, nomeComida, nomeBebida, nomeSobremesa, valorComida, valorBebida, valorSobremesa;


let qtdeItensSelecionado = 0;


/*
O parametro recebe o "this" do momento, que nesse caso é o "itens" clicado.
O forEach percorrerá todos os marcadores(que são todos os checks) e ocultará.
A variável "check" receberá a primeira classe "check" de "itens" e logo em seguida mudará o seu display. 
O mesmo raciocínio será para os pratos aplicando o estilo feito na classe "item selecionado"

obs.:forEach(para cada) é uma estrutura de repetição, mas para manipulação de elementos de um array. Mto útil qdo queremos aplicar uma determinada FUNÇÃO em todos os elementos do array

*/
function marcarComida(item){     
   
    let marcadores = document.querySelectorAll(".pratos .check"); // com o espaço a ordem não é direta, ou seja, os antecedentes que entram    
    marcadores.forEach(function (marcador){
        marcador.style.display = "none";
    });

    let pratos = document.querySelectorAll(".pratos .itens");    
    pratos.forEach(function (prato){
        prato.classList.remove("item-selecionado");    
    });

    let check = item.querySelector(".check");
    check.style.display="block";
    
    
    item.classList.add("item-selecionado");
    

    qtdeComida = 0;
    qtdeComida = 1;

    elemento = item.querySelector(".titulo-item");    
    nomeComida = elemento.textContent;      
    elemento = item.querySelector(".preco");    
    valorComida = Number((elemento.textContent.substring(3,7)).replace(',' , '.')); 
       
    
    calcularQtde();
}



function marcarBebida(item){    
    
    let marcadores = document.querySelectorAll(".bebidas .check");    
    marcadores.forEach(function (marcador){
        marcador.style.display = "none";
    });

    let bebidas = document.querySelectorAll(".bebidas .itens");    
    bebidas.forEach(function (bebida){
        bebida.classList.remove("item-selecionado");    
    });

    let check = item.querySelector(".check");
    check.style.display="block";
    
    
    item.classList.add("item-selecionado");
    
    
    
    qtdeBebida = 0;
    qtdeBebida = 1;

    

    elemento = item.querySelector(".titulo-item");
    nomeBebida = elemento.textContent;   
    elemento = item.querySelector(".preco");    
    valorBebida = Number((elemento.textContent.substring(3,7)).replace(',' , '.')); 
   

   
    calcularQtde();

   
}

function marcarSobremesa(item){

    let marcadores = document.querySelectorAll(".sobremesas .check");    
    marcadores.forEach(function (marcador){
        marcador.style.display = "none";
    });

    let sobremesas = document.querySelectorAll(".sobremesas .itens");    
    sobremesas.forEach(function (sobremesa){
        sobremesa.classList.remove("item-selecionado");    
    });

    let check = item.querySelector(".check");
    check.style.display="block";
    
    
    item.classList.add("item-selecionado");
   
   
    qtdeSobremesa = 0;
    qtdeSobremesa = 1;

     
    elemento = item.querySelector(".titulo-item");
    nomeSobremesa = elemento.textContent;    
    elemento = item.querySelector(".preco");    
    valorSobremesa = Number((elemento.textContent.substring(3,7)).replace(',' , '.')); 
    

    
    calcularQtde();
    
}





function calcularQtde(){

    qtdeItensSelecionado = qtdeComida + qtdeBebida + qtdeSobremesa;     
    
    tratarBotaoPedido();
   
}

function tratarBotaoPedido(){

    if (qtdeItensSelecionado === 3){
        document.querySelector(".botao-pedido").disabled = false; 
        document.querySelector(".botao-pedido").textContent = "Fechar Pedido";
 
    }
}

function calcularTotalPedido(){   
   return (valorComida + valorBebida + valorSobremesa).toFixed(2) ;
}


function enviarPedido(){
    
    const totalPedido = calcularTotalPedido();    
    console.log(totalPedido);
    
    
    
    

    const mensagemWhats = `Olá, gostaria de fazer o pedido:
    - Prato: ${nomeComida} 
    - Bebida: ${nomeBebida} 
    - Sobremesa: ${nomeSobremesa} 
    Total: R$ ${totalPedido}`; 
    
    
   
    const ativarLink= document.querySelector(".link-whats");

   
    // ativarLink.setAttribute("onclick","window.location.href='https://wa.me/5531999999999?text=mensagemWhats'");    
    // ativarLink.setAttribute('onclick','window.location.href="https://wa.me/5531999999999?text='+ mensagemWhats + '"');       
    
    


    ativarLink.setAttribute('onclick',' window.location.href="https://wa.me/5531999999999?text= '+ encodeURIComponent(mensagemWhats)+ '  "');   
    
    
    ativarLink.onclick();    
    



   
}







