#pragma strict



function Start () {

}

function Update () {

	var myMesh = GetComponent(TextMesh);
	GetComponent.<Renderer>().material.color = Color.black;
	
	myMesh.text = PuzzlePirata.pontos.ToString();

}