#pragma strict
//script generico a todos os triggers da marcacao rosa
//os triggers comecam desabilitados, sendo ligados quando a tecla correspondente eh apertada

static var maisPontos : boolean; //variavel que habilita a soma de pontos quando uma nota eh acertada; acessada em Pontuacao.js e em Teclas.js
static var pontos: int; //variavel que armazena a quantidade de pontos; acessada em Pontuacao.js
static var combo : int; //variavel que armazena o combo do jogador; acessada em Pontuacao.js

//var mostraErro : GameObject; //variavel do GameObject instanciado onde houve um erro

var explosao : GameObject; //variavel do GameObject instanciado depois de uma nota ser acertada e destruida

//var teclaDown : boolean; //variavel que reconhece que a tecla referente foi apertada

//var relog : float; //variavel que serve de relogio

static var vida : int; //numero que, de acordo com uma tabela de conversao, representa o valor das vidas do jogador

//mostrador de pontos feitos quando uma nota eh acertada
var mostraPontos : GameObject;
//var posicao : Vector3; //determina a posicao dos instantiates

//variavel usada para mostrar os pontos feitos por cada nota acertada
static var pontosFeitos: int; //acessado em ChecarTriggerFull e pontosFeitosMesh;

static var valorTeclaTocada : int; //pega o valor de cada tecla tocada;

private var notaOther : GameObject; //pega referencia de other : Collider pra ser usado em outra parte do codigo
static var checaNota : boolean; //checa se alguma nota entrou em algum collider pra bloquear a açao de outros colliders

function Awake () {
	gameObject.SetActive(true); //começa ativo pra rodar o awake
	
	pontos = 0;
	combo = 0;
	maisPontos = false;
	vida = 30;
	//posicao = Vector3(-6.5, 11.32382, -2); //posicao para instanciar um objeto.
	explosao.SetActive(false);
	gameObject.SetActive(false); //desliga para ser religado pela tecla respectiva

}

function OnEnable() {
	//DesligaTrigger();
}

//funcao executada quando uma nota entra no trigger
//o trigger de cada linha da pauta eh ativado quando uma tecla eh apertada
function OnTriggerEnter(other : Collider) {

	if(Teclas.notaTag == other.gameObject.tag || other.gameObject.tag == "notaTeclaComum") {
		maisPontos = true; //impede o acesso ao "if" que subtrai pontos
		//Destroy(other.gameObject); //destroi a nota acertada
		//Instantiate(explosao, other.transform.position, other.transform.rotation); //instancia a explosao da nota acertada (no mesmo local da nota)
		explosao.transform.position = other.transform.position;
		explosao.SetActive(true);
		notaOther = other.gameObject;
		DesativaNota();
		//DesativarExplosao();
	}

}

function Update () {

	if(Teclas.teclaDown)
		{
		Atraso();
		Teclas.teclaDown = false;
		}

}

function Atraso() {

	yield WaitForSeconds(0.02); //tempo pra maisPontos poder virar true
	
	Verificacao();

}

function Verificacao() {
	if(notaOther != null) {
		checaNota = true;
	}
	
	//print("trigger tecla apertada = " + Teclas.teclasApertadas );
	
		if(maisPontos)
			{
			if(Teclas.teclasApertadas == 1) {
				PorcentagemAcerto.totalNotas++; //soma 1 nota ao total de notas da musica
				PorcentagemAcerto.acertos++; //soma 1 as notas acertadas
				
				if(!Pontuacao.treino) //caso nao seja treino, os pontos e combos sao computados
					{
					combo++; //soma 1 no combo
					pontos += 5*Pontuacao.multiplicador; //soma a pontuacao 10 vezes o multiplicador definido em Pontuacao.js
					pontosFeitos += 5*Pontuacao.multiplicador; //soma a pontuacao 10 vezes o multiplicador definido em Pontuacao.js
					
					if(Tutorial.proximo != 22)
						Instantiate(mostraPontos); //instancia os pontos feitos pelo jogador ao acertar a nota;
					
					if(vida < 45)
						vida++;//se a vida for menor que 45 (relativo 7 vidas), soma-se 1 ao contador de vidas a cada acerto
					}
				}
			}
		
		else {
			if(!checaNota) {
				if(!Pontuacao.treino)
					{
					pontos -= 4; //subtrai 4 pontos da pontuacao geral
					combo = 0; //zera o combo
					Pontuacao.multiplicador = 1; //o multiplicador de pontos volta para 1
					vida--;
					}
				}
			}
			
		if(Teclas.teclasApertadas > 1) {
			if(!Pontuacao.treino)
				{
				pontos -= 4; //subtrai 4 pontos da pontuacao geral
				combo = 0; //zera o combo
				Pontuacao.multiplicador = 1; //o multiplicador de pontos volta para 1
				vida--;
				}
			}
			
			checaNota = false;
	
	yield WaitForEndOfFrame();
	
	//maisPontos = false;
	//gameObject.GetComponent.<Collider>().enabled = false;
	//gameObject.SetActive(false);
	//print("set false");

}

function DesativaNota() {
	yield WaitForEndOfFrame();
	notaOther.gameObject.SetActive(false);
}

function DesligaTrigger() {
	WaitForSeconds(0.1);
	gameObject.SetActive(false);
}
/*
function DesativarExplosao() {

	yield WaitForSeconds (0.2);
	explosao.SetActive(false);
	gameObject.SetActive(false);

}*/