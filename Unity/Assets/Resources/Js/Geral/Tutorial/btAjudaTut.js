#pragma strict

var imagem : Sprite[];
var ajuda : GameObject;

function Start () {

}

function Update () {

	if(Pontuacao.animacaoIn == 3)
		GetComponent.<Renderer>().enabled = true;

}

function OnMouseDown() {

	GetComponent(SpriteRenderer).sprite = imagem[1];
	ajuda.GetComponent.<Renderer>().enabled = !ajuda.GetComponent.<Renderer>().enabled;
	

}

function OnMouseUp() {

	GetComponent(SpriteRenderer).sprite = imagem[0];

}