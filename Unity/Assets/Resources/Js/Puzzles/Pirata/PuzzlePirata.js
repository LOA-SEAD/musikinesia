#pragma strict

var alvo : GameObject;
var canhao : GameObject[];
var bala : GameObject;
static var etapa : int; //define em qual parte esta o puzzle

static var pontos: int;
static var chances : int; //define quantas vezes o jogador vai poder acertar o alvo em cada parte do puzzle

static var atiraBala : boolean; //permite que o jogador atire a bala do canhao
var audios : AudioClip[];

var tirosTexto : GameObject;
private var tirosTextoText : TextMesh;
var tirosQuantidade : int;

//Pause
static var isPause : boolean;
var pauseMenu : GameObject;

//teste
static var canhaoAtivo : boolean;

function Start () {

	//pause
	isPause = false;
	Time.timeScale = 1;
	AudioListener.pause = false;

	etapa = 0;
	pontos = 0;
	
	alvo.SetActive(false);
	bala.SetActive(false);
	canhao[0].SetActive(false);
	canhao[1].SetActive(false);
	canhao[2].SetActive(false);

	tirosTextoText = tirosTexto.GetComponent(TextMesh);
	tirosTextoText.text = "";
	tirosQuantidade = 6;
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
		if(PuzzlePirataBala.novaBola && chances <= 5 && pontos < 30)
			novosObjetos();
			tirosTextoText.text = tirosQuantidade.ToString();
		
		if(chances > 5 || pontos >= 30) {
			etapa = 0;
			tirosTextoText.text = "";
			tirosQuantidade = 6;
			
			PuzzlePirataTexto.liberaAcao = true;
			PuzzlePirataTexto.pausaAcao = false;
			
			if(pontos < 30) {
				if(PuzzlePirataTexto.i == 17 || PuzzlePirataTexto.i == 22 || PuzzlePirataTexto.i == 27){
					PuzzlePirataTexto.passaTexto = true;
				}
			}
			else {
				PuzzlePirataTexto.passaTexto = true;
				PuzzlePirataTexto.i += 2;
			}
				
		}
		
		if(atiraBala)
			Bala();
		
		if(PuzzlePirataBala.somImpacto) {
			GetComponent.<AudioSource>().PlayOneShot(audios[1]);
			PuzzlePirataBala.somImpacto = false;
		}
	}
		
}

function novosObjetos() {
	
	PuzzlePirataBala.novaBola = false;
	
	//desliga objetos para nao serem instanciados duas vezes	
	alvo.SetActive(false);
	canhao[0].SetActive(false);
	canhao[1].SetActive(false);
	canhao[2].SetActive(false);
	
	yield WaitForSeconds(0.2);
	
	Alvo();
	Canhao();	
	
}

function Alvo() {

	var val : int = Random.Range(0,3);
	
	print("alvo " + val);
	
	if(val == 0) {
		alvo.transform.position.y = 1.6;
		alvo.SetActive(true);
		}
		
	else if(val == 1) {
		alvo.transform.position.y = 0;
		alvo.SetActive(true);
		}
	
	else if(val == 2) {
		alvo.transform.position.y = -0.9;
		alvo.SetActive(true);
		}

}

function Canhao() {
	
	var val2 : int = Random.Range(0,3);
	
	print("canhao " + val2);
	
	canhao[val2].SetActive(true);
		
	PuzzlePirataTeclas.liberaTiro = true;

}

function Bala() {
	
	bala.transform.position = GameObject.FindGameObjectWithTag("Respawn").transform.position;
	bala.SetActive(true);
	GetComponent.<AudioSource>().PlayOneShot(audios[0]);
	//tirosTextoText.text = tirosQuantidade.ToString();
	tirosQuantidade--;
	
}

