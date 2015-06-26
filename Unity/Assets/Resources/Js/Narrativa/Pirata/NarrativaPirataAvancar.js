#pragma strict

var audios : AudioClip[];

function Start () {

	gameObject.GetComponent(SpriteRenderer).color = Color(0.969, 0.647, 0.169, 1);
	
	if(gameObject.name == "btAvancar") {
		transform.position.y = -20;
	}

}

function Update () {
	
	if(Input.GetKeyDown("space") && transform.position.y == -4)
		Acao();
	/*
	if(NarrativaPirata.proximo > 1) {
		if(NarrativaPirataTexto.liberaTexto)
			transform.position.y = -4;
		
		else
			transform.position.y = -20;
	}*/
	

}

function Acao () {

	transform.position.y = -20;
	NarrativaPirataAnim.soltaAnimacao = true;
	NarrativaPirataTexto.passaTexto = true;
	NarrativaPirataTexto.liberaTexto = false;
	GetComponent.<AudioSource>().PlayOneShot(audios[1]);
	print("Proximo " + NarrativaPirata.proximo);
	
}

function Pular() {
	if(NarrativaPirataTexto.i < 37) {
		Application.LoadLevel("PuzzlePirata");
	}
	
	if(NarrativaPirataTexto.i > 37 && NarrativaPirataTexto.i < 58) {
		Application.LoadLevel("Jogo");
		Pontuacao.numMusica = 10;
	}
	
	if(NarrativaPirataTexto.i >= 58 && NarrativaPirataTexto.i < 77) {
		Application.LoadLevel("Jogo");
		Pontuacao.numMusica = 11;
	}
		
	if(NarrativaPirataTexto.i >= 77) { // && NarrativaPirataTexto.i < 77)
		Application.LoadLevel("CreditosFinais");
	}
}

function OnMouseDown () {

	gameObject.GetComponent(SpriteRenderer).color = Color(0.6, 0.1, 0.1, 1);

}

function OnMouseUp () {

	gameObject.GetComponent(SpriteRenderer).color = Color(0.969, 0.647, 0.169, 1);
	
	if(gameObject.name == "btPular") {
		Pular();
	}
	else {
		Acao();
	}

}

function OnMouseEnter () {

	GetComponent.<AudioSource>().PlayOneShot(audios[0]);

}

function OnMouseOver ()	{

	gameObject.GetComponent(SpriteRenderer).color -= Color(0, 0.1, 0.1, 0) * Time.deltaTime * 8;

}

function OnMouseExit () {

	gameObject.GetComponent(SpriteRenderer).color = Color(0.969, 0.647, 0.169, 1);
	
}