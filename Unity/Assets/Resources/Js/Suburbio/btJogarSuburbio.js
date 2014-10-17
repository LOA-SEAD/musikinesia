#pragma strict
//script do botao Jogar na cena do suburbio


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
	Instanciar.jogar = true;
	
	if(!DestruirTextoSub.destruir)
		DestruirTextoSub.destruir = true;
	
}