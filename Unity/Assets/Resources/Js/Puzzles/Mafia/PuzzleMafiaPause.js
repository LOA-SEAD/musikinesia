#pragma strict

static var menuVoltar : boolean;

function Start () {

}

function Update () {

}


function OnMouseOver () {

	GetComponent.<Renderer>().material.color -= Color(0, 0.1, 0.1, 0);

}

function OnMouseExit () {

	GetComponent.<Renderer>().material.color = Color(1, 1, 1, 1);
	
}

function OnMouseDown () {

	Escolha();	

}

function Escolha () {

	if(gameObject.tag == "bt1") //botao Recomecar
		{
		PuzzleMafia.isPause = false;
		AudioListener.pause = false;
		Application.LoadLevel("PuzzleMafia");
		}
			
	if(gameObject.tag == "bt2") //botao Menu Inicial
		{
		PuzzleMafia.isPause = false;
		AudioListener.pause = false;
		Application.LoadLevel("Menu");
		}		
		
	if(gameObject.tag == "bt3") //botao Voltar
		menuVoltar = true;
	
	if(gameObject.tag == "bt4") //botao Treino
		{
		Pontuacao.treino = true;
		Pontuacao.numMusica = 0;
		Pontuacao.puzzle = 0;
		Application.LoadLevel("Jogo");
		}
		
	if(gameObject.tag == "bt5") //botao Tutorial
		{
		
		Pontuacao.numMusica = 0;
		Pontuacao.puzzle = 0;
		Tutorial.proximo = 0;
		Tutorial.voltar = 0;
		Tutorial.btProximo = false;
		Tutorial.btVoltar = false;
		Tutorial.chamarAnimacao = false;
		Tutorial.chamarVoltar = false;
		Tutorial.isPause = false;
		Time.timeScale = 1; //tempo volta ao normal
		Pontuacao.isPause = false;
		AudioListener.pause = false;
		Application.LoadLevel("Tutorial");
		}

}