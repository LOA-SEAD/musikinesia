#pragma strict

var personagens : GameObject[];
var tomSprites : Sprite[];
var maelzelSprites : Sprite[];
var morganSprites : Sprite[];
var narizSprites : Sprite[];

static var proximo : int;

function Start () {

}

function FixedUpdate () {

	if(proximo == 0) {
		if(personagens[0].transform.position.x > -4)
			personagens[0].transform.position.x -= Time.deltaTime * 10;
		
		else {
			proximo = 1;
			Changes();
		}
		
		if(personagens[1].transform.position.x > 1)
			personagens[1].transform.position.x -= Time.deltaTime * 8;
	
	}
		
}

function Changes() {

	if(proximo == 1) {
		yield WaitForSeconds (0.7);
		
		personagens[0].transform.rotation.y = 0;
		
		yield WaitForSeconds (0.7);
		
		personagens[0].transform.rotation.y = 180;
		
		yield WaitForSeconds (0.7);
		
		personagens[0].transform.rotation.y = 0;
		
		yield WaitForSeconds (0.5);
		
		NarrativaPirataTexto.chamaFuncao = true;
	}

}