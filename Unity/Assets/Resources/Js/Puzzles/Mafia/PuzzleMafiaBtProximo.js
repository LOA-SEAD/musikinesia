#pragma strict

var efeitos : AudioClip[];

function Start () {

}

function Update () {

	if(Input.GetKeyUp("space")) {
		if(transform.position.y > -5) {
			Acao();
		}
	}

}

function OnMouseEnter() {

	GetComponent.<AudioSource>().PlayOneShot(efeitos[0]);

}

function OnMouseOver () {

	GetComponent.<Renderer>().material.color -= Color(0, 0.1, 0.1, 0);

}

function OnMouseExit () {

	GetComponent.<Renderer>().material.color = Color(1, 1, 1, 1);
	
}

function OnMouseUp() {

	if(transform.position.y > -5)
		Acao();	
}

function Acao() {
	
	GetComponent.<AudioSource>().PlayOneShot(efeitos[1]);
	PuzzleMafia.chamaFuncao = true;
	
}