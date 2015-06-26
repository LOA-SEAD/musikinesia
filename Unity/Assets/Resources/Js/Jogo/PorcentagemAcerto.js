#pragma strict
//script para definir quantos porcento o jogador acertou numa musica
//o numero total de notas eh contado atraves de: nota destruida + nota perdida (pra nao pecisar contar as notas de cada musica)

static var totalNotas : int; //define o numero de notas de uma musica (var generica); acessada em DestruirNotas.js e em ChecarTrigger.js
static var acertos : int; //define o numero de notas acertadas; acessada em ChecarTrigger.js
static var porcentagem : int; //porcentagem final de acerto; acessada em Pontuacao.js

function Start () {

	totalNotas = 0;
	acertos = 0;
	porcentagem = 0;

}

function Update () {

	if(Pontuacao.relog > 69 && Pontuacao.puzzle == 0) //&& !Pontuacao.treino
		porcentagem = acertos * 100 / totalNotas;

}