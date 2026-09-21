//==================================navegacao==================================\\
//Ler o valor de data-view usando dataset.
const btnDashboard = document.querySelector('[data-view="dashboard"]');
const btnCadEvento = document.querySelector('[data-view="novo"]');
const btnCheckEvnt = document.querySelector('[data-view="eventos"]');

const sDash = document.getElementsByClassName("view-dashboard");
const sNovo = document.getElementsByClassName("view-novo");
const sEvnt = document.getElementsByClassName("view-eventos");

//Escutar o evento click.
btnDashboard.addEventListener("click",function(impede){
    //Impedir o comportamento padrão do link.
    impede.preventDefault();

    btnDashboard.classList.add("active");
    btnCadEvento.classList.remove("active");
    btnCheckEvnt.classList.remove("active");

    sDash[0].classList.remove("d-none");
    sNovo[0].classList.add("d-none");
    sEvnt[0].classList.add("d-none");
})

//Escutar o evento click.
btnCadEvento.addEventListener("click",function(impede){
    //Impedir o comportamento padrão do link.
    impede.preventDefault();

    btnDashboard.classList.remove("active");
    btnCadEvento.classList.add("active");
    btnCheckEvnt.classList.remove("active");

    sDash[0].classList.add("d-none");
    sNovo[0].classList.remove("d-none");
    sEvnt[0].classList.add("d-none");
})

//Escutar o evento click.
btnCheckEvnt.addEventListener("click",function(impede){
    //Impedir o comportamento padrão do link.
    impede.preventDefault();

    btnDashboard.classList.remove("active");
    btnCadEvento.classList.remove("active");
    btnCheckEvnt.classList.add("active");

    sDash[0].classList.add("d-none");
    sNovo[0].classList.add("d-none");
    sEvnt[0].classList.remove("d-none");
})

//Exibir o Dashboard ao abrir o sistema pela primeira vez.
document.addEventListener("DOMContentLoaded",function(){
    const navInicial = document.querySelector('[data-view="dashboard"]');
    const secInicial = document.getElementsByClassName("view-dashboard");

    navInicial.classList.add("active");
    secInicial[0].classList.remove("d-none");
})

//==================================Cad d eventos==================================\\
eventos = [
    {
        id:0,
        titulo:"Corrida",
        tipo:"Esporte",
        data:"01/02/2003",
        local:"Barra da Tijuca",
        descricao:"O evento ocorrerá em comemoração ao aniversário da cidade.",
        status:"Agendado"
    },
    {
        id:1,
        titulo:"Reunião dos fantoches",
        tipo:"Workshop",
        data:"04/05/2006",
        local:"Maranhão",
        descricao:"O evento ocorrerá para anunciar a abertura do clube de fantoches na escola de Raimundo F. Unido.",
        status:"Agendado"
    },
    {
        id:2,
        titulo:"Festa da Uva",
        tipo:"Festival",
        data:"07/08/2009",
        local:"São Tome dos Campos",
        descricao:"O evento ocorrerá de acordo com a tradição anual da cidade.",
        status:"Agendado"
    }
];

//pega id dos inputs / botões
const formulario= document.getElementById("form");
const titulo    = document.getElementById("titulo");
const tipo      = document.getElementById("tipo");
const data      = document.getElementById("data");
const local     = document.getElementById("local");
const descricao = document.getElementById("descricao");

//id criado fora do evento
let id = 3;

//cadastra dados
formulario.addEventListener("submit",function(){
    //Ler os valores digitados com .value.
    const nEvento = titulo.value;   //Remover espaços extras do título e do local usando trim().
    const tEvento = tipo.value;
    const dEvento = data.value;
    const lEvento = local.value;    //Remover espaços extras do título e do local usando trim().
    const dsEvent = descricao.value;

    const neSemEspaco = nEvento.trim();
    const leSemEspaco = lEvento.trim();

    //Validar todos os campos obrigatórios.
    if(nEvento == ""){
        //Se houver campo vazio, exibir uma mensagem de erro na própria página.
        alert("Falta preencher o nome");
        return false;
    }
    if(tEvento == null){
        alert("Falta preencher o tipo");
        return false;
    }
    if(dEvento == null){
        alert("Falta preencher a data");
        return false;
    }
    if(lEvento == ""){
        alert("Falta preencher o local");
        return false;
    }
    if(dsEvent == ""){
        alert("Falta preencher a descricao do evento");
        return false;
    }
    
    //Se estiver tudo correto, criar um novo objeto JavaScript.
    const Evento    = new Object();
    Evento.Id       = id++;         //Gerar um id que não repita o id dos eventos existentes.
    Evento.titulo   = neSemEspaco;
    Evento.tipo     = tEvento;
    Evento.data     = dEvento;
    Evento.local    = leSemEspaco;
    Evento.descricao= dsEvent;
    Evento.status   = "Agendado";   //O novo evento deve iniciar com status 'Agendado'.

    //Adicionar o novo objeto ao array eventos.
    eventos.push(Evento);

    alert("Evento cadastrado com sucesso!");

    formulario.reset()
})

//==================================Eventos==================================\\
const barraPesquisa = document.getElementById("inputFiltroProduto");
const cartoesEventos = document.getElementById("cartoes-eventos");

//montar e mostrar cartoes
/*
document.addEventListener("DOMContentLoaded",function(){
    const cartao = document.createElement("div");

    for (let i = 0; eventos.length; i++) {

    }
    cartao.innerHTML = `
        <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${eventos[i].titulo}</h5>
                <p class="card-text">${eventos[i.tipo]}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `
})
*/

barraPesquisa.addEventListener("input",function(){
    //deixa o item do input tudo minusculo
    const pesquisado = barraPesquisa.value.toLowerCase();

    for (let i = 0; i < eventos.length; i++) {
        //pegando os nomes dos eventos
        const nomeEvento = eventos[i][titulo].innerText.toLowerCase();
        
        //se a barra estiver vazia
        if (nomeEvento.includes(pesquisado)){
            //mostra tudo
            eventos[i].classList.remove("d-none");
        //se tiver algo escrito, só mostra o q estiver escrito
        } else {
            eventos[i].classList.add("d-none");
        }
    }
    
})