#pragma strict

var efeitos : AudioClip[];

function Start () {

}

function Update () {

	if(Input.GetKeyDown("space") && transform.localPosition.y == -305.7)
		Acao();

}

function OnMouseEnter() {

	audio.PlayOneShot(efeitos[0]);

}

function OnMouseDown() {

	Acao();

}

function Acao() {

	audio.PlayOneShot(efeitos[1]);
	MafiaNarrativa.proximo++;
	MafiaNarrativa.btProximo = false;
	MafiaNarrativa.chamaFuncao = true;

}