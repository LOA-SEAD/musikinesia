#pragma strict
@script RequireComponent(AudioSource)

private var csScript : MidiInput;
csScript = this.GetComponent("MidiInput");

var channel : MidiChannel = MidiChannel.All;

private var noteNumber : int; //soma de noteNumberFirst e noteNumberNext;
static var noteNumberFirst : int; //primeira nota, definina no menu inicial;
var noteNumberNext : int; //soma um valor a nota inicial, pra definir só a primeira no inspector

var tecla : String = "a";

var numTecla : int; //distingue as teclas
var teclaDown : boolean; //verifica se uma tecla ja foi apertada. O jogador deve acertar tudo apos isso
static var etapaOK : boolean; //verifica se o jogador acertou aquela etapa

public var notas : AudioClip;

private var animator : Animator;

static var sustenido : boolean; //faz a bala do canhao ir pra cima
static var bemol : boolean; //faz a bala do canhao ir pra baixo
static var liberaTiro : boolean; //permite que o jogador atire

var balaFuncao : GameObject;

function Awake() {
	noteNumber = noteNumberFirst + noteNumberNext;
}

function Start () {

	animator = GetComponent(Animator);

}

function Update () {

	if(Input.GetKeyDown(tecla) || csScript.GetKeyDown (channel, noteNumber))
		TeclaApertada();
		
	if(Input.GetKeyUp(tecla) || csScript.GetKeyUp (channel, noteNumber))
		TeclaLevantada();

}

function OnMouseDown() {

	TeclaApertada();

}

function OnMouseUp() {

	TeclaLevantada();

}

function TeclaApertada() {
print (numTecla);

	animator.SetTrigger ("DoPress");
	GetComponent.<AudioSource>().PlayOneShot(notas);
	
	if(PuzzlePirata.etapa == 0)
		{
		if(PuzzlePirataTexto.pausaAcao)
			if((numTecla == 15 && PuzzlePirataTexto.i == 6) || (numTecla == 16 && PuzzlePirataTexto.i == 8) || (numTecla == 14 && PuzzlePirataTexto.i == 10))
				{
				PuzzlePirataTexto.liberaAcao = true;
				PuzzlePirataTexto.passaTexto = true;
				PuzzlePirataTexto.pausaAcao = false;
				}
		}
	
	if(PuzzlePirataTexto.i == 16)
		{
		if(numTecla == 2)
			bemol = true;
		
		if(numTecla == 3 && liberaTiro) {
			PuzzlePirata.atiraBala = true;
			PuzzlePirataBala.velBola = 3;
			liberaTiro = false;
			balaFuncao.SendMessage("Bala");
			}
		
		if(numTecla == 4)
			sustenido = true;
		}
	
	else if(PuzzlePirataTexto.i == 21)
		{
		if(numTecla == 11)
			bemol = true;
		
		if(numTecla == 12 && liberaTiro) {
			PuzzlePirata.atiraBala = true;
			PuzzlePirataBala.velBola = 4;
			liberaTiro = false;
			balaFuncao.SendMessage("Bala");
			}
		
		if(numTecla == 13)
			sustenido = true;
		}
	
	else if(PuzzlePirataTexto.i == 26)
		{
		if(numTecla == 17)
			bemol = true;
		
		if(numTecla == 18 && liberaTiro) {
			PuzzlePirata.atiraBala = true;
			PuzzlePirataBala.velBola = 5;
			liberaTiro = false;
			balaFuncao.SendMessage("Bala");
			}
		
		if(numTecla == 19)
			sustenido = true;
		}

}

function TeclaLevantada() {

	animator.SetTrigger ("UnPress");

}