#pragma strict

var destruirPrefab : int;

function Start () {

}

function Update () {

	if(destruirPrefab == PuzzleMafia.animTriggerNum)
		Destroy(gameObject);

}