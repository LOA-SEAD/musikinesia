#pragma strict

var i : int;

function Start () {

}

function Update () {

	if(ChecaPuzzle.proximo == i || PuzzleMafia.proximo == i)
		Destroy(gameObject);

}