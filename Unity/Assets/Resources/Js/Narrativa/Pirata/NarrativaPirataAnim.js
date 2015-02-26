#pragma strict

var testeDebug : boolean[];

var botaoAvancar : GameObject;

var personagens : GameObject[];
var tomSprites : Sprite[];
var maelzelSprites : Sprite[];
var morganSprites : Sprite[];
var narizSprites : Sprite[];
var cenario : GameObject;
var cenarioSprites : Sprite[];
var barcoBranco : GameObject;
var barcoEscuro : GameObject;
var barcoSprites : Sprite[];

var musicas : AudioClip[];

var animacao : AnimationClip[];

var efeitosSonoros : AudioClip[];

static var soltaAnimacao : boolean;

function Start () {

	soltaAnimacao = false;
	
	//Teste
	NarrativaPirataTexto.i = 58;
	
	if(NarrativaPirataTexto.i < 37)
		animation.clip = animacao[0];
	
	if(NarrativaPirataTexto.i > 37 && NarrativaPirataTexto.i < 58)
		animation.clip = animacao[1];
	
	if(NarrativaPirataTexto.i >= 58 && NarrativaPirataTexto.i < 77)
		animation.clip = animacao[2];
	
	animation.Play();
	
	barcoBranco.GetComponent(SpriteRenderer).sprite = barcoSprites[0];
	barcoEscuro.GetComponent(SpriteRenderer).sprite = barcoSprites[3];

}

function FixedUpdate () {

	if(soltaAnimacao) {
		animation["AnimNarrativaPirata"].speed = 1;
		animation["AnimNarrativaPirata2"].speed = 1;
		animation["AnimNarrativaPirata3"].speed = 1;
		soltaAnimacao = false;
	}
	
	//debug
	if(testeDebug[0]) {
		animation.clip = animacao[0];
		animation.Play();
		CenarioBarco();
		Marcacao1();
		NarrativaPirataTexto.i = 20;
		testeDebug[0] = false;
	}
	
	if(testeDebug[1]) {
		animation.clip = animacao[1];
		animation.Play();
		testeDebug[1] = false;
	}		

}

function Geral() {

	animation["AnimNarrativaPirata"].speed = 0;
	animation["AnimNarrativaPirata2"].speed = 0;
	animation["AnimNarrativaPirata3"].speed = 0;
	
	yield WaitForSeconds (0.5);
	
	botaoAvancar.transform.position.y = -4;
	
	if(NarrativaPirataTexto.i == 0)
		NarrativaPirataTexto.chamaFuncao = true;
	
	if(NarrativaPirataTexto.i == 58)
		NarrativaPirataTexto.passaTexto = true;

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

function NarizNormal() {
	personagens[3].GetComponent(SpriteRenderer).sprite = narizSprites[0];
}

function NarizMetronomo() {
	personagens[3].GetComponent(SpriteRenderer).sprite = narizSprites[1];
}

function CenarioBarco() {
	cenario.GetComponent(SpriteRenderer).sprite = cenarioSprites[1];
	NarrativaPirataTexto.passaTexto = true;
	audio.clip = musicas[1];
	audio.Play();
	audio.loop = true;
}

function BarcoBranco() {
	if(barcoBranco.GetComponent(SpriteRenderer).sprite == barcoSprites[0])
		barcoBranco.GetComponent(SpriteRenderer).sprite = barcoSprites[1];
	else
		barcoBranco.GetComponent(SpriteRenderer).sprite = barcoSprites[0];
}

function BarcoEscuro() {

}

function Marcacao1() {
	animation["AnimNarrativaPirata"].time = 12;
}

function EfeitoSonoro() {
	if(NarrativaPirataTexto.i > 58) {
		audio.PlayOneShot(efeitosSonoros[0]);
	}
	
	else {
		audio.PlayOneShot(efeitosSonoros[1]);
	}
}