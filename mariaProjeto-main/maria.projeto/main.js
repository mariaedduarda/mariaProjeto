
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const caixaResultado1 = document.querySelector(".caixa-principal");  
 
const perguntas = [
    {
        enunciado: "",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    
    {
        enunciado: "",
        alternativas: [
            {
                texto: ".",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
function mostraPerguntas(){
    perguntaAtual = pergunta[atual];
    caixaPerguntas.textContent = perguntas[0].enunciado;

}
 function mostraPerguntas(){
    if (atual >=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = pergunta[atual];
    caixaPerguntas.textoContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
 } 
  function mostraAlternativas(){   
      for(const alternativas of perguntaAtual.alternativas) {  
          const botaoAlternativas = document.createElement("button");
          botaoAlternativas.textContent = alternativas.texto;
          botaoAlternativas.addEventlistener("click",() => respostaSelecionada(alternativas));
          caixaAlternativas.append(botaoAlternativas);
      }
    }
    function respostaSelecionado(opcaoSelecionado) {  
    const afirmacoes = opcaoSelecionado.afirmacao;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();

    }
     function motraResultado() {  
        caixaPerguntas.textContent = "Em 2049...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
     } 
     







