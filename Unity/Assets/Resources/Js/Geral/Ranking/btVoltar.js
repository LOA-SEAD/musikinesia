#pragma strict

var efeitos : AudioClip[];

function Start () {

}

function Update () {

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

function OnMouseDown () {

	GetComponent.<AudioSource>().PlayOneShot(efeitos[1]);
	Application.LoadLevel("Menu");

}