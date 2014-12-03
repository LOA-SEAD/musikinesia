#pragma strict

var tecla : String = "a";

var numTecla : int; //distingue as teclas
static var etapa : int; //define qual tecla deverah ser tocada em seguida

var teclaDown : boolean; //verifica se uma tecla ja foi apertada. O jogador deve acertar tudo apos isso
static var etapaOK : boolean; //verifica se o jogador acertou aquela etapa

var notas : AudioClip;

function Start () {

}

function Update () {

	if(Input.GetKeyDown(tecla))
		{
		if(PuzzleMafia.proximo == 3)
			Verificacao1();
		
		if(PuzzleMafia.proximo == 7)
			Verificacao2();
		
		if(PuzzleMafia.proximo == 11)
			Verificacao3();	
			
		teclaDown = true;
		}
	
	if(PuzzleMafia.perdeu)
		{
		etapa = 0;
		print("errou");
		PuzzleMafia.perdeu = false;
		}

}

function OnMouseDown(){

	if(PuzzleMafia.proximo == 3)
		Verificacao1();
		
	if(PuzzleMafia.proximo == 7)
		Verificacao2();
		
	if(PuzzleMafia.proximo == 11)
		Verificacao3();
			
	teclaDown = true;

}

function Verificacao1() {

	audio.PlayOneShot(notas);

	if(etapa == 0 || etapa == 3 || etapa == 6)
		if(numTecla == 2) //Re
			if(PuzzleMafia.tempoCerto)
				{
				etapa++;
					
				print(etapa);
				etapaOK = true;
				
				yield WaitForSeconds (0.2);
				
				etapaOK = false;
				}
	
	if(etapa == 1 || etapa == 4 || etapa == 7)
		if(numTecla == 4) //Fa
			if(PuzzleMafia.tempoCerto)
				{
				etapa++;
				
				print(etapa);
				etapaOK = true;
				
				yield WaitForSeconds (0.2);
				
				etapaOK = false;
				}
	
	if(etapa == 2 || etapa == 5 || etapa == 8)
		if(numTecla == 6) //La
			if(PuzzleMafia.tempoCerto)
				{
				etapa++;
				
				print(etapa);
				etapaOK = true;
				
				if(etapa < 9)
					{
					yield WaitForSeconds (0.2);
				
					etapaOK = false;
					}
					
				else
					{
					PuzzleMafia.chamaFuncao = true;
					etapa = 10;
					}
				}
				

}

function Verificacao2() {

	audio.PlayOneShot(notas);

	if(etapa == 0 || etapa == 3 || etapa == 6)
		if(numTecla == 6) //La
			if(PuzzleMafia.tempoCerto)
				{
				etapa++;
					
				print(etapa);
				etapaOK = true;
				
				yield WaitForSeconds (0.2);
				
				etapaOK = false;
				}
	
	if(etapa == 1 || etapa == 4 || etapa == 7)
		if(numTecla == 1) //Do
			if(PuzzleMafia.tempoCerto)
				{
				etapa++;
				
				print(etapa);
				etapaOK = true;
				
				yield WaitForSeconds (0.2);
				
				etapaOK = false;
				}
	
	if(etapa == 2 || etapa == 5 || etapa == 8)
		if(numTecla == 3) //Mi
			if(PuzzleMafia.tempoCerto)
				{
				etapa++;
				
				print(etapa);
				etapaOK = true;
				
				if(etapa < 9)
					{
					yield WaitForSeconds (0.2);
				
					etapaOK = false;
					}
					
				else
					{
					PuzzleMafia.chamaFuncao = true;
					etapa = 10;
					}
				}
				

}

function Verificacao3() {

	audio.PlayOneShot(notas);

	if(etapa == 0 || etapa == 3 || etapa == 6)
		if(numTecla == 3) //Mi
			if(PuzzleMafia.tempoCerto)
				{
				etapa++;
					
				print(etapa);
				etapaOK = true;
				
				yield WaitForSeconds (0.2);
				
				etapaOK = false;
				}
	
	if(etapa == 1 || etapa == 4 || etapa == 7)
		if(numTecla == 5) //Sol
			if(PuzzleMafia.tempoCerto)
				{
				etapa++;
				
				print(etapa);
				etapaOK = true;
				
				yield WaitForSeconds (0.2);
				
				etapaOK = false;
				}
	
	if(etapa == 2 || etapa == 5 || etapa == 8)
		if(numTecla == 7) //Si
			if(PuzzleMafia.tempoCerto)
				{
				etapa++;
				
				print(etapa);
				etapaOK = true;
				
				if(etapa < 9)
					{
					yield WaitForSeconds (0.2);
				
					etapaOK = false;
					}
					
				else
					{
					PuzzleMafia.chamaFuncao = true;
					etapa = 10;
					}
				}
				

}