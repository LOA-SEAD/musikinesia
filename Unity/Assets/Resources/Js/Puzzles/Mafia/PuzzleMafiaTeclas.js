#pragma strict

var tecla : String = "a";

var numTecla : int; //distingue as teclas
static var etapa : int; //define qual tecla deverah ser tocada em seguida

var teclaDown : boolean; //verifica se uma tecla ja foi apertada. O jogador deve acertar tudo apos isso
static var etapaOK : boolean; //verifica se o jogador acertou aquela etapa

var notas : AudioClip;

static var chamaFuncao : boolean;

static var combo : int; //acessada em PuzzleMafiaCombo

function Start () {

	chamaFuncao = false;

}

function Update () {

	if(Input.GetKeyDown(tecla))
		{
		if(PuzzleMafia.proximo == 3 || PuzzleMafia.proximo == 14)
			Verificacao1();
		
		if(PuzzleMafia.proximo == 7 || PuzzleMafia.proximo == 15)
			Verificacao2();
		
		if(PuzzleMafia.proximo == 11 || PuzzleMafia.proximo == 16)
			Verificacao3();	
			
		teclaDown = true;
		}
	
	if(PuzzleMafia.perdeu)
		{
		etapa = 0;
		//print("errou");
		combo = 0;
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
				combo++;
					
				print(etapa);
				etapaOK = true;
				chamaFuncao = true;
				
				yield WaitForSeconds (0.2);
				
				etapaOK = false;
				}
	
	if(etapa == 1 || etapa == 4 || etapa == 7)
		if(numTecla == 4) //Fa
			if(PuzzleMafia.tempoCerto)
				{
				etapa++;
				combo++;
				
				print(etapa);
				etapaOK = true;
				chamaFuncao = true;
				
				yield WaitForSeconds (0.2);
				
				etapaOK = false;
				}
	
	if(etapa == 2 || etapa == 5 || etapa == 8)
		if(numTecla == 6) //La
			if(PuzzleMafia.tempoCerto)
				{
				etapa++;
				combo++;
				
				print(etapa);
				etapaOK = true;
				chamaFuncao = true;
				
				if(etapa < 9)
					{
					yield WaitForSeconds (0.2);
				
					etapaOK = false;
					}
					
				else
					{
					PuzzleMafia.chamaFuncao = true;
					etapa = 10;
					combo = 0;
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
				combo++;
					
				print(etapa);
				etapaOK = true;
				chamaFuncao = true;
				
				yield WaitForSeconds (0.2);
				
				etapaOK = false;
				}
	
	if(etapa == 1 || etapa == 4 || etapa == 7)
		if(numTecla == 8) //Do4
			if(PuzzleMafia.tempoCerto)
				{
				etapa++;
				combo++;
				
				print(etapa);
				etapaOK = true;
				chamaFuncao = true;
				
				yield WaitForSeconds (0.2);
				
				etapaOK = false;
				}
	
	if(etapa == 2 || etapa == 5 || etapa == 8)
		if(numTecla == 10) //Mi4
			if(PuzzleMafia.tempoCerto)
				{
				etapa++;
				combo++;
				
				print(etapa);
				etapaOK = true;
				chamaFuncao = true;
				
				if(etapa < 9)
					{
					yield WaitForSeconds (0.2);
				
					etapaOK = false;
					}
					
				else
					{
					PuzzleMafia.chamaFuncao = true;
					etapa = 10;
					combo = 0;
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
				combo++;
					
				print(etapa);
				etapaOK = true;
				chamaFuncao = true;
				
				yield WaitForSeconds (0.2);
				
				etapaOK = false;
				}
	
	if(etapa == 1 || etapa == 4 || etapa == 7)
		if(numTecla == 5) //Sol
			if(PuzzleMafia.tempoCerto)
				{
				etapa++;
				combo++;
				
				print(etapa);
				etapaOK = true;
				chamaFuncao = true;
				
				yield WaitForSeconds (0.2);
				
				etapaOK = false;
				}
	
	if(etapa == 2 || etapa == 5 || etapa == 8)
		if(numTecla == 7) //Si
			if(PuzzleMafia.tempoCerto)
				{
				etapa++;
				combo++;
				
				print(etapa);
				etapaOK = true;
				chamaFuncao = true;
				
				if(etapa < 9)
					{
					yield WaitForSeconds (0.2);
				
					etapaOK = false;
					}
					
				else
					{
					PuzzleMafia.chamaFuncao = true;
					etapa = 10;
					combo = 0;
					}
				}
				

}