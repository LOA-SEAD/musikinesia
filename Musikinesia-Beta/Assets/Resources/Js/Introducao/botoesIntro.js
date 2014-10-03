#pragma strict
//script do botao Pular, presente na tela da animacao de introducao

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
	if(transform.position.y > 0)
		{
		if(Introducao.proximo < 26) //26 eh o numero de troca da tela de tutorial para a segunda parte da introduçao
			Application.LoadLevel("Tutorial");
		else
			Application.LoadLevel("Suburbio");
		}
	
	if(transform.position.y < 0)
		{
		Introducao.proximo++;
		Introducao.chamaAnimacao = true;
		}
	
}