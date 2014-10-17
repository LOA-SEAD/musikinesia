#pragma strict

var efeitos : AudioClip[];

function Start () {

}

function Update () {

	if(Input.GetKeyDown("space"))
		if(transform.position.y > -25 && transform.position.y < 0)
			Acao();
			
	if(transform.position.y > 0 && PosMusicas.proximo >= 47)
		transform.position.y = 40;

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
	
	if(transform.position.y > -25 && transform.position.y < 0)
		Acao();
	
	else
		Pular();

}

function Acao() {
	
	PosMusicas.proximo++;
	PosMusicas.chamaAnimacao = true;
	
}

function Pular() {

	PosMusicas.chamaAnimacao = true;

	if(PosMusicas.proximo <= 17)
		PosMusicas.proximo = 18;
	
	else if(PosMusicas.proximo > 17 && PosMusicas.proximo <= 32)
		PosMusicas.proximo = 33;
	
	else if(PosMusicas.proximo > 32 && PosMusicas.proximo <= 46)
		PosMusicas.proximo = 47;

}