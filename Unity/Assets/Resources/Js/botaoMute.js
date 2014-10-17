#pragma strict
//script do botao de mute

static var muteOn : boolean; //acessado em Pontuacao.js

var imagem1 : Sprite;
var imagem2 : Sprite;


function Start () {

	muteOn = false;

}

function Update () {

	if(muteOn)
		GetComponent(SpriteRenderer).sprite = imagem2;
		
		else
		GetComponent(SpriteRenderer).sprite = imagem1;

}

function OnMouseDown() {

	muteOn = !muteOn; //ativa e desativa o muteOn
	Pontuacao.Mute(); //chama a funcao Mute dentro de Pontuacao.js

}


