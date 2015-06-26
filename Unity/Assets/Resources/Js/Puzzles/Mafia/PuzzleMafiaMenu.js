#pragma strict

var sprites : Sprite[];

function Start () {

}

function Update () {

}

function OnMouseDown () {

	PuzzleMafiaPause.menuVoltar = true;
	GetComponent(SpriteRenderer).sprite = sprites[1];
	
}

function OnMouseUp () {

	GetComponent(SpriteRenderer).sprite = sprites[0];

}