#pragma strict

var fadeOut : boolean;
var planoPreto : GameObject;
var speed : float = 1;

function Start () {
	planoPreto.SetActive(false);
}

function Update () {
	if(Input.GetKeyUp(KeyCode.Space) ) {//|| Input.GetButtonUp) {
		planoPreto.SetActive(true);
		fadeOut = true;
		Invoke("ChamaMenu", 4);
	}
	
	if(fadeOut) {
		planoPreto.GetComponent(SpriteRenderer).color.a += speed;
	}
}

function OnMouseUp() {
	planoPreto.SetActive(true);
	fadeOut = true;
	Invoke("ChamaMenu", 4);
}

function ChamaMenu() {
	Application.LoadLevel("Menu");
}