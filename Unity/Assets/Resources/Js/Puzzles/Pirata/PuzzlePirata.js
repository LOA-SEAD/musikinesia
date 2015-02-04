#pragma strict

var alvo : GameObject;
var canhao : GameObject[];
var bola : GameObject;
static var etapa : int; //define em qual parte esta o puzzle

static var pontos: int;
static var chances : int; //define quantas vezes o jogador vai poder acertar o alvo em cada parte do puzzle

static var atiraBala : boolean; //permite que o jogador atire a bala do canhao

//Pause
static var isPause : boolean;
var pauseMenu : GameObject;

function Start () {

	//pause
	isPause = false;
	Time.timeScale = 1;
	AudioListener.pause = false;

	etapa = 0;
	pontos = 0;

}

function Update() {

	//pause
	if(Input.GetKeyDown(KeyCode.Escape) || PuzzlePirataPause.menuVoltar) { //aperta ESC
		isPause = !isPause; //troca entre pausado e despausado
		AudioListener.pause = !AudioListener.pause; //pausa e despausa o audio
		PuzzlePirataPause.menuVoltar = false;  //desativa a variavel
		if(isPause)	{
			Time.timeScale = 0; //congela toda a movimentacao
			pauseMenu.transform.position.y = 0; //desce o menu de pause para o centro da tela
		} 
			else {
				Time.timeScale = 1; //tempo volta ao normal
				pauseMenu.transform.position.y = 15; //menu de pause volta a se esconder acima do quadro
				PuzzlePirataPause.menuVoltar = false; //desativa a booleana que tira o pause
			}
	}	

	if(etapa == 1) {
		if(PuzzlePirataBala.novaBola && chances <= 5)
			novosObjetos();
		
		if(chances > 5) {
			etapa = 0;
			
			PuzzlePirataTexto.liberaAcao = true;
			PuzzlePirataTexto.pausaAcao = false;
			
			if(pontos < 30) {
				if(PuzzlePirataTexto.i == 17 || PuzzlePirataTexto.i == 21 || PuzzlePirataTexto.i == 25){
					PuzzlePirataTexto.passaTexto = true;
				}
			}
			else {
				PuzzlePirataTexto.passaTexto = true;
				PuzzlePirataTexto.i += 2;
			}
				
		}
		
		if(atiraBala){
			Instantiate(bola, GameObject.FindGameObjectWithTag("Respawn").transform.position, Quaternion.identity);
			atiraBala = false;
		}
		
	}
		
}

function novosObjetos() {
	
	PuzzlePirataBala.novaBola = false;
	
	yield WaitForSeconds(0.2);
	
	Alvo();
	Canhao();	
	
}

function Alvo() {

	var val : int = Random.Range(0,2);
	
	if(val < 1)
		Instantiate(alvo, Vector3(6.45, 1.6, 3), Quaternion.identity);
		
	else if(val == 1)
		Instantiate(alvo, Vector3(6.45, 0, 3), Quaternion.identity);
	
	else if(val > 1)
		Instantiate(alvo, Vector3(6.45, -0.9, 3), Quaternion.identity);

}

function Canhao() {
	
	var val2 : int = Random.Range(0,2);
	
	if(val2 < 1)
		Instantiate(canhao[0]);
		
	else if(val2 == 1)
		Instantiate(canhao[1]);
	
	else if(val2 > 1)
		Instantiate(canhao[2]);

}