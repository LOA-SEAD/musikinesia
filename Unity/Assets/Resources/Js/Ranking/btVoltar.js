#pragma strict

var efeitos : AudioClip[];

function Start () {

}

function Update () {

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

	audio.PlayOneShot(efeitos[1]);
	Application.LoadLevel("Menu");

}