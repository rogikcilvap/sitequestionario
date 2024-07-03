const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está prestes a terminar seus estudos e começar a procurar emprego. Como você se sente em relação a isso?",
        alternativas: [
            {
                texto: "Estou empolgado para começar minha carreira profissional!",
                afirmacao: "Está ansioso para colocar em prática o que aprendeu e começar a construir sua carreira."
            },
            {
                texto: "Estou um pouco nervoso, pois não sei exatamente por onde começar.",
                afirmacao: "Sente-se um pouco inseguro sobre como iniciar sua jornada profissional e busca orientação."
            }
        ]
    },
    {
        enunciado: "Durante uma entrevista de emprego, você é questionado sobre suas habilidades técnicas. Como você responde?",
        alternativas: [
            {
                texto: "Descrevo minhas habilidades técnicas com exemplos concretos de projetos que realizei.",
                afirmacao: "Sabe destacar suas habilidades com experiências práticas e evidências de seu conhecimento."
            },
            {
                texto: "Fico um pouco nervoso e não consigo descrever detalhadamente minhas habilidades.",
                afirmacao: "Percebe a necessidade de melhorar sua habilidade de comunicação durante entrevistas."
            }
        ]
    },
    {
        enunciado: "Após alguns meses de trabalho, surge a oportunidade de liderar um pequeno projeto. Como você reage?",
        alternativas: [
            {
                texto: "Aceito o desafio com entusiasmo e vejo como uma chance de aprender e crescer.",
                afirmacao: "Está motivado para assumir responsabilidades adicionais e buscar crescimento profissional."
            },
            {
                texto: "Fico um pouco inseguro, pois não tenho certeza se estou pronto para liderar.",
                afirmacao: "Reconhece a oportunidade, mas sente a necessidade de desenvolver mais habilidades de liderança."
            }
        ]
    },
    {
        enunciado: "Durante uma reunião, você sugere uma ideia para melhorar um processo da empresa, mas ela não é bem recebida pelos colegas. O que você faz?",
        alternativas: [
            {
                texto: "Escuto as críticas construtivas e busco entender como posso melhorar minha ideia.",
                afirmacao: "Valoriza o feedback e utiliza-o para aprender e ajustar suas abordagens no futuro."
            },
            {
                texto: "Fico desanimado e me calo nas próximas reuniões.",
                afirmacao: "Reage inicialmente de forma negativa, mas percebe a importância de continuar contribuindo."
            }
        ]
    },
    {
        enunciado: "Ao revisar seu desempenho após seis meses de trabalho, você percebe que algumas metas não foram alcançadas. Como você se sente?",
        alternativas: [
            {
                texto: "Vejo isso como uma oportunidade de aprender com meus erros e me esforço para melhorar.",
                afirmacao: "Adota uma postura de crescimento e utiliza os desafios como oportunidades para desenvolvimento pessoal."
            },
            {
                texto: "Fico desmotivado e começo a duvidar das minhas habilidades.",
                afirmacao: "Enfrenta momentos de dúvida, mas busca apoio e aprendizado para superar as dificuldades."
            }
        ]
    }
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Reflexões sobre o Início da Carreira: Lições Aprendidas";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
