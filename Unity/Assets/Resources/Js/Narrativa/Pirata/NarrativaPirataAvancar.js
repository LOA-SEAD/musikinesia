#pragma strict

var audios : AudioClip[];

function Start () {

	gameObject.GetComponent(SpriteRenderer).color = Color(0.969, 0.647, 0.169, 1);

}

function Update () {
	
	if(Input.GetKeyDown("space") && NarrativaPirataTexto.liberaTexto)
		Acao();
	
	if(NarrativaPirataTexto.liberaTexto)
		transform.position.y = -4;
	
	else
		transform.position.y = -20;
	

}

function Acao () {

	NarrativaPirataTexto.passaTexto = true;
	NarrativaPirataTexto.liberaTexto = false;
	audio.PlayOneShot(audios[1]);
	print("Proximo " + NarrativaPirata.proximo);
}

function OnMouseDown () {

	gameObject.GetComponent(SpriteRenderer).color = Color(0.6, 0.1, 0.1, 1);

}

function OnMouseUp () {

	gameObject.GetComponent(SpriteRenderer).color = Color(0.969, 0.647, 0.169, 1);
	
	Acao();

}

function OnMouseEnter () {

	audio.PlayOneShot(audios[0]);

}

function OnMouseOver ()	{

	gameObject.GetComponent(SpriteRenderer).color -= Color(0, 0.1, 0.1, 0) * Time.deltaTime * 8;

}

function OnMouseExit () {

	gameObject.GetComponent(SpriteRenderer).color = Color(0.969, 0.647, 0.169, 1);
	
}