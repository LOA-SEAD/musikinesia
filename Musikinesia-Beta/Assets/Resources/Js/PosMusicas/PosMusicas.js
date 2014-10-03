#pragma strict
//script da animacao final


var baseTexto : GameObject; //base dos textos
var texto : GameObject[]; //textos das falas dos personagens
var logo : GameObject; //logo do Musikinesia
var planoPreto : GameObject; //plano preto 70%
var btVoltar : GameObject; //botao Voltar

var btProximo : GameObject; //botao de proximo
var btProximoON : boolean; //ativa o botao de proximo
static var proximo : int; //acessada em mudaTextoPos.js; define o andamento da animacao
static var chamaAnimacao : boolean; //acessada em mudaTextoPos.js; chama a funcao Animacao();

var posicao : Vector3; //posicao de instantiate

var personagem : GameObject[];
//personagem[0] = pai
//personagem[1] = Tom
//personagem[2] = pernas pai

var spritesP : Sprite[];
//spritesP[0] = pai normal
//spritesP[1] = pai pensativo
//spritesP[2] = pai assustado
//spritesP[3] = pai de pernas pro ar
//spritesP[4] = tom normal
//spritesP[5] = tom braços cruzados
//spritesP[6] = tom assustado

var objetos : GameObject[];
//objetos[0] = bau do teclado
//objetos[1] = bilhete

var efeitoSonoro : AudioClip[]; //efeitos sonoros

function Start () {

	logo.renderer.material.color.a = 0;
	planoPreto.renderer.material.color.a = 0;
	btVoltar.renderer.enabled = false;
	
	posicao = Vector3(0, -3.7, 0);
	Instantiate(baseTexto, posicao, Quaternion.identity);
	
	yield WaitForSeconds(1);
	
	posicao = Vector3(0.07, 0.24, 0);
	Instantiate(texto[0], posicao, Quaternion.identity);
	
	yield WaitForSeconds(1);
	
	btProximoON = true;
	Animacao();

}

function Update () {

	if(btProximoON)
		btProximo.transform.position.y = -4.5; //na tela
		
		else
			btProximo.transform.position.y = -40; //fora da tela
	
	if(chamaAnimacao)
		{
		btProximoON = false;
		chamaAnimacao = false;
			
		if(proximo < 18)
			Animacao();
			
			else
				{
				Pontuacao.escolhaOK = true;
				Pontuacao.puzzle = 1;
				Application.LoadLevel("Teclados_teste");
				}
		}
	
	
//animaçoes

	

	if(proximo == 8)
		{
		
		if(personagem[0].transform.position.y >= -4.59)
			personagem[0].transform.position.y -= 0.5;
		
		if(personagem[2].transform.position.y >= -0.97)
			personagem[2].transform.position.y -= 0.5;
			
		if(objetos[0].transform.position.y >= -8)
			objetos[0].transform.position.y -= 0.5;
		
		if(objetos[1].transform.position.y >= -8)
			objetos[1].transform.position.y -= 0.5;
		}
		
	

	/*
	if(proximo == 2)
		{
		if(planoPreto.renderer.material.color.a != 1)
			planoPreto.renderer.material.color.a += 0.5 * Time.deltaTime;
		
		if(logo.renderer.material.color.a != 1)
			logo.renderer.material.color.a += 0.4 * Time.deltaTime;
		}*/

}

function Animacao () {
	
	if(proximo == 2)
		personagem[0].GetComponent(SpriteRenderer).sprite = spritesP[1];
		
	if(proximo == 3)
		personagem[0].GetComponent(SpriteRenderer).sprite = spritesP[2];
	
	if(proximo == 4)
		personagem[1].GetComponent(SpriteRenderer).sprite = spritesP[6];
	
	if(proximo == 8)
		{
		personagem[0].GetComponent(Animator).enabled = false; //para de rodar a animacao do pai flutuando
		objetos[0].GetComponent(Animator).enabled = false; //para de rodar a animacao do bau flutuando
		objetos[1].GetComponent(Animator).enabled = false; //para de rodar a animacao do bilhete flutuando
		
		yield WaitForSeconds(0.2);
		
		audio.PlayOneShot(efeitoSonoro[0]);
		}
	
	if(proximo == 10)
		{
		personagem[0].transform.Rotate (0, 180, -180);
		personagem[0].transform.position.y = -0.4361838;
		personagem[0].GetComponent(SpriteRenderer).sprite = spritesP[1];
		personagem[2].renderer.enabled = false;
		}
	
	if(proximo == 11)
		personagem[0].GetComponent(SpriteRenderer).sprite = spritesP[2];
	
	if(proximo == 13)
		personagem[1].GetComponent(SpriteRenderer).sprite = spritesP[4];
	
	if(proximo == 14)
		personagem[0].GetComponent(SpriteRenderer).sprite = spritesP[0];	
	
	if(proximo == 15)
		{
		audio.PlayOneShot(efeitoSonoro[1]);
		
		yield WaitForSeconds(2);
		
		btProximoON = true;
		}
		
	
	if(proximo != 0 && proximo < 15)
		{
		posicao = Vector3(0.07, 0.24, 0);
		Instantiate(texto[proximo], posicao, Quaternion.identity);
		
		yield WaitForSeconds(1);
		
		btProximoON = true;
		}
	
	if(proximo > 15)
		{
		posicao = Vector3(0.07, 0.24, 0);
		Instantiate(texto[proximo - 1], posicao, Quaternion.identity);
		
		yield WaitForSeconds(1);
		
		btProximoON = true;
		}
	
		
}