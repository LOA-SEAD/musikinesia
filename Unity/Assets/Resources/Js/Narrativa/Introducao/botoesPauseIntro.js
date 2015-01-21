#pragma strict
//script dos botoes do menu de pause, acionado durante o dialogo de introducao

static var menuVoltar : boolean; //acessado em Introducao.js e botaoMenu.js

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

	if(gameObject.tag == "bt1") //botao recomeçar
		{
		Time.timeScale = 1; //tempo volta ao normal
		Introducao.isPause = false;
		AudioListener.pause = false;
		Introducao.proximo = 0;
		
		if(Application.loadedLevel == "Introducao")
			Application.LoadLevel("Introducao");
		
		if(Application.loadedLevel == "NarrativaMafia")
			Application.LoadLevel("NarrativaMafia");
		}
			
		
	if(gameObject.tag == "bt2") //botao Menu
		{
		Time.timeScale = 1; //tempo volta ao normal
		Introducao.isPause = false;
		AudioListener.pause = false;
		Application.LoadLevel("Menu");
		}		
		
	if(gameObject.tag == "bt3") //botao voltar
		menuVoltar = true;
		
	/*	
	if(transform.position.y < -10)
		{
		Time.timeScale = 1; //tempo volta ao normal
		Introducao.isPause = false;
		AudioListener.pause = false;
		Application.LoadLevel("Tutorial");
		}*/

}