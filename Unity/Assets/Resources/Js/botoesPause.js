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

	if(gameObject.tag == "bt1") //botao Recomecar
		{
		Pontuacao.isPause = false;
		AudioListener.pause = false;
		Application.LoadLevel("Teclados_teste");
		ChecaPuzzle.proximo = 0;
		ChecaPuzzle.chamaFuncao = false;
		ChecaPuzzle.quadroOK = false;
		}
			
		
	if(gameObject.tag == "bt2") //botao Menu Inicial
		{
		Pontuacao.isPause = false;
		AudioListener.pause = false;
		Application.LoadLevel("Menu");
		}		
		
	if(gameObject.tag == "bt3") //botao Voltar
		menuVoltar = true;
		
	if(gameObject.tag == "bt4") //botao Tutorial
		{
		Time.timeScale = 1; //tempo volta ao normal
		Pontuacao.isPause = false;
		AudioListener.pause = false;
		Application.LoadLevel("Tutorial");
		}

}