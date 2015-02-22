#pragma strict

var botaoAvancar : GameObject;

var personagens : GameObject[];
var tomSprites : Sprite[];
var maelzelSprites : Sprite[];
var morganSprites : Sprite[];
var narizSprites : Sprite[];
var cenario : GameObject;
var cenarioSprites : Sprite[];

var musicas : AudioClip[];

static var soltaAnimacao : boolean;

function Start () {

	soltaAnimacao = false;
	
	//debug
	CenarioBarco();
	NarrativaPirataTexto.i = 20;

}

function FixedUpdate () {

	if(soltaAnimacao) {
		animation["AnimNarrativaPirata"].speed = 1;
		soltaAnimacao = false;
	}

}

function Geral() {

	animation["AnimNarrativaPirata"].speed = 0;
	
	yield WaitForSeconds (0.5);
	
	botaoAvancar.transform.position.y = -4;
	
	if(NarrativaPirataTexto.i == 0)
		NarrativaPirataTexto.chamaFuncao = true;

}

function TomNormal() {
	personagens[0].GetComponent(SpriteRenderer).sprite = tomSprites[0];
}

function TomBracoCruzado() {
	personagens[0].GetComponent(SpriteRenderer).sprite = tomSprites[1];
}

function TomPensativo() {
	personagens[0].GetComponent(SpriteRenderer).sprite = tomSprites[2];
}

function TomFeliz() {
	personagens[0].GetComponent(SpriteRenderer).sprite = tomSprites[3];
}

function TomAssustado() {
	personagens[0].GetComponent(SpriteRenderer).sprite = tomSprites[4];
}

function MaelzelNormal() {
	personagens[1].GetComponent(SpriteRenderer).sprite = maelzelSprites[0];
}

function MaelzelOlhosFechados() {
	personagens[1].GetComponent(SpriteRenderer).sprite = maelzelSprites[1];
}

function MaelzelBracoLevantado() {
	personagens[1].GetComponent(SpriteRenderer).sprite = maelzelSprites[2];
}

function MorganNormal() {
	personagens[2].GetComponent(SpriteRenderer).sprite = morganSprites[0];
}

function MorganMaoCima() {
	personagens[2].GetComponent(SpriteRenderer).sprite = morganSprites[1];
}

function MorganBracoCruzado() {
	personagens[2].GetComponent(SpriteRenderer).sprite = morganSprites[2];
}

function MorganPunho() {
	personagens[2].GetComponent(SpriteRenderer).sprite = morganSprites[3];
}

function CenarioBarco() {
	cenario.GetComponent(SpriteRenderer).sprite = cenarioSprites[1];
	animation["AnimNarrativaPirata"].time = 12;
	NarrativaPirataTexto.passaTexto = true;
	audio.clip = musicas[1];
	audio.Play();
	audio.loop = true;
}