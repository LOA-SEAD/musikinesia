#pragma strict

var imagem : Sprite[];
var ajuda : GameObject;

function Start () {

}

function Update () {

	if(Pontuacao.animacaoIn == 3)
		renderer.enabled = true;

}

function OnMouseDown() {

	GetComponent(SpriteRenderer).sprite = imagem[1];
	ajuda.renderer.enabled = !ajuda.renderer.enabled;
	

}

function OnMouseUp() {

	GetComponent(SpriteRenderer).sprite = imagem[0];

}