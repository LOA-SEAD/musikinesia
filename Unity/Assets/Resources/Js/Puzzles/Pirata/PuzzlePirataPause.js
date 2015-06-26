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
		PuzzlePirata.isPause = false;
		AudioListener.pause = false;
		Application.LoadLevel("PuzzlePirata");
		}
			
	if(gameObject.tag == "bt2") //botao Menu Inicial
		{
		PuzzlePirata.isPause = false;
		AudioListener.pause = false;
		Application.LoadLevel("Menu");
		}		
		
	if(gameObject.tag == "bt3") //botao Voltar
		menuVoltar = true;

}