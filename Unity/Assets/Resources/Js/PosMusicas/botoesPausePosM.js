#pragma strict
//script dos botoes do menu de pause, acionado durante o dialogo entre as musicas

static var menuVoltar : boolean; //acessado em PosMusicas.js e botaoMenu.js

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

	if(transform.position.y > -0.5) // y = 0
		{
		Time.timeScale = 1; //tempo volta ao normal
		PosMusicas.isPause = false;
		AudioListener.pause = false;
		PosMusicas.proximo = 0;
		Application.LoadLevel("PosMusicas");
		}
			
		
	if(transform.position.y < 0 && transform.position.y > -1) // y = -0.5
		{
		Time.timeScale = 1; //tempo volta ao normal
		PosMusicas.isPause = false;
		AudioListener.pause = false;
		Application.LoadLevel("Menu");
		}		
		
	if(transform.position.y < 0 && transform.position.y > -2) // y = -1
		menuVoltar = true;
		
	/*	
	if(transform.position.y < -10)
		{
		Time.timeScale = 1; //tempo volta ao normal
		PosMusicas.isPause = false;
		AudioListener.pause = false;
		Application.LoadLevel("Tutorial");
		}*/

}