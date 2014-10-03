#pragma strict
//script dos botoes da tela de Derrota

var audios : AudioClip[];

function Start () {

}

function Update () {

}

function OnMouseOver () {

	renderer.material.color -= Color(0, 0.1, 0.1, 0);

}

function OnMouseExit () {

	renderer.material.color = Color(1, 1, 1, 1);
	
}

function OnMouseDown () {

	Escolha();
	audio.PlayOneShot(audios[1]);	

}

function OnMouseEnter() {

	audio.PlayOneShot(audios[0]);

}

function Escolha () {

	if(transform.position.y > -7) //açao do primeiro botao
		Application.LoadLevel("Teclados_teste");
		
	if(transform.position.y < -7 && transform.position.y > -10) //açao do segundo botao
		Application.LoadLevel("Menu");
		
	if(transform.position.y < -11) //açao do terceiro botao
		Application.Quit();

}