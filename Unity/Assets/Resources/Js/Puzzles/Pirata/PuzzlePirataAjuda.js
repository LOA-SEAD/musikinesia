#pragma strict

var teclaSp : Sprite[];
var ajuda : GameObject;

function Start () {
	GetComponent(SpriteRenderer).sprite = teclaSp[0];
	ajuda.SetActive(true);
}

function Update () {

}

function OnMouseDown() {
	GetComponent(SpriteRenderer).sprite = teclaSp[1];
}

function OnMouseUp() {
	GetComponent(SpriteRenderer).sprite = teclaSp[0];
	if(ajuda.active) {
		ajuda.SetActive(false);
	}
	else {
		ajuda.SetActive(true);
	}
}