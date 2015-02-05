#pragma strict

var i : int;

function Start () {

}

function Update () {

	if(Input.GetKeyDown("l") && i == 0)
		i = 1;
	
	if(Input.GetKeyDown("o") && i == 1)
		i = 2;
	
	if(Input.GetKeyDown("a") && i == 2)
		i = 3;

	if(i == 3)
		Application.LoadLevel("PuzzlePirata");
}