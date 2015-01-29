#pragma strict
@script RequireComponent(AudioSource)

var tecla : String = "a";

var numTecla : int; //distingue as teclas
var teclaDown : boolean; //verifica se uma tecla ja foi apertada. O jogador deve acertar tudo apos isso
static var etapaOK : boolean; //verifica se o jogador acertou aquela etapa

public var notas : AudioClip;

private var animator : Animator;

static var sustenido : boolean; //faz a bala do canhao ir pra cima
static var bemol : boolean; //faz a bala do canhao ir pra baixo


function Start () {

	animator = GetComponent(Animator);

}

function Update () {

	if(Input.GetKeyDown(tecla))
		TeclaApertada();
		
	if(Input.GetKeyUp(tecla))
		TeclaLevantada();

}

function OnMouseDown() {

	TeclaApertada();

}

function OnMouseUp() {

	TeclaLevantada();

}

function TeclaApertada() {

	animator.SetTrigger ("DoPress");
	audio.PlayOneShot(notas);
	
	if(PuzzlePirata.etapa == 1)
		{
		if(numTecla == 2)
			bemol = true;
		
		if(numTecla == 4)
			sustenido = true;
		}

}

function TeclaLevantada() {

	animator.SetTrigger ("UnPress");

}