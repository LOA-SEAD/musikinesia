#pragma strict
//script da cena do suburbio


var texto1 : GameObject; //texto da fala do personagem
var baseTexto : GameObject;
var planoPreto : GameObject; //plano preto 70%	
static var jogar : boolean; //acessada em btJogarSuburbio.js

var loading : GameObject; //texto de loading
var positionIns : Vector3; //posicao de instantiate

var btJogar : GameObject; //botao Jogar
var btAvancar : GameObject; //botao Avançar

var telaIns : GameObject; //tela de instrucoes

function Start () {

	planoPreto.renderer.material.color.a = 0;
	btJogar.transform.position.y = -4; //botao jogar ta fora de quadro
	btAvancar.transform.position.y = -4; //botao avançar ta fora de quadro
	baseTexto.GetComponent(Animator).enabled = true;
	telaIns.renderer.enabled = false;
	
	yield WaitForSeconds(2.5);
	
	var position : Vector3 = Vector3(0.36, 0.40, 0);
	Instantiate (texto1, position, Quaternion.identity);
	
	yield WaitForSeconds(1);
	
	btJogar.transform.position.y = -0.6;
 
}

function Update () {

	if(jogar) //vira true dentro de btJogarSuburbio.js
		{
		Loading();
		jogar = false;	
		}

}

function Loading() {
	
	if(!telaIns.renderer.enabled)
		{
		btJogar.transform.position.y = -4;
		btAvancar.transform.position.y = -0.81;
		telaIns.renderer.enabled = true;
		}
		
	else
		{
		planoPreto.renderer.material.color.a = 0.7;
	
		positionIns = Vector3(0.4, 0.5, -8.1);
		Instantiate(loading, positionIns, Quaternion.identity);
	
		yield WaitForSeconds(1);
		Application.LoadLevel("Teclados_teste");
		}
	
	}