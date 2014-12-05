#pragma strict

function Start () {

}

function Update () {

	var myMesh = GetComponent(TextMesh);
	renderer.material.color = Color.black;
	
	if(PuzzleMafia.proximo == 3 || PuzzleMafia.proximo == 7 || PuzzleMafia.proximo == 11) 
		myMesh.text = PuzzleMafiaTeclas.combo.ToString() + "/ 9";
	
	else
		myMesh.text = "--";

}