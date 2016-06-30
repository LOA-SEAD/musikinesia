#pragma strict
//script generico para todas as teclas
//define a açao das teclas do teclado

var sustenido : boolean; //define que uma tecla eh sustenido e nao sera usada ate a musica 10

private var csScript : MidiInput;
csScript = this.GetComponent("MidiInput");

var channel : MidiChannel = MidiChannel.All;

private var noteNumber : int; //soma de noteNumberFirst e noteNumberNext;
static var noteNumberFirst : int; //primeira nota, definina no menu inicial;
var noteNumberNext : int; //soma um valor a nota inicial, pra definir só a primeira no inspector

var trigger : GameObject; //trigger referente a tecla
var trigger50 : GameObject; //trigger referente a tecla - 50% do valor
var trigger2 : GameObject; //trigger referente a tecla
var trigger250 : GameObject; //trigger referente a tecla - 50% do valor
var triggerVazio : GameObject; //trigger vazio para referenciar os sustenidos nas musicas que nao sao usados

static var teclaDown : boolean; //static para ser acessada em ChecarTrigger.js

var notas : AudioClip[]; //timbres
//notas 0 = original
//notas 1 = erro
//notas 2 = Suki - terceira musica
//notas 3 = Roger 1 - segunda musica
//notas 4 = Roger 2 - primeira musica
//notas 5 = Suki Rock - quinta musica
//notas 6 = Roger Rock - quarta musica

var somAcerto : AudioClip; //toca quando o jogador acertou a tecla que o pai pediu

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

static var notaTag : String;

static var teclasApertadas : int; //define quantas teclas estao apertadas ao mesmo tempo. Mais de 1 faz o jogador perder pontos

function Awake() {
	noteNumber = noteNumberFirst + noteNumberNext;
}

function Start () {
	
	animator = GetComponent(Animator);
	
	pontoNota = 0;
	
	teclaDown = false;
	GetComponent.<Renderer>().material.color = Color(1, 1, 1, 1);
	etapaPuzzle = 0;
	
	if(Pontuacao.numMusica < 10 && sustenido) { //musicas que nao usam sustenido
			trigger = triggerVazio;
			trigger50 = triggerVazio;
			trigger2 = triggerVazio;
			trigger250 = triggerVazio;
		}
	
}

function Update () {
	
	if(corBranca)
		GetComponent.<Renderer>().material.color = Color(1, 1, 1, 1);
	
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
			GetComponent.<Renderer>().material.color = Color(0.2, 0.2, 0.2, 1);
		
		if(ChecaPuzzle.proximo == 15)
			quadro.transform.position = Vector3(0, 1, -2.42);
		}
	
	//quando o jogador perde e recomeça pelo menu da tela de derrota
	if(ChecaPuzzle.proximo == 15)
		{
		if(teclaPuzzle == 1 || teclaPuzzle == 4)
			GetComponent.<Renderer>().material.color = Color(0.7, 0.4, 0, 1);
		
		if(teclaPuzzle == 3 || teclaPuzzle == 7)
			GetComponent.<Renderer>().material.color = Color(0, 0.5, 0.9, 1);
		}
			
}

function OnMouseDown() {
	
	if(!Pontuacao.travaTeclas && !Pontuacao.isPause)
		teclaApertada();
	
	//somente para o tutorial e para o puzzle
	if(Tutorial.proximo == 22 || Pontuacao.puzzle != 0)
		GetComponent.<AudioSource>().PlayOneShot(notas[0]);
}

function OnMouseUp() {
	
	if(!Pontuacao.travaTeclas && !Pontuacao.isPause)
		teclaLevantada();
	
}

function teclaApertada () {

	animator.SetTrigger ("DoPress");
	
	notaTag = gameObject.tag;
	teclasApertadas++;
	//print (notaTag);

//Puzzle
	if(Pontuacao.puzzle == 1 && !ChecaPuzzle.quadroOK ) //soh funciona no puzzle
		{
		
		pontoNota++; //soma nota
		
		if(etapaPuzzle == 1 && teclaPuzzle == 5) //nota Sol
			{
			etapaPuzzle = -1;
			ChecaPuzzle.proximo++;
			ChecaPuzzle.chamaFuncao = true;
			//GetComponent.<AudioSource>().PlayOneShot(somAcerto);
			}
		
		if((etapaPuzzle == 2 && teclaPuzzle == 1) || (etapaPuzzle == 3 && teclaPuzzle == 4)) //nota Do e Fa
			{					
			quadro.transform.Rotate (0, 0, z);
			quadro.transform.Translate(0, x, 0);
			GetComponent.<Renderer>().material.color = Color(0.7, 0.4, 0, 1);
			etapaPuzzle = -1;
			ChecaPuzzle.proximo++;
			ChecaPuzzle.chamaFuncao = true;
			//GetComponent.<AudioSource>().PlayOneShot(somAcerto);
			}
		
		if((etapaPuzzle == 4 && teclaPuzzle == 3) || (etapaPuzzle == 5 && teclaPuzzle == 7)) //nota Mi e Si
			{		
			quadro.transform.Rotate (0, 0, z);
			quadro.transform.Translate(0, x, 0);
			GetComponent.<Renderer>().material.color = Color(0, 0.5, 0.9, 1);
			etapaPuzzle = -1;
			ChecaPuzzle.proximo++;
			ChecaPuzzle.chamaFuncao = true;
			//GetComponent.<AudioSource>().PlayOneShot(somAcerto);
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
		
		/*	
		trigger.GetComponent.<Collider>().enabled = true; //habilita o trigger correspondente quando a tecla eh clicada
		trigger50.GetComponent.<Collider>().enabled = true; //habilita o trigger correspondente quando a tecla eh clicada
		trigger2.GetComponent.<Collider>().enabled = true; //habilita o trigger correspondente quando a tecla eh clicada
		trigger250.GetComponent.<Collider>().enabled = true; //habilita o trigger correspondente quando a tecla eh clica
		*/
		trigger.SetActive(true);
		trigger50.SetActive(true);
		
		if(Pontuacao.numMusica2 >= 10) {
			trigger2.SetActive(true);
			trigger250.SetActive(true);
		}
		
	}
		
	
		yield WaitForSeconds(0.02);
		
		switch(Pontuacao.numMusica2) {
		//case 0: //tutorial com timbre da primeira musica
		//case 1: //tutorial com timbre da primeira musica
		//case 4: //mus1
		//GetComponent.<AudioSource>().PlayOneShot(notas[4]);
		//	break;
			
		case 2: //mus3
			GetComponent.<AudioSource>().PlayOneShot(notas[2]);
			break;
			
		case 3: //mus2
			GetComponent.<AudioSource>().PlayOneShot(notas[3]);
			break;
			
		case 5: //mus5
			GetComponent.<AudioSource>().PlayOneShot(notas[5]);
			break;
			
		case 6: //mus4
			GetComponent.<AudioSource>().PlayOneShot(notas[6]);
			break;
			
		case 8: //mus6
			GetComponent.<AudioSource>().PlayOneShot(notas[7]);
			break;
			
		case 7: //mus7
			GetComponent.<AudioSource>().PlayOneShot(notas[8]);
			break;
			
		case 10: //mus10
			GetComponent.<AudioSource>().PlayOneShot(notas[10]);
			break;
			
		case 11: //mus11
			GetComponent.<AudioSource>().PlayOneShot(notas[11]);
			break;
			
		default:
			GetComponent.<AudioSource>().PlayOneShot(notas[4]);
			break;
		}
	/*
		if(Pontuacao.numMusica2 < 2)
			GetComponent.<AudioSource>().PlayOneShot(notas[4]); //tutorial com timbre da primeira musica
				
		//mus3
		if(Pontuacao.numMusica2 == 2)
			GetComponent.<AudioSource>().PlayOneShot(notas[2]);
		
		//mus2
		if(Pontuacao.numMusica2 == 3)
			GetComponent.<AudioSource>().PlayOneShot(notas[3]);
				
		//mus1
		if(Pontuacao.numMusica2 == 4)
			GetComponent.<AudioSource>().PlayOneShot(notas[4]);
		
		//mus5
		if(Pontuacao.numMusica2 == 5)
			GetComponent.<AudioSource>().PlayOneShot(notas[5]);
						
		//mus4
		if(Pontuacao.numMusica2 == 6)
			GetComponent.<AudioSource>().PlayOneShot(notas[6]);
		
		//mus6
		if(Pontuacao.numMusica2 == 8)
			GetComponent.<AudioSource>().PlayOneShot(notas[7]);
		
		//mus7
		if(Pontuacao.numMusica2 == 7)
			GetComponent.<AudioSource>().PlayOneShot(notas[8]);
		
		//mus10
		if(Pontuacao.numMusica2 == 10)
			GetComponent.<AudioSource>().PlayOneShot(notas[10]);
				
		//mus11
		if(Pontuacao.numMusica2 == 11)
			GetComponent.<AudioSource>().PlayOneShot(notas[11]);
		*/
	
	if(Pontuacao.puzzle == 0) //soh funciona nas musicas
		{	
		//troca de cor das teclas
		if(ChecarTrigger.maisPontos && teclasApertadas == 1)
			GetComponent.<Renderer>().material.color = Color(0, 0.7, 0, 1);
			else
				GetComponent.<Renderer>().material.color = Color(0.7, 0, 0, 1);
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
	/*		
	trigger.GetComponent.<Collider>().enabled = false; //desabilita o trigger correspondente quando a tecla eh solta
	trigger50.GetComponent.<Collider>().enabled = false; //desabilita o trigger correspondente quando a tecla eh solta
	trigger2.GetComponent.<Collider>().enabled = false; //desabilita o trigger correspondente quando a tecla eh solta
	trigger250.GetComponent.<Collider>().enabled = false; //desabilita o trigger correspondente quando a tecla eh solta
	
	*/
	trigger.SetActive(false);
	trigger50.SetActive(false);
	trigger2.SetActive(false);
	trigger250.SetActive(false);
	
	

}

function teclaLevantada () {

	animator.SetTrigger ("UnPress");
	teclasApertadas = 0;
	//print("teclasApertadas = " + teclasApertadas);

	if(Pontuacao.puzzle == 0) //soh funciona nas musicas
		{
		corBranca = true;
		//trigger.GetComponent.<Collider>().enabled = false; //desabilita o trigger correspondente quando a tecla eh solta
		//trigger50.GetComponent.<Collider>().enabled = false; //desabilita o trigger correspondente quando a tecla eh solta
		//ChecarTrigger.maisPontos = false;
		teclaDown = false;
		ChecarTrigger.maisPontos = false;
		}

}


