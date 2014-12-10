#pragma strict

static var menuVoltar : boolean;

function Start () {

}

function Update () {

}


function OnMouseOver () {

	renderer.material.color -= Color(0, 0.1, 0.1, 0);

}

function OnMouseExit () {

	renderer.material.color = Color(1, 1, 1, 1);
	
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

}