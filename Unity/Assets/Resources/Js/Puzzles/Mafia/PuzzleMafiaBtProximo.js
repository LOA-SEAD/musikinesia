#pragma strict

var efeitos : AudioClip[];

function Start () {

}

function Update () {

	if(Input.GetKeyDown("space")) {
		if(transform.position.y > -5) {
			Acao();
		}
	}

}

function OnMouseEnter() {

	audio.PlayOneShot(efeitos[0]);

}

function OnMouseOver () {

	renderer.material.color -= Color(0, 0.1, 0.1, 0);

}

function OnMouseExit () {

	renderer.material.color = Color(1, 1, 1, 1);
	
}

function OnMouseDown () {

	if(transform.position.y > -5)
		Acao();	
}

function Acao() {
	
	audio.PlayOneShot(efeitos[1]);
	PuzzleMafia.chamaFuncao = true;
	
}