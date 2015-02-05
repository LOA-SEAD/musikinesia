#pragma strict

var audios : AudioClip[];

function Start () {

	gameObject.GetComponent(SpriteRenderer).color = Color(0.969, 0.647, 0.169, 1);

}

function Update () {
	
	if(Input.GetKeyDown("space"))
		Acao();
	
	if(PuzzlePirataTexto.liberaAcao)
		transform.position.y = -4;
	
	else
		transform.position.y = -20;
	

}

function Acao () {
	
	if(PuzzlePirataTexto.liberaAcao) {
		PuzzlePirataTexto.passaTexto = true;
		audio.PlayOneShot(audios[1]);
		}

}

function OnMouseDown () {

	gameObject.GetComponent(SpriteRenderer).color = Color(0.6, 0.1, 0.1, 1);
	
	Acao();

}

function OnMouseUp () {

	gameObject.GetComponent(SpriteRenderer).color = Color(0.969, 0.647, 0.169, 1);

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