#pragma strict

static var destruir : boolean; //acessada em btJogarSuburbio.js

function Start () {

}

function Update () {

	if(destruir)
		Destroy(gameObject);
	
}