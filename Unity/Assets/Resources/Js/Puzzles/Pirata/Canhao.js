#pragma strict

function Start () {

	gameObject.GetComponent(Animator).enabled = false;

}

function Update () {

	if(transform.position.x < -11.7)
		DesativaCanhao();

	if(PuzzlePirata.atiraBala) {
		gameObject.GetComponent(Animator).enabled = true;
		PuzzlePirata.atiraBala = false;
	}

}

function DesativaCanhao () {

	//GetComponent.<Animation>().Rewind();
	gameObject.GetComponent(Animator).enabled = false;
	
	yield WaitForSeconds (0.1);

	transform.position.x = -6.45;
	gameObject.SetActive(false);

}