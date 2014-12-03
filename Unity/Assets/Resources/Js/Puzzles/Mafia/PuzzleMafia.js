#pragma strict

static var tempoCerto : boolean; //PuzzleMafiaTeclas.js

static var animTriggerNum : int;

var animTriggerPrefab : GameObject[];

var metronomo : AudioClip[];

static var perdeu : boolean;

var panela : GameObject[];

static var proximo : int;
static var chamaFuncao : boolean;

var texto : GameObject[];
var posicao : Vector3;
var visorTeclado : GameObject[];

var fundoPanela : GameObject;

function Start () {

	Animacao();
	chamaFuncao = false;
	
	panela[0].GetComponent(Animator).enabled = false;
	panela[1].GetComponent(Animator).enabled = false;
	panela[2].GetComponent(Animator).enabled = false;
	visorTeclado[0].renderer.enabled = false;
	visorTeclado[1].renderer.enabled = false;
	visorTeclado[2].renderer.enabled = false;
	fundoPanela.transform.position.x = -20;

}

function Update () {

	if(Input.GetKeyDown("space"))
		chamaFuncao = true;

	if(Input.GetKeyDown("a"))
		if(tempoCerto)
			print("ok");
	
	if(Input.GetKeyDown("s"))
		{		
		if(animTriggerNum < 3)
			animTriggerNum++;
		
		else
			animTriggerNum = 0;
		
		Animacao();
		}
	
	if(chamaFuncao)
		{
		proximo++;
		Animacao();
		chamaFuncao = false;
		}

}

function OnTriggerEnter(other : Collider) {

	tempoCerto = true;

}

function OnTriggerExit(other : Collider) {

	tempoCerto = false;
	
	if(!PuzzleMafiaTeclas.etapaOK)
		perdeu = true;

}

function Animacao() {
	
	//yield WaitForSeconds(0.1);
	
	posicao = Vector3(0.18, 0.96, 0); //instantiate do texto
	Instantiate(texto[proximo], posicao, Quaternion.identity);
	
	if(proximo == 3)
		{
		PuzzleMafiaTeclas.etapa = 0;
		Instantiate(animTriggerPrefab[0], Vector3(20, 0, 0), Quaternion.identity);
		audio.clip = metronomo[0];
		audio.Play();
		audio.loop = true;
		panela[0].GetComponent(Animator).enabled = true;
		visorTeclado[0].renderer.enabled = true;
		fundoPanela.transform.position.x = -5.5;
		}
		
	if(proximo == 7)
		{
		PuzzleMafiaTeclas.etapa = 0;
		Instantiate(animTriggerPrefab[1], Vector3(20, 0, 0), Quaternion.identity);
		audio.clip = metronomo[1];
		audio.Play();
		audio.loop = true;
		panela[1].GetComponent(Animator).enabled = true;
		visorTeclado[1].renderer.enabled = true;
		fundoPanela.transform.position.x = 0;
		}
	
	if(proximo == 11)
		{
		PuzzleMafiaTeclas.etapa = 0;
		Instantiate(animTriggerPrefab[2], Vector3(20, 0, 0), Quaternion.identity);
		audio.clip = metronomo[2];
		audio.Play();
		audio.loop = true;
		panela[2].GetComponent(Animator).enabled = true;
		visorTeclado[2].renderer.enabled = true;
		fundoPanela.transform.position.x = 5.5;
		}
	
	if(proximo == 4 || proximo == 8 || proximo == 12)
		{
		panela[0].GetComponent(Animator).enabled = false;
		panela[1].GetComponent(Animator).enabled = false;
		panela[2].GetComponent(Animator).enabled = false;
		visorTeclado[0].renderer.enabled = false;
		visorTeclado[1].renderer.enabled = false;
		visorTeclado[2].renderer.enabled = false;
		fundoPanela.transform.position.x = -20;
		audio.Stop();
		}
	
}
/*
function OnGUI() {

	if(tempoCerto)
		if(proximo == 3 || proximo == 7 || proximo == 11)
			GUI.Box(Rect(Screen.width*0.85, Screen.height*0.1, Screen.width*0.1, Screen.height*0.1), "");

}*/