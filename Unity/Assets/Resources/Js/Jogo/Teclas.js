#pragma strict
//script generico para todas as teclas
//define a açao das teclas do teclado


private var csScript : MidiInput;
csScript = this.GetComponent("MidiInput");

var channel : MidiChannel = MidiChannel.All;

var noteNumber : int = 36;

var trigger : GameObject; //trigger referente a tecla
var trigger50 : GameObject; //trigger referente a tecla - 50% do valor

static var teclaDown : boolean; //static para ser acessada em ChecarTrigger.js

var notas : AudioClip[]; //timbres
//notas 0 = original
//notas 1 = erro
//notas 2 = Suki - terceira musica
//notas 3 = Roger 1 - segunda musica
//notas 4 = Roger 2 - primeira musica
//notas 5 = Suki Rock - quinta musica
//notas 6 = Roger Rock - quarta musica

var corBranca : boolean;

var tecla : String = "a";
private var animator : Animator; 

//puzzle
var x : float;
var z : float;
var quadro : GameObject;
var teclaPuzzle : int; //checa qual tecla que eh qual pelo inspector
static var etapaPuzzle : int; //checa em qual momento o puzzle estah (narrativa)

static var pontoNota : int;

function Start () {
	
	animator = GetComponent(Animator);
	
	pontoNota = 0;
	
	teclaDown = false;
	renderer.material.color = Color(1, 1, 1, 1);
	etapaPuzzle = 0;
	
}

function Update () {
	
	if(corBranca)
		renderer.material.color = Color(1, 1, 1, 1);
	
	if(!Pontuacao.travaTeclas && !Pontuacao.isPause)	
		{
		if(Input.GetKeyDown(tecla) || csScript.GetKeyDown (channel, noteNumber))
			teclaApertada();

		if(Input.GetKeyUp(tecla) || csScript.GetKeyUp (channel, noteNumber))
			teclaLevantada();
		}
		
	if(Pontuacao.puzzle == 1)
		{
		if(teclaPuzzle == -1)
			renderer.material.color = Color(0.2, 0.2, 0.2, 1);
		
		if(ChecaPuzzle.proximo == 15)
			quadro.transform.position = Vector3(0, 1, -2.42);
		}
	
	//quando o jogador perde e recomeça pelo menu da tela de derrota
	if(ChecaPuzzle.proximo == 15)
		{
		if(teclaPuzzle == 1 || teclaPuzzle == 4)
			renderer.material.color = Color(0.7, 0.4, 0, 1);
		
		if(teclaPuzzle == 3 || teclaPuzzle == 7)
			renderer.material.color = Color(0, 0.5, 0.9, 1);
		}
			
}

function OnMouseDown() {
	
	if(!Pontuacao.travaTeclas && !Pontuacao.isPause)
		teclaApertada();
	
	//somente para o tutorial e para o puzzle
	if(Tutorial.proximo == 22 || Pontuacao.puzzle != 0)
		audio.PlayOneShot(notas[0]);
}

function OnMouseUp() {
	
	if(!Pontuacao.travaTeclas && !Pontuacao.isPause)
		teclaLevantada();
	
}

function teclaApertada () {

	animator.SetTrigger ("DoPress");

//Puzzle
	if(Pontuacao.puzzle == 1 && !ChecaPuzzle.quadroOK) //soh funciona no puzzle
		{
		
		pontoNota++; //soma nota
		
		if(etapaPuzzle == 1 && teclaPuzzle == 5) //nota Sol
			{
			etapaPuzzle = -1;
			ChecaPuzzle.proximo++;
			ChecaPuzzle.chamaFuncao = true;
			}
		
		if((etapaPuzzle == 2 && teclaPuzzle == 1) || (etapaPuzzle == 3 && teclaPuzzle == 4)) //nota Do e Fa
			{					
			quadro.transform.Rotate (0, 0, z);
			quadro.transform.Translate(0, x, 0);
			renderer.material.color = Color(0.7, 0.4, 0, 1);
			etapaPuzzle = -1;
			ChecaPuzzle.proximo++;
			ChecaPuzzle.chamaFuncao = true;
			}
		
		if((etapaPuzzle == 4 && teclaPuzzle == 3) || (etapaPuzzle == 5 && teclaPuzzle == 7)) //nota Mi e Si
			{		
			quadro.transform.Rotate (0, 0, z);
			quadro.transform.Translate(0, x, 0);
			renderer.material.color = Color(0, 0.5, 0.9, 1);
			etapaPuzzle = -1;
			ChecaPuzzle.proximo++;
			ChecaPuzzle.chamaFuncao = true;
			}
		
		if(etapaPuzzle == 6) //as 4 notas
			{	
			quadro.transform.Rotate (0, 0, z);
			quadro.transform.Translate(0, x, 0);
			}
		
		//liberar o movimento do quadro pras teclas ja pintadas
		
		if(ChecaPuzzle.proximo < 15)
			if((ChecaPuzzle.proximo > 3 && teclaPuzzle == 1) || (ChecaPuzzle.proximo > 6 && teclaPuzzle == 4) || (ChecaPuzzle.proximo > 10 && teclaPuzzle == 3) || (ChecaPuzzle.proximo > 12 && teclaPuzzle == 7))
				{				
				quadro.transform.Rotate (0, 0, z);
				quadro.transform.Translate(0, x, 0);
				}
		}	

//Musicas
	if(Pontuacao.puzzle == 0) //soh funciona nas musicas
		{	
		teclaDown = true;
		corBranca = false;
			
		trigger.transform.collider.enabled = true; //habilita o trigger correspondente quando a tecla eh clicada
		trigger50.transform.collider.enabled = true; //habilita o trigger correspondente quando a tecla eh clicada
		
		}
	
		yield WaitForSeconds(0.02);
	
		if(Pontuacao.numMusica2 < 2)
			audio.PlayOneShot(notas[4]); //tutorial com timbre da primeira musica
				
		//mus3
		if(Pontuacao.numMusica2 == 2)
			audio.PlayOneShot(notas[2]);
		
		//mus2
		if(Pontuacao.numMusica2 == 3)
			audio.PlayOneShot(notas[3]);
				
		//mus1
		if(Pontuacao.numMusica2 == 4)
			audio.PlayOneShot(notas[4]);
		
		//mus5
		if(Pontuacao.numMusica2 == 5)
			audio.PlayOneShot(notas[5]);
						
		//mus4
		if(Pontuacao.numMusica2 == 6)
			audio.PlayOneShot(notas[6]);
		
		//mus6
		if(Pontuacao.numMusica2 == 7)
			audio.PlayOneShot(notas[7]);
		
		//mus7
		if(Pontuacao.numMusica2 == 8)
			audio.PlayOneShot(notas[8]);
		
	
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
		
	yield WaitForSeconds(0.1);
			
	trigger.transform.collider.enabled = false; //desabilita o trigger correspondente quando a tecla eh solta
	trigger50.transform.collider.enabled = false; //desabilita o trigger correspondente quando a tecla eh solta

}

function teclaLevantada () {

	animator.SetTrigger ("UnPress");

	if(Pontuacao.puzzle == 0) //soh funciona nas musicas
		{
		corBranca = true;
		trigger.transform.collider.enabled = false; //desabilita o trigger correspondente quando a tecla eh solta
		trigger50.transform.collider.enabled = false; //desabilita o trigger correspondente quando a tecla eh solta
		//ChecarTrigger.maisPontos = false;
		teclaDown = false;
		}

}


