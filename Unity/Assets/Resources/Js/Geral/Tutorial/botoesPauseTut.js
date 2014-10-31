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

	if(gameObject.tag == "bt1") //botao Recomeçar
		{
		Time.timeScale = 1; //tempo volta ao normal
		Tutorial.isPause = false;
		AudioListener.pause = false;
		Application.LoadLevel("Tutorial");
		}
			
		
	if(gameObject.tag == "bt2") //botao Menu
		{
		Time.timeScale = 1; //tempo volta ao normal
		Tutorial.isPause = false;
		AudioListener.pause = false;
		Application.LoadLevel("Menu");
		}		
		
	if(gameObject.tag == "bt3") //botao Voltar
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