﻿	#pragma strict
//script inserido na MainCamera da cena Menu
//Zera as variaveis static de todos os scripts
//Organiza as animaçoes da tela de menu

var planoPreto : GameObject; //plano preto 70% para destacar alguma mensagem
var loading : GameObject; //texto de loading (TextMesh)

var positionIns : Vector3; //define a posicao de instantiate

var efeito : GameObject; //particulas atras do logo

var canvasMenu : Canvas;

function Start () {

	//zerar variaveis static
	Pontuacao.pontuacao = 0;
	Pontuacao.numMusica = 0;
	Pontuacao.numMusica2 = 0;
	Pontuacao.puzzle = 0;
	Pontuacao.multiplicador = 0;
	Pontuacao.combo = 0;
	Pontuacao.comboRestante = 0;
	Pontuacao.isPause = false;
	Pontuacao.inGameVolume = 0;
	Pontuacao.animacaoIn = 0;
	Pontuacao.treino = false;
	Pontuacao.escolhaOK = false; //tirar daqui quando nao tiver os botoes de escolha das musicas
	ChecarTrigger.maisPontos = false;
	ChecarTrigger.pontos = 0;
	ChecarTrigger.combo = 0;
	ChecarTrigger.vida = 30;
	ChecarTrigger.pontosFeitos = 0;
	Teclas.teclaDown = false;
	VelPrefab.speed = 0;
	Introducao.proximo = 0;
	Introducao.chamaAnimacao = false;
	PosMusicas.proximo = 0;
	Instanciar.jogar = false;
	planoPreto.renderer.enabled = false;
	ChecaPuzzle.proximo = 0;
	ChecaPuzzle.chamaFuncao = false;
	ChecaPuzzle.quadroOK = false;
	ChecaPuzzle.ajustaQuadro = false;
	ChecaPuzzle.relogInt = 0;
	ChecaPuzzle.pontos = 0;
	
	//pause
	Pontuacao.isPause = false; //desativa o pause do jogo (se estiver pausado)
	Time.timeScale = 1; //tempo de andamento do jogo normalizado
	AudioListener.pause = false; //desativa o pause do som do jogo (se estiver pausado)
	
	//desativa o modo treino
	Pontuacao.treino = false;
	
	
	
	yield WaitForSeconds(0.9);
	positionIns = Vector3(0, 0.5, 0);
	Instantiate(efeito, positionIns, Quaternion.identity);
	
	canvasMenu.GetComponent(Animator).enabled = true;

}

function Update () {

}