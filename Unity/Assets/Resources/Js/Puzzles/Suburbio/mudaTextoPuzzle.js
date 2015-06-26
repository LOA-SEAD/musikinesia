#pragma strict

var i : int;
var j : int = 200; //200 = nao afeta os objetos que nao foram modificados no inspector

function Start () {

}

function Update () {

	if(ChecaPuzzle.proximo == i || PuzzleMafia.proximo == i || PuzzleMafia.proximo == j)
		Destroy(gameObject);

}