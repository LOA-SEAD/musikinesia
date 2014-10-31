#pragma strict

var sprites : Sprite[];

function Start () {

}

function Update () {

}

function OnMouseDown () {

	botoesPause.menuVoltar = true;
	GetComponent(SpriteRenderer).sprite = sprites[1];
	print(botoesPause.menuVoltar);
	
}

function OnMouseUp () {

	GetComponent(SpriteRenderer).sprite = sprites[0];

}