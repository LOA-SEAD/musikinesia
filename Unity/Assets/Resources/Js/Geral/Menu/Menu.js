	#pragma strict
//script inserido na MainCamera da cena Menu
//Zera as variaveis static de todos os scripts
//Organiza as animaçoes da tela de menu

var planoPreto : GameObject; //plano preto 70% para destacar alguma mensagem
var loading : GameObject; //texto de loading (TextMesh)

var positionIns : Vector3; //define a posicao de instantiate

var canvasMenu : Canvas;

var efeitoFundo : GameObject;
var fundo : GameObject;

function Start () {

	//canvasMenu.GetComponent(Animator).enabled = true;

	//zerar variaveis static
	Pontuacao.pontuacao = 0;
	Pontuacao.pontuacaoFinal = 0;
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
	ChecarTrigger.valorTeclaTocada = 0;
	
	Teclas.teclaDown = false;
	Teclas.etapaPuzzle = 0;
	Teclas.pontoNota = 0;
	//Teclas.notaTag = "";
	
	VelPrefab.speed = 0;
	
	Introducao.proximo = 0;
	Introducao.chamaAnimacao = false;
	
	PosMusicas.proximo = 0;
	
	Instanciar.jogar = false;
	
	planoPreto.GetComponent.<Renderer>().enabled = false;
	
	ChecaPuzzle.proximo = 0;
	ChecaPuzzle.chamaFuncao = false;
	ChecaPuzzle.quadroOK = false;
	ChecaPuzzle.ajustaQuadro = false;
	ChecaPuzzle.relogInt = 0;
	ChecaPuzzle.pontos = 0;
	
	botoesPause.menuVoltar = false;
	
	PorcentagemAcerto.totalNotas = 0;
	PorcentagemAcerto.acertos = 0;
	PorcentagemAcerto.porcentagem = 0;
	
	MafiaNarrativa.proximo = 0;
	MafiaNarrativa.btProximo = false;
	MafiaNarrativa.chamaFuncao = false;
	MafiaNarrativa.isPause = false;
	
	NarrativaPirata.atiraCanhao = false;
	NarrativaPirata.proximo = 0;
	NarrativaPirata.chamaPosicao = false;
	NarrativaPirata.chamaSprite = false;
	NarrativaPirata.travaMudaPosicao = false;
	
	Tutorial.proximo = 0;
	Tutorial.voltar = 0;
	Tutorial.btProximo = false;
	Tutorial.btVoltar = false;
	Tutorial.chamarAnimacao = false;
	Tutorial.chamarVoltar = false;
	Tutorial.isPause = false;
	
	//pause
	Pontuacao.isPause = false; //desativa o pause do jogo (se estiver pausado)
	Time.timeScale = 1; //tempo de andamento do jogo normalizado
	AudioListener.pause = false; //desativa o pause do som do jogo (se estiver pausado)
	
	//desativa o modo treino
	Pontuacao.treino = false;
	
	fundo.SetActive(true);
	
	yield WaitForSeconds (3);
	
	efeitoFundo.SetActive(true);

}

function Update () {

}
