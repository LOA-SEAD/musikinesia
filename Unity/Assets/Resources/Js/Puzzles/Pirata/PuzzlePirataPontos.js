#pragma strict



function Start () {

}

function Update () {

	var myMesh = GetComponent(TextMesh);
	renderer.material.color = Color.black;
	
	myMesh.text = PuzzlePirata.pontos.ToString();

}