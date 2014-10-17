#pragma strict
//script dos botoes do menu de pause, acionado durante o jogo

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

	if(transform.position.y > -6)
		{
		Pontuacao.isPause = false;
		AudioListener.pause = false;
		Application.LoadLevel("Teclados_teste");
		ChecaPuzzle.proximo = 0;
		ChecaPuzzle.chamaFuncao = false;
		ChecaPuzzle.quadroOK = false;
		}
			
		
	if(transform.position.y < -6 && transform.position.y > -8)
		{
		Pontuacao.isPause = false;
		AudioListener.pause = false;
		Application.LoadLevel("Menu");
		}		
		
	if(transform.position.y < -8 && transform.position.y > -10)
		menuVoltar = true;
		
	if(transform.position.y < -10)
		{
		Time.timeScale = 1; //tempo volta ao normal
		Pontuacao.isPause = false;
		AudioListener.pause = false;
		Application.LoadLevel("Tutorial");
		}

}