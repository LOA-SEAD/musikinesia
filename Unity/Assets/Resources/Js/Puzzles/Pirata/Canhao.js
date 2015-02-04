#pragma strict

function Start () {

	gameObject.GetComponent(Animator).enabled = false;

}

function Update () {

	if(transform.position.x < -10.4)
		Destroy(gameObject);

	if(PuzzlePirata.atiraBala)
		gameObject.GetComponent(Animator).enabled = true;

}