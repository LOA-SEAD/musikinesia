#pragma strict

var sprites : Sprite[];

function Start () {

}

function Update () {

}

function OnMouseDown () {

	GetComponent(SpriteRenderer).sprite = sprites[1];
	
}

function OnMouseUp () {

	PuzzlePirataPause.menuVoltar = true;
	GetComponent(SpriteRenderer).sprite = sprites[0];

}