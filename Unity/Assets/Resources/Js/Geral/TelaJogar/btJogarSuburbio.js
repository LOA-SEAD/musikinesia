#pragma strict
//script do botao Jogar na cena do suburbio


var efeitos : AudioClip[];

function Start () {

}

function Update () {
	if(Input.GetKeyUp(KeyCode.Space)) {
		Action();
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

function OnMouseUp () {
	Action();
}

function Action() {
	GetComponent.<AudioSource>().PlayOneShot(efeitos[1]);
	Instanciar.jogar = true;
	
	if(!DestruirTextoSub.destruir)
		DestruirTextoSub.destruir = true;
}