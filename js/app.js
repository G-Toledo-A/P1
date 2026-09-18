//popstate listener detecta quando o usuário usa o botão "Voltar" e carrega o conteúdo correto.
window.addEventListener("popstate", function(event) {
    if (event.state && event.state.page) {
        loadPage(event.state.page, false); // Carrega a página sem adicionar novo estado ao histórico
    }
});

const barraNavegacao = document.getElementById(".navbar-nav");

const item = document.querySelectorAll(".navbar-nar .nav-link");
    
barraNavegacao.addEventListener("click",function(){

    // Remove o active de todos os botões
    document.querySelectorAll(".navbar-nav .nav-link")
        .forEach(link => {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
        });

    // Procura o botão correspondente à página
    const activeLink = document.querySelector(
        `.navbar-nav .nav-link[data-page="${page}"]`
    );

    // Coloca o active nele
    if (activeLink) {
        activeLink.classList.add("active");
        activeLink.setAttribute("aria-current", "page");
    }
    
    if (addHistory) {
        history.pushState({ page: page }, "", "#" + page);
    }
})
    

// Define um estado inicial no carregamento da página
document.addEventListener("DOMContentLoaded", function () {
    const initialPage = location.hash ? location.hash.substring(1) : "/index";
    loadPage(initialPage, false);
});

//Cadastro Eventos
/* exemplo de eventos
let id = 1;
let titulo = "Workshop de Git e Github";
let tipo = "Workshop";
let data = "2026-09-25";
let local = "lab02";
let descricao = "Atividade pratica sobre versionamento.";
let status = "Agendado.";
*/
const Eventos = [
    id,
    titulo,
    tipo,
    data,
    local,
    descricao,
    status
]

//pega id dos inputs / botões
const titulo = document.getElementById("titulo");
const tipo = document.getElementById("tipo");
const data = document.getElementById("data");
const local = document.getElementById("local");
const descricao = document.getElementById("descricao");

//pega o id do botao
const btnCad = document.getElementById("")

//cadastra dados
function validateForm() {
  const Eventos = document.forms[titulo][tipo][data][local][descricao].value;
  if (x == "") {
    alert("Area deve ser preenchida");
    return false;
  }
  return "Evento cadastrado com sucesso!";
}

//Dashboard
