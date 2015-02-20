#pragma strict

var personagens : GameObject[];
var tomSprites : Sprite[];
var maelzelSprites : Sprite[];
var morganSprites : Sprite[];
var narizSprites : Sprite[];
var cenario : GameObject;
var cenarioSprites : Sprite[];

var balaCanhao : GameObject;
var tiroCanhao : AudioClip;

var musicas : AudioClip[];

static var atiraCanhao : boolean;
static var proximo : int;
static var chamaPosicao : boolean;
static var chamaSprite : boolean;
static var travaMudaPosicao : boolean;

function Start () {

	balaCanhao.SetActive(false);
	cenario.GetComponent(SpriteRenderer).sprite = cenarioSprites[0];
	
	audio.clip = musicas[0];
	audio.Play();

}

function FixedUpdate () {

	if(proximo == 0) {
		if(personagens[0].transform.position.x > -4)
			personagens[0].transform.position.x -= Time.deltaTime * 10;
		
		else {
			proximo = 1;
			MudaPosicao();
			print("chama mudaPosicao();");
		}
		
		if(personagens[1].transform.position.x > 1)
			personagens[1].transform.position.x -= Time.deltaTime * 8;
	
	}
	
	//personagens saem da praia
	if(proximo == 20) {
		if(personagens[2].transform.position.x < 13) {
			personagens[2].transform.position.x += Time.deltaTime * 8;
			personagens[3].transform.position.x += Time.deltaTime * 8;
			
			if(personagens[2].transform.position.x >= -5.65) {
				personagens[0].transform.position.x += Time.deltaTime * 10;
				personagens[0].transform.rotation.y = 0;
			}
			
			if(personagens[2].transform.position.x >= 1.55) {
				personagens[1].transform.position.x += Time.deltaTime * 10;
				personagens[1].transform.rotation.y = 180;
			}
		}
		
		else {
			MudaCenario();
		}
	}
	
	//Morgan entra na cena
	if(proximo == 25) {
		if(personagens[4].transform.position.x > 4.5) {
			personagens[4].transform.position.x -= Time.deltaTime * 8;
		}
		
		else {
			NarrativaPirataTexto.liberaTexto = true;
		}
	}
	
	if(atiraCanhao) {
		balaCanhao.SetActive(true);
		NarrativaPirataTexto.liberaTexto = false;
		if(balaCanhao.transform.position.x < 11) {
			balaCanhao.transform.position.x += Time.deltaTime * 12;
		}
		
		else {
			atiraCanhao = false;
			balaCanhao.SetActive(false);
		}
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

	chamaPosicao = false;

	if(proximo == 1 && !travaMudaPosicao) {
		yield WaitForSeconds (0.7);
		
		personagens[0].transform.rotation.y = 0;
		
		yield WaitForSeconds (0.7);
		
		personagens[0].transform.rotation.y = 180;
		
		yield WaitForSeconds (0.7);
		
		personagens[0].transform.rotation.y = 0;
		
		yield WaitForSeconds (0.5);
		
		MudaSprite();
		NarrativaPirataTexto.chamaFuncao = true; //roda a primeira vez a funcao do texto
		travaMudaPosicao = true;
		
		yield WaitForSeconds (0.1);
		
		proximo = 2;
		print("Proximo: " + proximo);
	}
	
	if(proximo == 22 || proximo == 27)
		personagens[0].transform.rotation.y = 180;
	
	if(proximo == 25 || proximo == 28)
		personagens[0].transform.rotation.y = 0;

}

function MudaSprite() {
	
	//TOM
	
	switch (proximo) {
	
		case 12 || 16 || 20: //Tom normal
			personagens[0].GetComponent(SpriteRenderer).sprite = tomSprites[0];
			break;
		
		case 2 || 17: //Tom braço cruzado
			personagens[0].GetComponent(SpriteRenderer).sprite = tomSprites[1];
			break;
			
		case 4: //Tom pensativo
			personagens[0].GetComponent(SpriteRenderer).sprite = tomSprites[3];
			break;
		
		case 8: //Tom feliz
			personagens[0].GetComponent(SpriteRenderer).sprite = tomSprites[4];
			break;
		
		case 1 || 10 || 14 || 19: //Tom assustado
			personagens[0].GetComponent(SpriteRenderer).sprite = tomSprites[5];
			print ("Tom assustado");
			break;
		
		case 10 || 16:
			personagens[1].GetComponent(SpriteRenderer).sprite = maelzelSprites[0];
			break;
			
		case 9 || 15 || 32: //Maelzel de olhos fechados
			personagens[1].GetComponent(SpriteRenderer).sprite = maelzelSprites[1];
			break;
		
		case 34: //Maelzel de braços levantados
			personagens[1].GetComponent(SpriteRenderer).sprite = maelzelSprites[4];
			break;
		
		case 29: //Morgan com a mao levantada
			personagens[4].GetComponent(SpriteRenderer).sprite = morganSprites[1];
			break;
		
		case 31: //Morgan com o punho levantado e Tom assustado
			personagens[4].GetComponent(SpriteRenderer).sprite = morganSprites[3];
			personagens[0].GetComponent(SpriteRenderer).sprite = tomSprites[5];
			break;
		
		case 35: //Morgan cruzando os braços
			personagens[4].GetComponent(SpriteRenderer).sprite = morganSprites[2];
			break;
			
		default:
			print ("Mesma posiçao anterior");
			break;
	
	}
	/*
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
	}*/
	
	if(atiraCanhao)
		audio.PlayOneShot(tiroCanhao);

}

function MudaCenario() {

	cenario.GetComponent(SpriteRenderer).sprite = cenarioSprites[1];
	
	audio.clip = musicas[1];
	audio.Play();
	
	personagens[0].transform.position.x = -1;
	personagens[0].transform.rotation.y = 0;
	
	personagens[1].transform.position.x = -5;
	personagens[1].transform.rotation.y = 180;
	
	NarrativaPirataTexto.passaTexto = true;

}