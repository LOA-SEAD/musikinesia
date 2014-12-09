#pragma strict

function Start () {

}

function Update () {

	var myMesh = GetComponent(TextMesh);
	renderer.material.color = Color.black;
	
	if(PuzzleMafia.proximo == 3 || PuzzleMafia.proximo == 7 || PuzzleMafia.proximo == 11 || PuzzleMafia.proximo == 15 || PuzzleMafia.proximo == 16 || PuzzleMafia.proximo == 17) 
		myMesh.text = PuzzleMafiaTeclas.combo.ToString() + "/ 9";
	
	else
		myMesh.text = "--";

}