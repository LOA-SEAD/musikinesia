#pragma strict
//script generico para todas as teclas
//define a açao das teclas do teclado


var trigger : GameObject; //trigger referente a tecla
var trigger50 : GameObject; //trigger referente a tecla - 50% do valor

static var teclaDown : boolean; //static para ser acessada em ChecarTrigger.js

var notas : AudioClip[]; //timbres
//notas 0 = original
//notas 1 = erro
//notas 2 = Suki - terceira musica
//notas 3 = Roger 1 - segunda musica
//notas 4 = Roger 2 - primeira musica

var corBranca : boolean;

var tecla : String = "a";

//puzzle
var x : float;
var z : float;
var quadro : GameObject;
var teclaPuzzle : int; //checa qual tecla que eh qual pelo inspector
static var etapaPuzzle : int; //checa em qual momento o puzzle estah (narrativa)

var relog : float;
var pontoNota : int;
var pontos : int;

function Start () {
	
	teclaDown = false;
	renderer.material.color = Color(1, 1, 1, 1);
	etapaPuzzle = 0;
	relog = 60;
	pontos = 0;
	
}

function Update () {
	
	if(corBranca)
		renderer.material.color = Color(1, 1, 1, 1);
	
	if(!Pontuacao.travaTeclas)	
		{
		if(Input.GetKeyDown(tecla))
			teclaApertada();
	
		if(Input.GetKeyUp(tecla))
			teclaLevantada();
		}
		
	if(Pontuacao.puzzle == 1)
		{
		if(etapaPuzzle == 6 && relog >= -0.1 && !ChecaPuzzle.quadroOK)
			relog -= Time.deltaTime;
		
		if(ChecaPuzzle.quadroOK)
			etapaPuzzle = 7;
		 
		if(relog <= 0) //derrota
			{
			etapaPuzzle = 0;
			ChecaPuzzle.proximo = 0;
			Derrota();
			}
		}
}

function OnMouseDown() {
	
	teclaApertada();
	
	//somente para o tutorial e para o puzzle
	if(Tutorial.proximo == 22 || Pontuacao.puzzle != 0)
		audio.PlayOneShot(notas[0]);
}

function OnMouseUp() {
	
	teclaLevantada();
	
}

function teclaApertada () {

	if(Pontuacao.puzzle == 1 && !ChecaPuzzle.quadroOK) //soh funciona no puzzle
		{
		
		pontoNota++; //soma nota
		
		if(etapaPuzzle == 1 && teclaPuzzle == 5) //nota Sol
			{
			print(etapaPuzzle);
			etapaPuzzle = -1;
			ChecaPuzzle.proximo++;
			ChecaPuzzle.chamaFuncao = true;
			}
		
		if(etapaPuzzle == 2 && teclaPuzzle == 1) //nota Do
			{
			print(etapaPuzzle);						
			quadro.transform.Rotate (0, 0, z);
			quadro.transform.Translate(0, x, 0);
			renderer.material.color = Color(0.7, 0.4, 0, 1);
			etapaPuzzle = -1;
			ChecaPuzzle.proximo++;
			ChecaPuzzle.chamaFuncao = true;
			}
		
		if(etapaPuzzle == 3 && teclaPuzzle == 4) //nota Fa
			{
			print(etapaPuzzle);			
			quadro.transform.Rotate (0, 0, z);
			quadro.transform.Translate(0, x, 0);
			renderer.material.color = Color(0.7, 0.4, 0, 1);
			etapaPuzzle = -1;
			ChecaPuzzle.proximo++;
			ChecaPuzzle.chamaFuncao = true;
			}
		
		if(etapaPuzzle == 4 && teclaPuzzle == 3) //nota Mi
			{
			print(etapaPuzzle);			
			quadro.transform.Rotate (0, 0, z);
			quadro.transform.Translate(0, x, 0);
			renderer.material.color = Color(0, 0.5, 0.9, 1);
			etapaPuzzle = -1;
			ChecaPuzzle.proximo++;
			ChecaPuzzle.chamaFuncao = true;
			}
		
		if(etapaPuzzle == 5 && teclaPuzzle == 7) //nota Si
			{
			print(etapaPuzzle);			
			quadro.transform.Rotate (0, 0, z);
			quadro.transform.Translate(0, x, 0);
			renderer.material.color = Color(0, 0.5, 0.9, 1);
			etapaPuzzle = -1;
			ChecaPuzzle.proximo++;
			ChecaPuzzle.chamaFuncao = true;
			}
		
		if(etapaPuzzle == 6) //as 4 notas
			{
			print(etapaPuzzle);			
			quadro.transform.Rotate (0, 0, z);
			quadro.transform.Translate(0, x, 0);
			}
			
		}	

	if(Pontuacao.puzzle == 0) //soh funciona nas musicas
		{	
		teclaDown = true;
		corBranca = false;
	
		if(teclaDown)
			{
			trigger.transform.collider.enabled = true; //habilita o trigger correspondente quando a tecla eh clicada
			trigger50.transform.collider.enabled = true; //habilita o trigger correspondente quando a tecla eh clicada
			}
		}
	
		yield WaitForSeconds(0.02);
	
		if(Pontuacao.numMusica2 < 2)
			audio.PlayOneShot(notas[4]); //tutorial com timbre da primeira musica
				
		//suki
		if(Pontuacao.numMusica2 == 2)
			audio.PlayOneShot(notas[2]);
		
		//roger1
		if(Pontuacao.numMusica2 == 3)
			audio.PlayOneShot(notas[3]);
				
		//roger2
		if(Pontuacao.numMusica2 == 4 || Pontuacao.numMusica2 == 5) //mudar qdo eu pegar as notas do Rock com o Suki
			audio.PlayOneShot(notas[4]);
				
		//rogerRock
		if(Pontuacao.numMusica2 == 6)
			audio.PlayOneShot(notas[6]);
	
	if(Pontuacao.puzzle == 0) //soh funciona nas musicas
		{	
		//troca de cor das teclas
		if(ChecarTrigger.maisPontos)
			renderer.material.color = Color(0, 0.7, 0, 1);
			else
				renderer.material.color = Color(0.7, 0, 0, 1);
		}
		
		/*
		//toca timbres diferentes de acordo com a musica escolhida
		switch(ChecarTrigger.maisPontos) {
				case true:
					renderer.material.color = Color(0, 0.7, 0, 1);
					if(Pontuacao.numMusica2 < 2)
						audio.PlayOneShot(notas[4]); //tutorial com timbre da primeira musica
					
					//suki
					if(Pontuacao.numMusica2 == 2)
						audio.PlayOneShot(notas[2]);
				
					//roger1
					if(Pontuacao.numMusica2 == 3)
						audio.PlayOneShot(notas[3]);
				
					//roger2
					if(Pontuacao.numMusica2 == 4 || Pontuacao.numMusica2 == 5) //mudar qdo eu pegar as notas do Rock com o Suki
						audio.PlayOneShot(notas[4]);
				
					//rogerRock
					if(Pontuacao.numMusica2 == 6)
						audio.PlayOneShot(notas[6]);
					break;
				
				case false: //o default significa que o jogador errou a tecla durante o jogo
					renderer.material.color = Color(0.7, 0, 0, 1);
					audio.PlayOneShot(notas[1]); //som de erro
					break;
				}
		*/

}

function teclaLevantada () {

	if(Pontuacao.puzzle == 0) //soh funciona nas musicas
		{
		corBranca = true;
		trigger.transform.collider.enabled = false; //desabilita o trigger correspondente quando a tecla eh solta
		trigger50.transform.collider.enabled = false; //desabilita o trigger correspondente quando a tecla eh solta
		ChecarTrigger.maisPontos = false;
		teclaDown = false;
		}

}

function OnGUI() {

	if(Pontuacao.puzzle == 1)
		{
		//relogio
		if(etapaPuzzle != 7)
			GUI.Box(Rect(Screen.width*0.8, Screen.height*0.20, Screen.width*0.1, Screen.height*0.05), relog.ToString());
		
		if(etapaPuzzle == 7)
			{
			pontos = Mathf.Abs(relog * 100 / pontoNota);	
			GUI.Box(Rect(Screen.width*0.8, Screen.height*0.30, Screen.width*0.1, Screen.height*0.05), pontos.ToString());
			}
		
		}
}

