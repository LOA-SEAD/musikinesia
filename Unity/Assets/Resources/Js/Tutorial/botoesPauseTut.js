#pragma strict
//script dos botoes do menu de pause, acionado durante o tutorial

static var menuVoltar : boolean; //acessado em Pontuacao.js e botaoMenu.js

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

	if(transform.position.y > 2) // y = 3
		{
		Time.timeScale = 1; //tempo volta ao normal
		Tutorial.isPause = false;
		AudioListener.pause = false;
		Application.LoadLevel("Tutorial");
		}
			
		
	if(transform.position.y < 2 && transform.position.y > 0) // y = 1
		{
		Time.timeScale = 1; //tempo volta ao normal
		Tutorial.isPause = false;
		AudioListener.pause = false;
		Application.LoadLevel("Menu");
		}		
		
	if(transform.position.y < 0 && transform.position.y > -2) // y = -1
		menuVoltar = true;
		
	/*	
	if(transform.position.y < -10)
		{
		Time.timeScale = 1; //tempo volta ao normal
		Tutorial.isPause = false;
		AudioListener.pause = false;
		Application.LoadLevel("Tutorial");
		}*/

}