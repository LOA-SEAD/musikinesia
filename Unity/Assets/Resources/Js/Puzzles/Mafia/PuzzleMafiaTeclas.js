#pragma strict

var tecla : String = "a";

var numTecla : int; //distingue as teclas
static var etapa : int; //define qual tecla deverah ser tocada em seguida

var teclaDown : boolean; //verifica se a tecla ta apertada

function Start () {

}

function Update () {

	if(Input.GetKeyDown(tecla))
		{
		Verificacao();
		teclaDown = true;
		}
	
	if(Input.GetKeyUp(tecla))
		teclaDown = false;

}

function Verificacao() {

	if(etapa == 0)
		if(numTecla == 6) //La
			if(PuzzleMafia.tempoCerto)
				{
				etapa = 1;
				print(etapa);
				}
	
	else if(etapa == 1)
		if(numTecla == 1) //Do
			if(PuzzleMafia.tempoCerto)
				{
				etapa = 2;
				print(etapa);
				}
	
	else if(etapa == 2)
		if(numTecla == 3) //Mi
			if(PuzzleMafia.tempoCerto)
				{
				print("beleza");
				print(etapa);
				}
				

}