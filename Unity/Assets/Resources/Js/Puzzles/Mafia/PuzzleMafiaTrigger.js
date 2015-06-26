#pragma strict

var i : int;
var j : int;

function Start () {

}

function Update () {

	if(PuzzleMafia.proximo == i || PuzzleMafia.proximo == j)
		{
		GetComponent.<Animation>().Stop();
		Destroy(gameObject);
		}
		

}