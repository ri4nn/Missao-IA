const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
{
enunciado: "Qual é a principal causa do desmatamento na Floresta Amazônica",
alternativas: [
{
texto: "A expansão da agricultura, especialmente para pastagens de gado e plantações de soja.",
afirmacao: "O desmatamento na Amazônia é preocupante devido aos impactos ambientais graves, como perda de biodiversidade e aumento das emissões de carbono. É crucial implementar políticas de conservação e sustentabilidade para mitigar esses impactos. "
},
{
texto: "Exploração madeireira ilegal e atividades de mineração também contribuem significativamente.",
afirmacao: "O desmatamento na Amazônia é preocupante devido aos impactos ambientais graves, como perda de biodiversidade e aumento das emissões de carbono. É crucial implementar políticas de conservação e sustentabilidade para mitigar esses impactos."
}
]
},
{
enunciado: "De que maneira o desmatamento na Floresta Amazônica ameaça o conhecimento tradicional e os modos de vida das comunidades indígenas que dependem da floresta para sua subsistência?",
alternativas: [
{
texto: "O desmatamento na Amazônia deve ser controlado com políticas que equilibrem conservação ambiental e desenvolvimento econômico local.",
afirmacao: "Implementar políticas rigorosas de proteção ambiental, fortalecer a fiscalização contra atividades ilegais e promover práticas agrícolas sustentáveis são passos essenciais para mitigar o desmatamento na Floresta Amazônica, protegendo tanto a biodiversidade quanto os modos de vida das comunidades locais. "
},
{
texto: "É urgente implementar medidas para proteger a Floresta Amazônica e suas comunidades indígenas, garantindo um futuro sustentável para todos.",
afirmacao: "Implementar políticas rigorosas de proteção ambiental, fortalecer a fiscalização contra atividades ilegais e promover práticas agrícolas sustentáveis são passos essenciais para mitigar o desmatamento na Floresta Amazônica, protegendo tanto a biodiversidade quanto os modos de vida das comunidades locais."
}
]
},
{
enunciado: "Quais são os impactos ambientais mais preocupantes do desmatamento na Floresta Amazônica?",
alternativas: [
{
texto: "O desmatamento na Amazônia deve ser interrompido imediatamente para evitar danos irreparáveis ao meio ambiente.",
afirmacao: "Para combater o desmatamento na Amazônia, é essencial implementar políticas rigorosas de proteção ambiental, fortalecer a fiscalização contra atividades ilegais e promover práticas sustentáveis de uso da terra, garantindo assim a preservação da biodiversidade e dos recursos naturais da região. "
},
{
texto: "O desmatamento na Amazônia deve ser interrompido imediatamente para evitar danos irreparáveis ao meio ambiente.",
afirmacao: "Para combater o desmatamento na Amazônia, é essencial implementar políticas rigorosas de proteção ambiental, fortalecer a fiscalização contra atividades ilegais e promover práticas sustentáveis de uso da terra, garantindo assim a preservação da biodiversidade e dos recursos naturais da região."
}
]

},
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
caixaPerguntas.textContent = "Podemos concluir que...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}
mostraPergunta();
