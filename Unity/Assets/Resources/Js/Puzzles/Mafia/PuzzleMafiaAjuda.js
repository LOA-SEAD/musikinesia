#pragma strict

var ajuda : GameObject; //tela de ajuda
var imagem : Sprite[]; //botao de ajuda

function Start () {

}

function Update () {

}

function OnMouseDown() {

	GetComponent(SpriteRenderer).sprite = imagem[1];
	ajuda.GetComponent.<Renderer>().enabled = !ajuda.GetComponent.<Renderer>().enabled;

}

function OnMouseUp() {

	GetComponent(SpriteRenderer).sprite = imagem[0];

}