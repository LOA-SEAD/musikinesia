#pragma strict

var tecla : String = "a";

var numTecla : int; //distingue as teclas
static var etapa : int; //define qual tecla deverah ser tocada em seguida

var teclaDown : boolean; //verifica se uma tecla ja foi apertada. O jogador deve acertar tudo apos isso
static var etapaOK : boolean; //verifica se o jogador acertou aquela etapa

var notas : AudioClip;

static var chamaFuncao : boolean;

static var combo : int; //acessada em PuzzleMafiaCombo

var panelas : GameObject[];
var panela1 : Sprite[];
var panela2 : Sprite[];
var panela3 : Sprite[];

static var i : int; //valor de cada sprite

private var animator : Animator;

function Start () {

	animator = GetComponent(Animator);

	chamaFuncao = false;
	i = 0;

}

function Update () {

	if(Input.GetKeyDown(tecla))
		{
		if(PuzzleMafia.proximo == 3 || PuzzleMafia.proximo == 15)
			{
			Verificacao1();
			TeclaApertada();
			}
		
		if(PuzzleMafia.proximo == 7 || PuzzleMafia.proximo == 16)
			{
			Verificacao2();
			TeclaApertada();
			}
		
		if(PuzzleMafia.proximo == 11 || PuzzleMafia.proximo == 17)
			{
			Verificacao3();
			TeclaApertada();
			}
			
		teclaDown = true;
		}
	
	if(Input.GetKeyUp(tecla))
		TeclaLevantada();
		
	if(PuzzleMafia.perdeu)
		{
		etapa = 0;
		i = 0;
		//print("errou");
		combo = 0;
		PuzzleMafia.perdeu = false;
		}

}

function OnMouseDown(){

	if(PuzzleMafia.proximo == 3 || PuzzleMafia.proximo == 15)
		{
		Verificacao1();
		TeclaApertada();
		}
		
	if(PuzzleMafia.proximo == 7 || PuzzleMafia.proximo == 16)
		{
		Verificacao2();
		TeclaApertada();
		}
		
	if(PuzzleMafia.proximo == 11 || PuzzleMafia.proximo == 17)
		{
		Verificacao3();
		TeclaApertada();
		}
			
	teclaDown = true;

}

function OnMouseUp() {

	TeclaLevantada();

}

function Verificacao1() {

	if(etapa == 0 || etapa == 3 || etapa == 6)
		if(numTecla == 2) //Re
			if(PuzzleMafia.tempoCerto)
				{
				etapa++;
				combo++;
					
				print(etapa);
				etapaOK = true;
				chamaFuncao = true;
				
				//sprite da panela
				i++;
				
				yield WaitForSeconds (0.05);
				
				if(i == 1)
					panelas[0].GetComponent(SpriteRenderer).sprite = panela1[1];
				
				if(i == 4)
					panelas[0].GetComponent(SpriteRenderer).sprite = panela1[4];
				
				if(i == 7)
					panelas[0].GetComponent(SpriteRenderer).sprite = panela1[2];
				
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
				
				//sprite da panela
				i++;
				
				yield WaitForSeconds (0.05);
				
				if(i == 2)
					panelas[0].GetComponent(SpriteRenderer).sprite = panela1[2];
				
				if(i == 5)
					panelas[0].GetComponent(SpriteRenderer).sprite = panela1[0];
				
				if(i == 8)
					panelas[0].GetComponent(SpriteRenderer).sprite = panela1[3];
				
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
					//sprite da panela
					i++;
					
					yield WaitForSeconds (0.05);
					
					if(i == 3)
						panelas[0].GetComponent(SpriteRenderer).sprite = panela1[3];
				
					if(i == 6)
						panelas[0].GetComponent(SpriteRenderer).sprite = panela1[4];
					
					yield WaitForSeconds (0.2);
				
					etapaOK = false;
					}
					
				else
					{
					PuzzleMafia.chamaFuncao = true;
					etapa = 10;
					combo = 0;
					i = 0;
					}
				}
				

}

function Verificacao2() {

	if(etapa == 0 || etapa == 3 || etapa == 6)
		if(numTecla == 6) //La
			if(PuzzleMafia.tempoCerto)
				{
				etapa++;
				combo++;
					
				print(etapa);
				etapaOK = true;
				chamaFuncao = true;
				
				//sprite da panela
				i++;
				
				yield WaitForSeconds (0.05);
				
				if(i == 1)
					panelas[1].GetComponent(SpriteRenderer).sprite = panela2[1];
				
				if(i == 4)
					panelas[1].GetComponent(SpriteRenderer).sprite = panela2[4];
				
				if(i == 7)
					panelas[1].GetComponent(SpriteRenderer).sprite = panela2[2];
				
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
				
				//sprite da panela
				i++;
				
				yield WaitForSeconds (0.05);
				
				if(i == 2)
					panelas[1].GetComponent(SpriteRenderer).sprite = panela2[2];
				
				if(i == 5)
					panelas[1].GetComponent(SpriteRenderer).sprite = panela2[0];
				
				if(i == 8)
					panelas[1].GetComponent(SpriteRenderer).sprite = panela2[3];
				
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
					//sprite da panela
					i++;
					
					yield WaitForSeconds (0.05);
					
					if(i == 3)
						panelas[1].GetComponent(SpriteRenderer).sprite = panela2[3];
				
					if(i == 6)
						panelas[1].GetComponent(SpriteRenderer).sprite = panela2[4];
					
					yield WaitForSeconds (0.2);
				
					etapaOK = false;
					}
					
				else
					{
					PuzzleMafia.chamaFuncao = true;
					etapa = 10;
					combo = 0;
					i = 0;
					}
				}
				

}

function Verificacao3() {

	if(etapa == 0 || etapa == 3 || etapa == 6)
		if(numTecla == 3) //Mi
			if(PuzzleMafia.tempoCerto)
				{
				etapa++;
				combo++;
					
				print(etapa);
				etapaOK = true;
				chamaFuncao = true;
				
				//sprite da panela
				i++;
				
				yield WaitForSeconds (0.05);
				
				if(i == 1)
					panelas[2].GetComponent(SpriteRenderer).sprite = panela3[1];
				
				if(i == 4)
					panelas[2].GetComponent(SpriteRenderer).sprite = panela3[4];
				
				if(i == 7)
					panelas[2].GetComponent(SpriteRenderer).sprite = panela3[2];
				
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
				
				//sprite da panela
				i++;
				
				yield WaitForSeconds (0.05);
				
				if(i == 2)
					panelas[2].GetComponent(SpriteRenderer).sprite = panela3[2];
				
				if(i == 5)
					panelas[2].GetComponent(SpriteRenderer).sprite = panela3[0];
				
				if(i == 8)
					panelas[2].GetComponent(SpriteRenderer).sprite = panela3[3];
				
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
					//sprite da panela
					i++;
					
					yield WaitForSeconds (0.05);
					
					if(i == 3)
						panelas[2].GetComponent(SpriteRenderer).sprite = panela3[3];
				
					if(i == 6)
						panelas[2].GetComponent(SpriteRenderer).sprite = panela3[4];
					
					yield WaitForSeconds (0.2);
				
					etapaOK = false;
					}
					
				else
					{
					PuzzleMafia.chamaFuncao = true;
					etapa = 10;
					combo = 0;
					i = 0;
					}
				}
				
}

function TeclaApertada() {

	animator.SetTrigger ("DoPress");
	audio.PlayOneShot(notas);

}

function TeclaLevantada() {

	animator.SetTrigger ("UnPress");

}