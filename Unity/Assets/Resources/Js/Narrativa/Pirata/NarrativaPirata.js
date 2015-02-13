#pragma strict

var personagens : GameObject[];
var tomSprites : Sprite[];
var maelzelSprites : Sprite[];
var morganSprites : Sprite[];
var narizSprites : Sprite[];

var balaCanhao : GameObject;
var tiroCanhao : AudioClip;

static var atiraCanhao : boolean;
static var proximo : int;
static var chamaPosicao : boolean;
static var chamaSprite : boolean;

function Start () {

}

function FixedUpdate () {

	if(proximo == 0) {
		if(personagens[0].transform.position.x > -4)
			personagens[0].transform.position.x -= Time.deltaTime * 10;
		
		else {
			proximo = 1;
			MudaPosicao();
		}
		
		if(personagens[1].transform.position.x > 1)
			personagens[1].transform.position.x -= Time.deltaTime * 8;
	
	}
	
	if(atiraCanhao) {
		balaCanhao.SetActive(true);
		NarrativaPirataTexto.liberaTexto = false;
		if(balaCanhao.transform.position.x < 11) {
			balaCanhao.transform.position.x += Time.deltaTime * 12;
		}
		
		else {
			atiraCanhao = false;
		}
	}
	
	else {
		balaCanhao.SetActive(false);
		NarrativaPirataTexto.liberaTexto = true;
	}
	
	
	if(chamaPosicao) {
		MudaPosicao();
		chamaPosicao = false;
	}
	
	if(chamaSprite) {
		MudaSprite();
		chamaSprite = false;
	}
		
}

function MudaPosicao() {

	if(proximo == 1) {
		yield WaitForSeconds (0.7);
		
		personagens[0].transform.rotation.y = 0;
		
		yield WaitForSeconds (0.7);
		
		personagens[0].transform.rotation.y = 180;
		
		yield WaitForSeconds (0.7);
		
		personagens[0].transform.rotation.y = 0;
		
		yield WaitForSeconds (0.5);
		
		MudaSprite();
		NarrativaPirataTexto.chamaFuncao = true; //roda a primeira vez a funcao do texto
	}

}

function MudaSprite() {
	
	//TOM
	
	if(proximo == 12 || proximo == 16) { //Tom normal
		personagens[0].GetComponent(SpriteRenderer).sprite = tomSprites[0];
	}
	
	if(proximo == 2 || proximo == 17) { //Tom braço cruzado
		personagens[0].GetComponent(SpriteRenderer).sprite = tomSprites[1];
	}
	
	if(proximo == 4) { //Tom pensativo
		personagens[0].GetComponent(SpriteRenderer).sprite = tomSprites[3];
	}
	
	if(proximo == 8) { //Tom feliz
		personagens[0].GetComponent(SpriteRenderer).sprite = tomSprites[4];
	}

	if(proximo == 1 || proximo == 10 || proximo == 14) { //Tom assustado	
		personagens[0].GetComponent(SpriteRenderer).sprite = tomSprites[5];
	}
	
	//MAELZEL
	
	if(proximo == 9 || proximo == 15) { //Maelzel de olhos fechados
		personagens[1].GetComponent(SpriteRenderer).sprite = maelzelSprites[1];
	}
	
	if(atiraCanhao)
		audio.PlayOneShot(tiroCanhao);

}