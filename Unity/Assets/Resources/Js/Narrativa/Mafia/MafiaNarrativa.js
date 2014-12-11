#pragma strict
import UnityEngine.UI;

static var proximo : int; //define as etapas das falas; acessado em mudaTextoMafia.js

var personagem : Image[];
var spriteP : Sprite[];

var posicao : Vector3;
var texto : GameObject[];

static var btProximo : boolean;
static var chamaFuncao : boolean;
var btAvancar : Button;

var sons : AudioClip[];

function Start () {
	
	//TESTES
	proximo = 14;

	btAvancar.transform.localPosition.y = -500; //fora da tela

	if(proximo == 0)
		{
		yield WaitForSeconds (0.5);
		
		personagem[0].sprite = spriteP[5];
	
		posicao = Vector3(0.045, 0.32, 0);
		Instantiate(texto[0], posicao, Quaternion.identity);
		
		yield WaitForSeconds (2.5);
		
		btProximo = true;
		}
	
	if(proximo == 14)
		{
		personagem[0].transform.localPosition.x = 150;
		personagem[0].sprite = spriteP[5];
		personagem[0].rectTransform.rotation.y = 180;
		personagem[1].enabled = false;
		personagem[2].enabled = false;
		personagem[3].rectTransform.localPosition.x = -950;
		
		Animacao();
		}
	
	if(proximo == 33)
		{
		personagem[0].transform.localPosition.x = 40;
		personagem[0].sprite = spriteP[0];
		personagem[0].rectTransform.rotation.y = 180;
		personagem[1].enabled = false;
		personagem[2].enabled = false;
		personagem[3].rectTransform.localPosition.x = -300;
		
		Animacao();
		}

}

function Update () {

	//botao de proximo
	if(btProximo)
		btAvancar.transform.localPosition.y = -305.7; //dentro da tela
	
	else
		btAvancar.transform.localPosition.y = -500; //fora da tela
		
	
	//chama funcao
	if(chamaFuncao)
		{
		Animacao();
		chamaFuncao = false;
		}
	

	if(proximo == 0)
		{
		if(personagem[0].rectTransform.position.x >= -1)
			personagem[0].rectTransform.position.x -= 0.16;
		
		else
			personagem[0].rectTransform.rotation.y = 0;
	
		if(personagem[1].rectTransform.position.x >= 4)
			personagem[1].rectTransform.position.x -= 0.15;
	
		if(personagem[2].rectTransform.position.x >= 8)
			personagem[2].rectTransform.position.x -= 0.12;
		}
	
	if(proximo == 18)
		if(personagem[3].rectTransform.localPosition.x <= -300)
			personagem[3].rectTransform.position.x += 0.16;
	
	if(proximo == 31)
		if(personagem[4].rectTransform.localPosition.x >= 400)
			personagem[4].rectTransform.position.x -= 0.16;

}

function Animacao() {
	
//trocas de sprite
	//Tom normal
	if(proximo == 3 || proximo == 11 || proximo == 21 || proximo == 24 || proximo == 29)
		personagem[0].sprite = spriteP[0];
	
	//Tom com braços cruzados
	if(proximo == 6 || proximo == 13 || proximo == 27 || proximo == 32 || proximo == 35 || proximo == 39)
		personagem[0].sprite = spriteP[1];
	
	//tom com a mao no queixo
	if(proximo == 19 || proximo == 23 || proximo == 26)
		personagem[0].sprite = spriteP[3];
	
	//tom assustado
	if(proximo == 37)
		personagem[0].sprite = spriteP[5];
	
	//Dom Macarroni com a mao levantada
	if(proximo == 25 || proximo == 27 || proximo == 41)
		personagem[3].sprite = spriteP[6];
	
	//Dom Macarroni com a mao abaixada
	if(proximo == 20 || proximo == 22 || proximo == 25)
		personagem[3].sprite = spriteP[7];
	
	//Dom Macarroni rindo
	if(proximo == 28)
		personagem[3].sprite = spriteP[8];
	
	//Dom Macarroni bravo
	if(proximo == 24 || proximo == 34)
		personagem[3].sprite = spriteP[9];
	
	//Dom Macarroni desdenhando
	if(proximo == 24 || proximo == 32)
		personagem[3].sprite = spriteP[10];


//trocas de posiçao
	if(proximo == 13)
		personagem[1].rectTransform.rotation.y = 180;
	
	if(proximo == 15)
		personagem[0].rectTransform.rotation.y = 0;
	
	if(proximo == 17)
		personagem[0].rectTransform.rotation.y = 180;
	
	if(proximo == 31)
		{
		personagem[0].rectTransform.rotation.y = 0;
				
		yield WaitForSeconds (2); //tempo pra entrar Maelzel
		
		proximo = 32;
		chamaFuncao = true;
		}

//efeitos sonoros
	if(proximo == 29)
		{
		//audio.PlayOneShot(sons[]); - som de aplausos
		yield WaitForSeconds (2); //tempo pra ouvir os aplausos
		
		proximo = 30;
		chamaFuncao = true;
		}

	
//texto
	if(proximo < 13)
		{
		posicao = Vector3(0.045, 0.32, 0);
		Instantiate(texto[proximo], posicao, Quaternion.identity);
		
		yield WaitForSeconds (1);
		
		btProximo = true;
		}
		
	if(proximo == 13)
		{
		yield WaitForSeconds (2.5); //tempo dos personagens olharem pro segundo capanga
		
		//Pontuacao.numMusica == ;
		//Application.LoadLevel("Jogo");
		}
	
	if(proximo > 13 && proximo < 32)
		{
		posicao = Vector3(0.045, 0.32, 0);
		Instantiate(texto[proximo - 1], posicao, Quaternion.identity);
		
		yield WaitForSeconds (1);
		
		if(proximo == 18)
			yield WaitForSeconds (1); //espera para o Dom Macarroni entrar
		
		btProximo = true;
		}
		
	if(proximo == 32)
		{		
		//Pontuacao.numMusica =  ;
		//Application.LoadLevel("Jogo");
		}
	/*
	if(proximo == 30)
		{
		posicao = Vector3(0.045, 0.32, 0);
		Instantiate(texto[27], posicao, Quaternion.identity);
		
		yield WaitForSeconds (1);
		
		btProximo = true;
		}
	
	if(proximo > 31 && proximo < 43)
		{
		posicao = Vector3(0.045, 0.32, 0);
		Instantiate(texto[proximo - 4], posicao, Quaternion.identity);
		
		yield WaitForSeconds (1);
		
		btProximo = true;
		}*/
	
	/*if(proximo == 43)
		{		
		Pontuacao.numMusica == ;
		Application.LoadLevel("Jogo");
		}*/

}